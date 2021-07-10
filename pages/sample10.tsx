import { useRef } from "react";

function useEnterKeyFocusControl() {
  const ref = useRef(new Map<number, HTMLInputElement>());
  return (index: number) => ({
    onKeyDown({ key }: { key: string }) {
      if (key !== "Enter") return;
      const sortedIndices = [...ref.current.keys()].sort();
      const nextIndex = sortedIndices[sortedIndices.indexOf(index) + 1];
      if (typeof nextIndex === "number") ref.current.get(nextIndex)?.focus();
    },
    ref(element: HTMLInputElement | null) {
      if (element) ref.current.set(index, element);
      else ref.current.delete(index);
    },
  });
}

export default function Sample10() {
  const register = useEnterKeyFocusControl();
  return (
    <>
      {[...Array(10).keys()].map((i) => (
        <input key={i} {...register(i)} />
      ))}
    </>
  );
}
