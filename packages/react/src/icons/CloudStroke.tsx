import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M22.512 14a5 5 0 0 0-5-5h-.06a1 1 0 0 1-1-.858A6.002 6.002 0 0 0 4.528 9.439a1 1 0 0 1-.333.82A4.99 4.99 0 0 0 2.512 14c0 2.24 1.449 4.39 3.333 5.057a19.98 19.98 0 0 0 13.334 0c1.884-.666 3.333-2.817 3.333-5.057m2 0c0 2.985-1.89 5.961-4.667 6.942a21.98 21.98 0 0 1-14.666 0C2.403 19.962.512 16.985.512 14a6.98 6.98 0 0 1 2.001-4.898V9a8 8 0 0 1 15.755-1.959A7 7 0 0 1 24.512 14\"/>",
  light: "",
} as const;

export default function CloudStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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