import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SidebarMenuItem.module.scss";
import { FC } from "react";

interface SidebarMenuItemProps {
  className?: string;
}

export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames(cls.SidebarMenuItem, {}, [className])}>
      {children}
    </div>
  );
};
