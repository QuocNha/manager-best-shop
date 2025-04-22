import { Settings } from "@/context/settingsContext";
import { ReactNode } from "react";

export type ContentWidth = "full" | "boxed";

export type ThemeColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success"
  | "cyan";

export type NavLink = {
  path?: string;
  title: string;
  action?: string;
  subject?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  icon?: string | string[] | ReactNode;
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
};

export type NavSectionTitle = {
  sectionTitle: string;
  action?: string;
  subject?: string;
};

export type NavSubMenu = {
  path?: string;
  title: string;
  action?: string;
  subject?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  icon?: string | string[] | ReactNode;
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
  subMenu?: {
    path?: string;
    title: string;
    badgeColor?:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "warning"
      | "info";
    icon?: string | string[] | ReactNode;
  }[];
};

export type VerticalNavItemsType = (NavLink | NavSectionTitle | NavSubMenu)[];

export type BlankLayoutProps = {
  children: ReactNode;
};

export type UnAuthLayoutProps = {
  children: ReactNode;
};

export type Skin = "default" | "bordered" | "semi-dark";

export type LayoutProps = {
  children: ReactNode;
  verticalAppBarContent?: (props?: unknown) => ReactNode;
  verticalNavItems?: VerticalNavItemsType;
  settings: Settings;
};

export type NavGroup = {
  icon?: unknown;
  title: string;
  action?: string;
  subject?: string;
  badgeContent?: string;
  children?: (NavGroup | NavLink)[];
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
};
