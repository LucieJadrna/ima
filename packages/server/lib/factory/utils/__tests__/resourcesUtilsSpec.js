const {
  renderStyles,
  prepareDefaultResources,
  renderScript,
} = require('../resourcesUtils');
const manifestMock = require('../../__mocks__/manifest.json');

jest.mock('fs', () => {
  const { toMockedInstance } = jest.requireActual('to-mock');
  const originalModule = jest.requireActual('fs');

  return {
    ...toMockedInstance(originalModule, {
      existsSync() {
        return true;
      },
      readFileSync(path) {
        if (path.endsWith('manifest.json')) {
          return JSON.stringify(manifestMock);
        }

        return 'runner#{source}';
      },
    }),
  };
});

describe('resourcesUtils', () => {
  describe('renderStyles', () => {
    it('should return empty string for invalid input', () => {
      expect(renderStyles()).toBe('');
      expect(renderStyles([])).toBe('');
      expect(renderStyles({})).toBe('');
      expect(renderStyles(null)).toBe('');
      expect(renderStyles('/static/app.css')).toBe('');
    });

    it('should return link stylesheet tags for string items', () => {
      expect(renderStyles(['/static/app.css'])).toBe(
        '<link rel="stylesheet" href="/static/app.css" />'
      );

      expect(
        renderStyles([
          '/static/app1.css',
          '/static/app2.css',
          '/static/app3.css',
        ])
      ).toBe(
        '<link rel="stylesheet" href="/static/app1.css" />' +
          '<link rel="stylesheet" href="/static/app2.css" />' +
          '<link rel="stylesheet" href="/static/app3.css" />'
      );
    });

    it('should return link tag with custom attributes', () => {
      expect(
        renderStyles([
          [
            '/static/app.css',
            { type: 'text/css', rel: 'preload', as: 'style' },
          ],
        ])
      ).toBe(
        '<link href="/static/app.css" rel="preload" type="text/css" as="style" />'
      );
    });

    it('should insert custom mini script for fallback sources', () => {
      expect(
        renderStyles([
          [
            '/static/app.css',
            { rel: 'stylesheet', fallback: '/static/fallback.css' },
          ],
        ])
      ).toBe(
        `<link href="/static/app.css" rel="stylesheet" onerror="this.onerror=null;this.href='/static/fallback.css';" />`
      );
    });
  });

  describe('renderScript', () => {
    it('should return empty string for invalid input', () => {
      expect(renderScript('name')).toBe('');
      expect(renderScript(undefined, [])).toBe('');
      expect(renderScript('name', [])).toBe('');
      expect(renderScript({}, {})).toBe('');
      expect(renderScript('name', null)).toBe('');
    });

    it('should wrap script contents in script tag', () => {
      expect(
        renderScript('revival-settings', 'function () {}')
      ).toMatchSnapshot();
    });
  });

  describe('prepareDefaultResources', () => {
    afterEach(() => {
      process.env.IMA_PUBLIC_PATH = '';
    });

    it('should prepare default sources structure from provided manifest file', () => {
      expect(prepareDefaultResources(manifestMock, 'en')).toMatchSnapshot();
    });

    it('should add fallbacks when IMA_PUBLIC_PATH is defined', () => {
      process.env.IMA_PUBLIC_PATH = 'cdn://';

      expect(prepareDefaultResources(manifestMock, 'en')).toMatchSnapshot();
    });

    it('should add fallbacks when IMA_PUBLIC_PATH is defined, with proper custom config publicPath', () => {
      process.env.IMA_PUBLIC_PATH = 'cdn://';

      expect(
        prepareDefaultResources(
          {
            ...manifestMock,
            publicPath: '/pro/static/',
          },
          'en'
        )
      ).toMatchSnapshot();
    });

    it('should skip compilations without assets', () => {
      const sources = prepareDefaultResources(
        {
          ...manifestMock,
          assetsByCompiler: {
            ...manifestMock.assetsByCompiler,
            client: {},
          },
        },
        'en'
      );

      expect(sources).toMatchSnapshot();
    });
  });
});
