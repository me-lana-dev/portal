import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SidebarMenu.module.scss";
import { FC } from "react";

interface SidebarMenuProps {
  className?: string;
}

export const SidebarMenu: FC<SidebarMenuProps> = ({ className, children }) => {
  return (
    <div className={classNames(cls.SidebarMenu, {}, [className])}>
      {children}
    </div>
  );
};
