import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <aside className="sidebar-wrapper">
        <div className="sidebar-header">
          <div className="logo-icon">L</div>
          <div className="logo-name">ogotype</div>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <Link to={"/"} className="sidebar-menu-link active">
              <span className="sidebar-menu-icon">I</span>
              <span className="sidebar-menu-title">Главная станица</span>
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link to={"/about"} className="sidebar-menu-link">
              <span className="sidebar-menu-icon">I</span>
              <span className="sidebar-menu-title">О сайте</span>
            </Link>
          </li>
        </ul>
      </aside>
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
