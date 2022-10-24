import PageFactory from '../PageFactory';
import ObjectContainer from '../../ObjectContainer';
import ns from '../../Namespace';
import AbstractController from '../../controller/AbstractController';
import Extension, { IExtension } from '../../extension/Extension';

describe('ima.core.PageFactory', () => {
  let oc: ObjectContainer;
  let pageFactory: PageFactory;

  const namespacePathUnit = 'test.unit';
  ns.namespace(namespacePathUnit);

  class MockExtension extends Extension {
    dependency: unknown;

    static get $dependencies() {
      return [];
    }

    constructor(dependency: unknown) {
      super();

      this.dependency = dependency;
    }
  }

  class MockExtension2 extends MockExtension {}

  class ClassConstructor extends AbstractController {
    dependency: unknown;

    static get $dependencies() {
      return [];
    }

    constructor(dependency: unknown) {
      super();

      this.dependency = dependency;
    }
  }

  class ClassConstructorWithExtensions extends AbstractController {
    dependency: unknown;

    static get $dependencies() {
      return [];
    }

    static extensionsTest: IExtension[] = [MockExtension];

    static get $extensions() {
      return ClassConstructorWithExtensions.extensionsTest;
    }

    constructor(dependency: unknown) {
      super();

      this.dependency = dependency;
    }
  }

  beforeEach(() => {
    oc = new ObjectContainer(ns);
    pageFactory = new PageFactory(oc);
  });

  describe('createController method', () => {
    it('should create controller with extension', () => {
      const controller = pageFactory.createController(
        ClassConstructorWithExtensions
      );

      expect(controller.getExtensions()).toHaveLength(1);
      expect(controller.getExtension(MockExtension)).toBeInstanceOf(
        MockExtension
      );
    });

    it('should create controller with extension in routes', () => {
      const controller = pageFactory.createController(ClassConstructor, {
        extensions: [MockExtension2],
      });

      expect(controller.getExtensions()).toHaveLength(1);
      expect(controller.getExtension(MockExtension2)).toBeInstanceOf(
        MockExtension2
      );
    });

    it('should create controller with own extension and extension in route', () => {
      const controller = pageFactory.createController(
        ClassConstructorWithExtensions,
        { extensions: [MockExtension2] }
      );

      expect(controller.getExtensions()).toHaveLength(2);
      expect(controller.getExtensions()[0]).toBeInstanceOf(MockExtension2);
      expect(controller.getExtensions()[1]).toBeInstanceOf(MockExtension);
      expect(controller.getExtension(MockExtension)).toBeInstanceOf(
        MockExtension
      );
      expect(controller.getExtension(MockExtension2)).toBeInstanceOf(
        MockExtension2
      );
    });

    it('should create controller with OC constant spread extensions', () => {
      oc.constant('$mockedExtensions', [MockExtension, MockExtension2]);

      ClassConstructorWithExtensions.extensionsTest = ['...$mockedExtensions'];
      const controller = pageFactory.createController(
        ClassConstructorWithExtensions
      );

      expect(controller.getExtensions()).toHaveLength(2);
      expect(controller.getExtensions()[0]).toBe(
        (oc.get('...$mockedExtensions') as [0])[0]
      );
      expect(controller.getExtensions()[0]).toBeInstanceOf(MockExtension);
      ClassConstructorWithExtensions.extensionsTest = [];
    });

    it('should create controller with OC constant extensions in router', () => {
      oc.constant('$mockedExtensions', [MockExtension, MockExtension2]);

      const controller = pageFactory.createController(ClassConstructor, {
        extensions: ['...$mockedExtensions'],
      });

      expect(controller.getExtensions()).toHaveLength(2);
      expect(controller.getExtensions()[0]).toBe(
        (oc.get('...$mockedExtensions') as [0])[0]
      );
      expect(controller.getExtensions()[0]).toBeInstanceOf(MockExtension);
    });

    it('should create controller with array of extensions', () => {
      const extensions = [MockExtension, MockExtension2];

      ClassConstructorWithExtensions.extensionsTest = extensions;
      const controller = pageFactory.createController(
        ClassConstructorWithExtensions
      );

      expect(controller.getExtensions()).toHaveLength(2);
      expect(controller.getExtensions()[0]).toBeInstanceOf(extensions[0]);
      expect(controller.getExtensions()[1]).toBeInstanceOf(extensions[1]);
      ClassConstructorWithExtensions.extensionsTest = [];
    });

    it('should create controller with array of extensions in route', () => {
      const extensions = [MockExtension, MockExtension2];

      const controller = pageFactory.createController(ClassConstructor, {
        extensions,
      });

      expect(controller.getExtensions()).toHaveLength(2);
      expect(controller.getExtensions()[0]).toBeInstanceOf(extensions[0]);
      expect(controller.getExtensions()[1]).toBeInstanceOf(extensions[1]);
    });

    it('should throw when spread not used in OC constant', () => {
      oc.constant('$mockedExtensions', [MockExtension, MockExtension2]);

      ClassConstructorWithExtensions.extensionsTest = ['$mockedExtensions'];
      expect(() =>
        pageFactory.createController(ClassConstructorWithExtensions)
      ).toThrow(
        'ima.core.AbstractController:addExtension: Expected instance of an extension, got function.'
      );
      ClassConstructorWithExtensions.extensionsTest = [];
    });
  });
});
