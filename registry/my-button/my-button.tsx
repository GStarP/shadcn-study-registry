import { useMount } from "ahooks";
import { useMyButton } from "@/registry/my-button/hooks/use-my-button";

export function MyButton() {
  useMyButton();

  useMount(() => {
    alert("ahooks.onMount");
  });

  return (
    <button
      className="border px-2 py-1 bg-black text-white"
      onClick={() => {
        console.log("my-button click");
      }}
    >
      MY
    </button>
  );
}
