import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Sidebar } from "widgets/Sidebar";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarHeader } from "widgets/SidebarHeader/ui/SidebarHeader";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Sidebar className={classNames("sidebar", {}, [])}>
        <SidebarHeader className={classNames("sidebarHeader", {}, [])} />
        <ul className={classNames("sidebarMenu", {}, [])}>
          <li className={classNames("sidebarMenuItem", {}, [])}>
            <AppLink theme={AppLinkTheme.LIGHT} to={"/"}>
              <span className={classNames("sidebarMenuIcon", {}, [])}>I</span>
              <span className={classNames("sidebarMenuTitle", {}, [])}>
                Главная станица
              </span>
            </AppLink>
          </li>
          <li className={classNames("sidebarMenuItem", {}, [])}>
            <AppLink theme={AppLinkTheme.LIGHT} to={"/about"}>
              <span className={classNames("sidebarMenuIcon", {}, [])}>I</span>
              <span className={classNames("sidebarMenuTitle", {}, [])}>
                О сайте
              </span>
            </AppLink>
          </li>
        </ul>
      </Sidebar>
      <header className="header">
        <nav className="navbar">
          <div className="toggle-icon">Menю</div>
          <div className="navbar-right">
            <button onClick={toggleTheme}>Toggle</button>
          </div>
        </nav>
      </header>
      <div className="content-wrapper">
        <div className="content">
          <AppRouter />
        </div>
      </div>
      <footer className="footer">Copyright © 2023. All right reserved</footer>
    </div>
  );
};

export default App;
