import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

type ChildRef = () => void;

const Child = forwardRef<ChildRef>(function Child(_, ref) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const refValue = () => {
      inputRef.current?.focus();
    };

    // Callback Refの場合
    if (typeof ref === "function") {
      ref(refValue);
      return () => {
        ref(null);
      };
    }

    // Ref オブジェクトの場合
    if (ref) {
      ref.current = refValue;
      return () => {
        ref.current = null;
      };
    }
  });

  return <input ref={inputRef} />;
});

export default function Sample08() {
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
