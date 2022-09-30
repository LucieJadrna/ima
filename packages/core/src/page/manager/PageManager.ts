import { PageAction } from '../PageTypes';
import { RouteOptions } from '../../router/Router';
import { StringParameters } from '../../CommonTypes';
import AbstractController from '../../controller/AbstractController';
import AbstractRoute from '../../router/AbstractRoute';

/**
 * The page manager is a utility for managing the current controller and its
 * view.
 */
export default abstract class PageManager {
  /**
   * Initializes the page manager.
   */
  abstract init(): void;

  /**
   * Starts to manage the provided controller and its view. The manager
   * stops the management of any previously managed controller and view.
   *
   * The controller and view will be initialized and rendered either into the
   * UI (at the client-side) or to the response to send to the client (at the
   * server-side).
   *
   * @param route A route instance that holds information about the
   *        page we should manage.
   * @param options The current route options.
   * @param params The route parameters of the
   *        current route.
   * @param action An action object describing what triggered the routing.
   * @return A promise that will resolve to information about the rendered page.
   *         The `status` will contain the HTTP status code to send to the
   *         client (at the server side) or determine the type of error page
   *         to navigate to (at the client side).
   */
  abstract manage(route: AbstractRoute, controller: typeof AbstractController, view: unknown, options: RouteOptions, params: StringParameters, action: PageAction): Promise<unknown>;

  /**
   * Finalization callback, called when the page manager is being discarded.
   * This usually happens when the page is hot-reloaded at the client side.
   */
  abstract destroy(): Promise<unknown>;
}
