import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // for testing
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
