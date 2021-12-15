import clsx from 'clsx';
import { FunctionComponent } from 'react';
import { FrameWrapper } from 'types';

import { Button, Icon } from '#/components';
import { ErrorWrapper } from '#/reducers/errorsReducer';
import { useErrorsDispatcher } from '#/stores';

export type FrameHeaderProps = {
  errorId: ErrorWrapper['id'];
  frameWrapper: FrameWrapper;
  onHeaderClick: React.MouseEventHandler<HTMLButtonElement>;
  isFragmentVisible: boolean;
  hasFragment: boolean;
};

const FrameHeader: FunctionComponent<FrameHeaderProps> = ({
  frameWrapper,
  errorId,
  onHeaderClick,
  hasFragment,
  isFragmentVisible
}) => {
  const dispatch = useErrorsDispatcher();
  const { frame } = frameWrapper;
  const fileUri = frameWrapper.showOriginal
    ? `${frame.getPrettyOriginalFileUri()}:${frame.originalLineNumber}`
    : `${frame.fileName}:${frame.lineNumber}:${frame.columnNumber}`;

  return (
    <div
      className={clsx(
        'flex relative justify-between items-center shadow-lg border-slate-600 shadow-slate-800/25',
        { 'border-b': isFragmentVisible }
      )}>
      <button
        onClick={onHeaderClick}
        className="flex justify-start items-center py-2 px-4 rounded-tl-md border-r border-b-2 transition-all hover:bg-slate-600 border-r-slate-600 border-b-cyan-500">
        <div className="mr-4 text-slate-400/50">
          <Icon
            icon="chevron"
            className={clsx('transition-transform', {
              'rotate-90': isFragmentVisible
            })}
          />
        </div>
        <div style={{ height: '40px' }} className="text-left grow-0">
          <div className="flex items-center text-sm leading-6">
            {!hasFragment && (
              <Icon icon="alert" size="xs" className="mr-1 text-rose-400" />
            )}
            {frame.getFunctionName()}
          </div>
          <div className="text-xs text-slate-400">{fileUri}</div>
        </div>
      </button>

      <div className="flex px-4">
        <Button
          linkStyle
          size="xs"
          color={frameWrapper.showOriginal ? 'green' : 'light'}
          onClick={() =>
            dispatch({
              type: frameWrapper.showOriginal ? 'viewCompiled' : 'viewOriginal',
              payload: { errorId, frameId: frameWrapper.id }
            })
          }>
          {frameWrapper.showOriginal ? (
            <Icon icon="openEye" />
          ) : (
            <Icon icon="closedEye" />
          )}
        </Button>

        <Button size="xs" linkStyle color="light">
          <Icon icon="edit" />
        </Button>
      </div>
    </div>
  );
};

export default FrameHeader;
