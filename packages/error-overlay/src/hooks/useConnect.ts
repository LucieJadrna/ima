import { parseCompileError } from '@ima/dev-utils/dist/compileErrorParser';
import { useContext, useEffect, useState } from 'react';
import { SourceMapConsumer } from 'source-map';

import { OverlayContext } from '#/components';
import { SourceStorage } from '#/entities';
import { ParsedError } from '#/types';
import { mapCompileStackFrame, mapStackFramesToOriginal } from '#/utils';

/**
 * Connects error overlay to __IMA_HMR interface.
 */
function useConnect() {
  const { publicUrl } = useContext(OverlayContext);
  const [error, setError] = useState<ParsedError | null>(null);
  const sourceStorage = new SourceStorage(publicUrl);

  // TODO dont update if the error is the same
  // let prevError = StatsError

  // Subscribe to HMR events
  useEffect(() => {
    // Needed to enable source map parsing
    // @ts-expect-error: Not available in typings
    SourceMapConsumer.initialize({
      'lib/mappings.wasm': `${publicUrl}/__error-overlay-static/mappings.wasm`,
    });

    window.__IMA_HMR.on('close', async () => {
      setError(null);
    });

    window.__IMA_HMR.on('clear', async () => {
      setError(null);
    });

    window.__IMA_HMR.on('error', async data => {
      if (!data) {
        return;
      }

      const { type, error } = data;

      try {
        // Parse compile error
        if (type === 'compile') {
          const parsedError = await parseCompileError(error);

          if (!parsedError) {
            return;
          }

          const { message, name, column, fileUri, line } = parsedError;
          const frame = await mapCompileStackFrame(
            fileUri,
            line,
            column,
            sourceStorage
          );

          if (!frame) {
            return;
          }

          setError({
            name,
            message,
            type,
            frames: [frame],
          });
        } else if (type === 'runtime') {
          // Parse runtime error
          const { name, message, stack } = error;
          const frames = await mapStackFramesToOriginal(stack, sourceStorage);

          if (!frames) {
            return;
          }

          setError({
            name,
            message,
            type,
            frames,
          });
        }

        // Cleanup wasm allocated sourcemaps
        sourceStorage.cleanup();
      } catch (error) {
        console.error('Unable to parse an error in ima-error-overlay.');
        console.error(error);
      }
    });
  }, []);

  return { error, setError };
}

export { useConnect };
