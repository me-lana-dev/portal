import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { FC } from "react";
import { SidebarHeader } from "widgets/SidebarHeader/ui/SidebarHeader";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className, children }) => {
  return (
    <aside className={classNames(cls.sidebar, {}, [className])}>
      {children}
    </aside>
  );
};
