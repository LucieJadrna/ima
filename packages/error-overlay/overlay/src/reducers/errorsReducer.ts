import uid from 'easy-uid';
import { ErrorType } from 'types';

import { ErrorsAction } from '#/actions';
import { StackFrame } from '#/entities';

export type FrameWrapper = {
  id: string;
  frame: StackFrame;
  showOriginal: boolean;
  isCollapsed: boolean;
};

export interface ErrorWrapper {
  id: string;
  name: string;
  message: string;
  type: ErrorType;
  showOriginal: boolean;
  isCollapsed: boolean;
  frames: {
    [key: string]: FrameWrapper;
  };
}

export interface ErrorsState {
  currentErrorId: ErrorWrapper['id'] | null;
  errors: {
    [key: string]: ErrorWrapper;
  };
  errorIds: string[];
}

const errorsInitialState: ErrorsState = {
  currentErrorId: null,
  errors: {},
  errorIds: []
};

function errorsReducer(state: ErrorsState, action: ErrorsAction): ErrorsState {
  switch (action.type) {
    case 'add': {
      const { name, message, type, frames } = action.payload;
      const errorId = uid();

      // Check for duplicates
      const isDuplicate = Object.values(state.errors).findIndex(
        error =>
          error.name === name &&
          error.message === message &&
          error.type === type
      );

      if (isDuplicate !== -1) {
        return state;
      }

      return {
        ...state,
        currentErrorId: !state.currentErrorId ? errorId : state.currentErrorId,
        errors: {
          ...state.errors,
          [errorId]: {
            id: errorId,
            name,
            message,
            type,
            showOriginal: true,
            isCollapsed: true,
            frames: frames.reduce<ErrorWrapper['frames']>(
              (accFrames, curFrame) => {
                const id = uid();
                accFrames[id] = {
                  id,
                  frame: curFrame,
                  showOriginal: true,
                  isCollapsed:
                    !curFrame.originalSourceFragment ||
                    curFrame.originalSourceFragment.length === 0
                };

                return accFrames;
              },
              {}
            )
          }
        },
        errorIds: [...state.errorIds, errorId]
      };
    }

    case 'collapse':
    case 'expand':
    case 'viewCompiled':
    case 'viewOriginal': {
      const { errorId, frameId } = action.payload || {};
      const isCollapseAction = ['collapse', 'expand'].includes(action.type);
      const isViewAction = ['viewCompiled', 'viewOriginal'].includes(
        action.type
      );

      const isCollapsedResult = action.type === 'collapse';
      const showOriginalResult = action.type === 'viewOriginal';
      const currentError = state.errors[errorId];

      // Update specific frame
      if (errorId && frameId) {
        return {
          ...state,
          errors: {
            ...state.errors,
            [errorId]: {
              ...state.errors[errorId],
              frames: {
                ...state.errors[errorId].frames,
                [frameId]: {
                  ...state.errors[errorId].frames[frameId],
                  showOriginal: isViewAction
                    ? showOriginalResult
                    : state.errors[errorId].frames[frameId].showOriginal,
                  isCollapsed: isCollapseAction
                    ? isCollapsedResult
                    : state.errors[errorId].frames[frameId].isCollapsed
                }
              }
            }
          }
        };
      }

      // Return state if there is no change
      if (
        (action.type === 'viewOriginal' && currentError.showOriginal) ||
        (action.type === 'viewCompiled' && !currentError.showOriginal) ||
        (action.type === 'expand' && !currentError.isCollapsed) ||
        (action.type === 'collapse' && currentError.isCollapsed)
      ) {
        return state;
      }

      // Reset all frames and update global state
      return {
        ...state,
        errors: {
          ...state.errors,
          [errorId]: {
            ...currentError,
            showOriginal: isViewAction
              ? showOriginalResult
              : state.errors[errorId].showOriginal,
            isCollapsed: isCollapseAction
              ? isCollapsedResult
              : state.errors[errorId].isCollapsed,
            frames: Object.values(currentError.frames).reduce<
              ErrorWrapper['frames']
            >((accFrames, curFrame) => {
              accFrames[curFrame.id] = {
                ...curFrame,
                showOriginal: isViewAction
                  ? showOriginalResult
                  : state.errors[errorId].frames[curFrame.id].showOriginal
              };

              return accFrames;
            }, {})
          }
        }
      };
    }

    case 'next': {
      if (!state.currentErrorId) {
        return state;
      }

      return {
        ...state,
        currentErrorId:
          state.errorIds[
            (state.errorIds.indexOf(state.currentErrorId) + 1) %
              state.errorIds.length
          ]
      };
    }

    case 'previous': {
      if (!state.currentErrorId) {
        return state;
      }

      const newIndex = state.errorIds.indexOf(state.currentErrorId) - 1;

      if (newIndex < 0) {
        return {
          ...state,
          currentErrorId: state.errorIds[state.errorIds.length - 1]
        };
      }

      return {
        ...state,
        currentErrorId: state.errorIds[newIndex]
      };
    }

    default:
      return state;
  }
}

export { errorsInitialState, errorsReducer };
