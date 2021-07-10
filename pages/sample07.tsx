import { forwardRef, useImperativeHandle, useRef } from "react";

type ChildRef = () => void;

const Child = forwardRef<ChildRef>(function Child(_, ref) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => () => {
    inputRef.current?.focus();
  });

  return <input ref={inputRef} />;
});

export default function Sample07() {
  const ref = useRef<ChildRef>(null);

  return (
    <>
      <Child ref={ref} />
      <button
        onClick={() => {
          ref.current?.();
        }}
      >
        focus
      </button>
    </>
  );
}
