import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.998 7.143a1 1 0 0 1 1.029 1.715 24.9 24.9 0 0 0-7.917 7.548l-.766 1.149a1 1 0 0 1-1.69-.04l-.571-.954a7 7 0 0 0-2.125-2.229 1 1 0 1 1 1.109-1.664 9 9 0 0 1 2.482 2.477 26.9 26.9 0 0 1 8.449-8.002\"/>",
  light: "",
} as const;

export default function CheckmarkStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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