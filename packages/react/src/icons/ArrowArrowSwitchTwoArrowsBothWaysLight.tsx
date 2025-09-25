import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.846 11.126a.75.75 0 0 1 .832 1.248c-.944.63-2.03 1.627-2.892 2.626h14.476a.75.75 0 0 1 0 1.5H5.786c.863 1 1.948 1.997 2.892 2.626a.75.75 0 0 1-.832 1.248c-1.483-.988-3.22-2.725-4.208-4.208a.75.75 0 0 1 0-.832c.989-1.483 2.725-3.22 4.208-4.208M15.638 3.334a.75.75 0 0 1 1.04-.208c1.483.988 3.22 2.725 4.208 4.208a.75.75 0 0 1 0 .832c-.988 1.483-2.725 3.22-4.208 4.208a.75.75 0 0 1-.832-1.248c.944-.63 2.03-1.627 2.893-2.626H4.262a.75.75 0 1 1 0-1.5H18.74c-.864-1-1.949-1.997-2.893-2.626a.75.75 0 0 1-.208-1.04\"/>",
} as const;

export default function ArrowArrowSwitchTwoArrowsBothWaysLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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