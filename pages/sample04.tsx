import { useRef } from "react";

function Child() {
  return <div>Child</div>;
}

export default function Sample04() {
  const ref = useRef<any>(null);

  // @ts-expect-error Property 'ref' does not exist on type 'IntrinsicAttributes'.
  return <Child ref={ref} />;
}
