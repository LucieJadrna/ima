import PageHandler from '../PageHandler';
import PageHandlerRegistry from '../PageHandlerRegistry';
import SerialBatch from '../../../execution/SerialBatch';
import { toMockedInstance } from 'to-mock';
import { ManagedPage, PageAction } from '../../PageTypes';

describe('ima.core.page.handler.PageHandlerRegistry', () => {
  let registry: PageHandlerRegistry;
  const pageManagerHandler: PageHandler = toMockedInstance(PageHandler);

  beforeEach(() => {
    jest
      .spyOn(pageManagerHandler, 'handlePreManagedState')
      .mockImplementation(() => {
        return;
      });
    jest
      .spyOn(pageManagerHandler, 'handlePostManagedState')
      .mockImplementation(() => {
        return;
      });
    registry = new PageHandlerRegistry(pageManagerHandler);
    registry.init();
  });

  afterEach(() => {
    registry.destroy();
  });

  describe('constructor', () => {
    it('should construct SerialBatch for pre-handlers and post-handlers', () => {
      expect(registry['_preManageHandlers']).toBeInstanceOf(SerialBatch);
      expect(registry['_postManageHandlers']).toBeInstanceOf(SerialBatch);
    });
  });

  describe('handlePreManagedState() method', () => {
    it('should call subsequent pre-manage handlers', async () => {
      await registry
        .handlePreManagedState(
          {} as ManagedPage,
          {} as ManagedPage,
          {} as PageAction
        )
        .then(() => {
          expect(pageManagerHandler.handlePreManagedState).toHaveBeenCalled();
        });
    });
  });

  describe('handlePostManagedState() method', () => {
    it('should call subsequent post-manage handlers', async () => {
      await registry
        .handlePostManagedState(
          {} as ManagedPage,
          {} as ManagedPage,
          {} as PageAction
        )
        .then(() => {
          expect(pageManagerHandler.handlePostManagedState).toHaveBeenCalled();
        });
    });
  });
});
