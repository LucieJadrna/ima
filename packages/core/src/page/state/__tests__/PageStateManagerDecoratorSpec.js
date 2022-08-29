import PageStateManager from '../PageStateManagerImpl';
import PageStateManagerDecorator from '../PageStateManagerDecorator';

describe('ima.core.page.state.PageStateManagerDecorator', () => {
  let pageStateManager = null;
  let allowedStateKeys = ['allow'];
  let decoratedPageStateManager = null;
  let state = {
    allow: 1,
    deny: 0,
  };

  beforeEach(() => {
    pageStateManager = new PageStateManager();
    decoratedPageStateManager = new PageStateManagerDecorator(
      pageStateManager,
      allowedStateKeys
    );
  });

  it('should call method clear', () => {
    jest.spyOn(pageStateManager, 'clear').mockImplementation();

    decoratedPageStateManager.clear();

    expect(pageStateManager.clear).toHaveBeenCalled();
  });

  it('should return current page state', () => {
    jest.spyOn(pageStateManager, 'getState').mockReturnValue(state);

    decoratedPageStateManager.getState();

    expect(decoratedPageStateManager.getState()).toStrictEqual(state);
  });

  it('should return all history of states', () => {
    jest.spyOn(pageStateManager, 'getAllStates').mockReturnValue([state]);

    expect(decoratedPageStateManager.getAllStates()).toStrictEqual([state]);
  });

  describe('setState method', () => {
    it('should throw GenericError for at least one deny key', () => {
      expect(() => {
        decoratedPageStateManager.setState({ deny: 1 });
      }).toThrow();
    });

    it('should throw GenericError for at least one deny key in transaction mode', () => {
      decoratedPageStateManager.beginTransaction();

      expect(() => {
        decoratedPageStateManager.setState({ deny: 1 });
      }).toThrow();

      decoratedPageStateManager.cancelTransaction();
    });

    it('should setState for all allowed keys', () => {
      let patchState = {
        allow: 0,
      };

      jest.spyOn(pageStateManager, 'setState').mockImplementation();

      decoratedPageStateManager.setState(patchState);

      expect(pageStateManager.setState).toHaveBeenCalledWith(patchState);
    });

    it('should commit transaction for all allowed keys', () => {
      let patchState = {
        allow: 0,
      };

      decoratedPageStateManager.beginTransaction();
      decoratedPageStateManager.setState(patchState);
      decoratedPageStateManager.commitTransaction();

      expect(pageStateManager.getState()).toStrictEqual(patchState);
    });
  });
});
