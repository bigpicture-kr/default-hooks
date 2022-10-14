import { useCallback, useEffect } from "react";

const useListenKeyboard = <T = undefined, K = void>({
  key,
  handler,
  keyboardEvent = "keydown"
}: {
  readonly key: string;
  readonly handler: (param?: T) => K;
  readonly keyboardEvent?: "keydown" | "keyup" | "keypress";
}) => {
  const _handler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        handler();
      }
    },
    [handler, key]
  );

  useEffect(() => {
    document.body.addEventListener(keyboardEvent, _handler);

    return () => {
      document.body.removeEventListener(keyboardEvent, _handler);
    };
  }, [_handler, handler, key, keyboardEvent]);

  return _handler;
};

export default useListenKeyboard;
