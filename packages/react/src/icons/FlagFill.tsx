import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M10.794.9a15.8 15.8 0 0 1 8.455-.515l2.943.63c.332.072.606.298.741.604l.049.136.123.444a28.1 28.1 0 0 1 .12 14.076l-.243.967a1 1 0 0 1-1.363.677l-2.824-1.21a9.97 9.97 0 0 0-7.63-.093 13.63 13.63 0 0 1-7.303.79l-1.35-.226V23a1 1 0 1 1-2 0V2.042a1 1 0 0 1 1.172-.985l2.24.391c2.3.402 4.663.213 6.87-.549\"/>",
  regular: "",
  light: "",
} as const;

export default function FlagFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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