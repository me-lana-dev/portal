import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // for testing
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
