import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21.919 8.29a.751.751 0 0 1 1.187.919q-.231.298-.485.59l1.42 1.42a.75.75 0 0 1-1.059 1.062l-1.406-1.406a14 14 0 0 1-3 2.118l1.56 2.34a.75.75 0 0 1-1.247.833l-1.697-2.544a13 13 0 0 1-3.93.855v3.273a.75.75 0 0 1-1.5 0v-3.273a13 13 0 0 1-3.93-.855l-1.695 2.544a.75.75 0 0 1-1.249-.832l1.56-2.34a14 14 0 0 1-3-2.12L2.042 12.28a.75.75 0 0 1-1.06-1.062l1.42-1.42a13 13 0 0 1-.483-.59.751.751 0 0 1 1.187-.918C5.078 10.84 8.444 13 12.513 13c4.068 0 7.434-2.16 9.406-4.71\"/>",
} as const;

export default function EyeClosedEyeHiddenHideLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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