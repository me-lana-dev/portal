import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SidebarHeader.module.scss";

interface SidebarHeaderProps {
  className?: string;
}

export const SidebarHeader = ({ className }: SidebarHeaderProps) => {
  return (
    <div className={classNames(cls.SidebarHeader, {}, [className])}>
      <div className={classNames(cls.logoIcon, {}, [])}>L</div>
      <div className={classNames(cls.logoName, {}, [])}>ogotype</div>
    </div>
  );
};
