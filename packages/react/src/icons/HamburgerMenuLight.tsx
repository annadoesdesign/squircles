import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M1.194 18.003a122.3 122.3 0 0 1 22.137 0 .75.75 0 0 1-.137 1.494 120.7 120.7 0 0 0-21.863 0 .75.75 0 0 1-.137-1.494M1.194 11.003a122.3 122.3 0 0 1 22.137 0 .75.75 0 0 1-.137 1.494 120.7 120.7 0 0 0-21.863 0 .75.75 0 0 1-.137-1.494M1.194 4.003a122.3 122.3 0 0 1 22.137 0 .75.75 0 0 1-.137 1.494 120.8 120.8 0 0 0-21.863 0 .75.75 0 0 1-.137-1.494\"/>",
} as const;

export default function HamburgerMenuLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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