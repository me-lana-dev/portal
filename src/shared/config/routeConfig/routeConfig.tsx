import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum AppRuotes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRuotes, string> = {
  [AppRuotes.MAIN]: "/",
  [AppRuotes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRuotes, RouteProps> = {
  [AppRuotes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRuotes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
