import { useRef } from "react";

export default function Sample01() {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <input ref={ref} />
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
