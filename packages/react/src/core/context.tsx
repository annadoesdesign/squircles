import * as React from "react";

export type Weight = "fill" | "regular" | "light";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
  weight?: Weight;
  mirrored?: boolean;
  "aria-label"?: string;
};

// Keep the context value narrow (don’t include all SVG props)
export type IconContextValue = {
  size: number | string;
  color: string;
  weight: Weight;     // <- union type here
  mirrored: boolean;
};

export const IconContext = React.createContext<IconContextValue>({
  size: 24,
  color: "currentColor",
  weight: "regular",
  mirrored: false,
});