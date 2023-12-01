import type * as imaCore from '@ima/core';
import { ReactRenderer } from '@storybook/react';
import { StoryContextForLoaders, StrictArgs } from '@storybook/types';

export type InitAppConfigCallback = (
  storybookArgs: StoryContextForLoaders<ReactRenderer, StrictArgs>
) => Partial<imaCore.InitAppConfig>;

export type ImaInitializers = {
  initializer: InitAppConfigCallback;
  priority: number;
}[];

/**
 * Singleton storage for initializers, which can be registered
 * across multiple packages
 */
const initializers: ImaInitializers = [];

/**
 * Register custom ima boot config initializers, which extend the default
 * ima boot config. These are called after the default ima boot config,
 * which allows you to override or mock values from IMA.js.
 *
 * Theres additional `priority` parameter, which allows you to control
 * the order of initializers. The lower the number, the sooner the initializer
 * is called.
 */
export function registerImaInitializer(
  initializer: InitAppConfigCallback,
  priority = 0
): void {
  initializers.push({ initializer, priority });
}

/**
 * Returns all registered ima boot config initializer factories
 * sorted by priority.
 */
export function getImaInitializers(
  storybookArgs: StoryContextForLoaders<ReactRenderer, StrictArgs>
) {
  return initializers
    .sort((a, b) => a.priority - b.priority)
    .map(({ initializer }) => initializer)
    .map(callbackfn => callbackfn(storybookArgs));
}
