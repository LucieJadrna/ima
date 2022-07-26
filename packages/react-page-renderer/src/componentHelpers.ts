import classnames from 'classnames';
import { Component, ContextType, PureComponent } from 'react';
import ReactDOM from 'react-dom';

import { Utils } from '@/types';
import AbstractComponent from './AbstractComponent';
import AbstractPureComponent from './AbstractPureComponent';
import PageContext from './PageContext';

/**
 * Retrieves the view utilities from the component's current context or
 * properties (preferring the context).
 *
 * @param props The component's current properties.
 * @param context The component's current context.
 * @return The retrieved view utilities.
 * @throws Error Throw if the view utils cannot be located in the provided
 *         properties nor context.
 */
export function getUtils(props: any, context: ContextType<typeof PageContext>): Utils {
  const utils = context ? context.$Utils || props.$Utils : props.$Utils;

  if ($Debug && !utils) {
    throw new Error(
      'The component cannot access the view utils because they were ' +
      'not passed in the initial props or context as $Utils.'
    );
  }

  return utils;
}

/**
 * Returns the localized phrase identified by the specified key. The
 * placeholders in the localization phrase will be replaced by the provided
 * values.
 *
 * @param component The component
 *        requiring the localization.
 * @param key Localization key.
 * @param params Values for replacing the
 *        placeholders in the localization phrase.
 * @return Localized phrase.
 */
export function localize(component: AbstractComponent | AbstractPureComponent, key: string, params: object): string {
  return component.utils!.$Dictionary.get(key, params);
}

/**
 * Generates an absolute URL using the provided route name (see the
 * <code>app/config/routes.js</code> file). The provided parameters will
 * replace the placeholders in the route pattern, while the extraneous
 * parameters will be appended to the generated URL's query string.
 *
 * @param component The component
 *        requiring the generating of the URL.
 * @param name The route name.
 * @param params Router parameters and
 *        extraneous parameters to add to the URL as a query string.
 * @return The generated URL.
 */
export function link(component: AbstractComponent | AbstractPureComponent, name: string, params: object): string {
  return component.utils!.$Router.link(name, params);
}

/**
 * Generate a string of CSS classes from the properties of the passed-in
 * object that resolve to {@code true}.
 *
 * @example
 *        this.cssClasses('my-class my-class-modificator', true);
 * @example
 *        this.cssClasses({
 *            'my-class': true,
 *            'my-class-modificator': this.props.modificator
 *        }, true);
 * @param component The component
 *        requiring the composition of the CSS class names.
 * @param classRules CSS classes in a
 *        string separated by whitespace, or a map of CSS class names to
 *        boolean values. The CSS class name will be included in the result
 *        only if the value is {@code true}.
 * @param includeComponentClassName
 * @return String of CSS classes that had their property resolved
 *         to {@code true}.
 */
export function cssClasses(component: AbstractComponent | AbstractPureComponent, classRules: string | object, includeComponentClassName: boolean): string {
  return component.utils!.$CssClasses(
    classRules,
    includeComponentClassName ? component : ''
  );
}

/**
 * Generate a string of CSS classes from the properties of the passed-in
 * object that resolve to {@code true}.
 *
 * @param classRules CSS classes in a
 *        string separated by whitespace, or a map of CSS class names to
 *        boolean values. The CSS class name will be included in the result
 *        only if the value is {@code true}.
 * @param component The component
 *        requiring the composition of the CSS class names, if it has the
 *        {@code className} property set and requires its inclusion this time.
 * @return String of CSS classes that had their property resolved
 *         to {@code true}.
 */
export function defaultCssClasses(classRules: string | object, component: string | AbstractComponent | AbstractPureComponent): string {
  let extraClasses = typeof component === 'string' ? component : null;

  // TODO find out why is ts complaining..
  const isComponent = component instanceof Component;
  const isPureComponent = component instanceof PureComponent;

  if (
    !extraClasses &&
    (isComponent || isPureComponent)
  ) {
    extraClasses = component.props.className;
  }

  return classnames(classRules, extraClasses);
}

/**
 * Creates and sends a new IMA.js DOM custom event from the provided component.
 *
 * @param component The component
 *        at which's root element the event will originate.
 * @param eventName The name of the event.
 * @param data Data to send within the event.
 */
export function fire(component: AbstractComponent | AbstractPureComponent, eventName: string, data: any = null) {
  return component.utils!.$EventBus.fire(// TODO findDOMNode remove
    ReactDOM.findDOMNode(component) as EventTarget, //eslint-disable-line react/no-find-dom-node
    eventName,
    data
  );
}

/**
 * Registers the provided event listener for execution whenever an IMA.js
 * DOM custom event of the specified name occurs at the specified event
 * target.
 *
 * @param component The component
 *        requesting the registration of the event listener.
 * @param eventTarget The react component or
 *        event target at which the listener should listen for the event.
 * @param eventName The name of the event for which to listen.
 * @param listener The listener for event to register.
 */
export function listen(component: AbstractComponent | AbstractPureComponent, eventTarget: EventTarget, eventName: string, listener: Function) {
  return component.utils!.$EventBus.listen(eventTarget, eventName, listener);
}

/**
 * Deregisters the provided event listener for an IMA.js DOM custom event
 * of the specified name at the specified event target.
 *
 * @param component The component
 *        that requested the registration of the event listener.
 * @param eventTarget The react component or
 *        event target at which the listener should listen for the event.
 * @param eventName The name of the event for which to listen.
 * @param listener The listener for event to register.
 */
export function unlisten(component: AbstractComponent | AbstractPureComponent, eventTarget: EventTarget, eventName: string, listener: Function) {
  return component.utils!.$EventBus.unlisten(eventTarget, eventName, listener);
}
