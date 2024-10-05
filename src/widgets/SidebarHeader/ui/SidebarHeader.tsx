import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SidebarHeader.module.scss";

interface SidebarHeaderProps {
  className?: string;
}

export const SidebarHeader = ({ className }: SidebarHeaderProps) => {
  return (
    <div className={classNames(cls.SidebarHeader, {}, [className])}>
      <div>L</div>
      <div>ogotype</div>
    </div>
  );
};
