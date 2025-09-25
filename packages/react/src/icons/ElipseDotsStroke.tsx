import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.512 10c1.667 0 2 .333 2 2s-.333 2-2 2c-1.666 0-2-.333-2-2s.334-2 2-2M12.512 10c1.667 0 2 .333 2 2s-.333 2-2 2-2-.333-2-2 .333-2 2-2M21.512 10c1.667 0 2 .333 2 2s-.333 2-2 2c-1.666 0-2-.333-2-2s.334-2 2-2\"/>",
  light: "",
} as const;

export default function ElipseDotsStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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