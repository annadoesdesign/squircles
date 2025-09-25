import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21.722 8.39a1 1 0 0 1 1.582 1.222q-.166.213-.343.423l1.259 1.259a1 1 0 0 1-1.414 1.414l-1.239-1.239c-.779.697-1.66 1.332-2.63 1.865l1.408 2.112a1 1 0 0 1-1.664 1.11l-1.586-2.38a13.2 13.2 0 0 1-3.582.785V18a1 1 0 0 1-2 0v-3.04a13.2 13.2 0 0 1-3.583-.784l-1.585 2.378a1 1 0 0 1-1.664-1.109l1.407-2.112a14.3 14.3 0 0 1-2.631-1.864L2.22 12.708a1 1 0 0 1-1.414-1.414l1.257-1.26q-.176-.209-.341-.422A1 1 0 0 1 3.304 8.39c1.933 2.5 5.23 4.612 9.209 4.612s7.276-2.112 9.209-4.612\"/>",
  light: "",
} as const;

export default function EyeClosedEyeHiddenHideStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
  const ctx = React.useContext(IconContext);
  const { size = ctx.size, color = ctx.color, weight = ctx.weight, mirrored = ctx.mirrored, ...rest } = props;
  const g = paths[weight] ?? paths.regular ?? paths.fill ?? paths.light ?? "";
  const transform = mirrored ? "scale(-1,1) translate(-256,0)" : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      {...rest}
    >
      <g transform={transform} dangerouslySetInnerHTML={{ __html: g }} />
    </svg>
  );
}