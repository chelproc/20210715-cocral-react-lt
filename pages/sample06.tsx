import { Ref, useRef } from "react";

function Child(props: { innerRef: Ref<HTMLInputElement> }) {
  return <input ref={props.innerRef} />;
}

export default function Sample06() {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <Child innerRef={ref} />
      <button
        onClick={() => {
          ref.current?.click();
        }}
      />
    </>
  );
}
