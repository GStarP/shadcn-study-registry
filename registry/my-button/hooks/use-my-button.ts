import { useEffect } from "react";

export const useMyButton = () => {
  useEffect(() => {
    console.log("my-button render");
  });
};
