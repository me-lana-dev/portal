import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { FC } from "react";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={classNames(cls.sidebar, {}, [className])}>
      <div className={classNames(cls.sidebarHeader, {}, [])}>
        <div className={classNames(cls.logoIcon, {}, [])}>L</div>
        <div className={classNames(cls.logoName, {}, [])}>ogotype</div>
      </div>
      <ul className={classNames(cls.sidebarMenu, {}, [className])}>
        <li className={classNames(cls.sidebarMenuItem, {}, [className])}>
          <AppLink theme={AppLinkTheme.LIGHT} to={"/"}>
            <span className={classNames(cls.sidebarMenuIcon, {}, [className])}>
              I
            </span>
            <span className={classNames(cls.sidebarMenuTitle, {}, [className])}>
              Главная станица
            </span>
          </AppLink>
        </li>
        <li className={classNames(cls.sidebarMenuItem, {}, [className])}>
          <AppLink theme={AppLinkTheme.LIGHT} to={"/about"}>
            <span className={classNames(cls.sidebarMenuIcon, {}, [className])}>
              I
            </span>
            <span className={classNames(cls.sidebarMenuTitle, {}, [className])}>
              О сайте
            </span>
          </AppLink>
        </li>
      </ul>
    </aside>
  );
};
