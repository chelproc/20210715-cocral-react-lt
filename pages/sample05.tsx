import { forwardRef, useRef } from "react";

const Child = forwardRef<HTMLInputElement>(function Child(_, ref) {
  return <input ref={ref} />;
});

export default function Sample05() {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <Child ref={ref} />
      <button
        onClick={() => {
          ref.current?.focus();
        }}
      >
        focus
      </button>
    </>
  );
}
