import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.794.9a15.8 15.8 0 0 1 8.455-.515l2.943.631c.332.071.606.298.741.604l.049.135.123.445a28.1 28.1 0 0 1 .12 14.076l-.243.967a1 1 0 0 1-1.363.676l-2.824-1.21a9.97 9.97 0 0 0-7.63-.092 13.63 13.63 0 0 1-7.303.789l-1.35-.226V23a1 1 0 1 1-2 0V2.042a1 1 0 0 1 1.172-.985l2.24.392c2.3.402 4.663.213 6.87-.55M18.83 2.34a13.77 13.77 0 0 0-7.383.45 15.8 15.8 0 0 1-7.867.628l-1.068-.187v11.92l1.679.281c2.1.35 4.254.117 6.23-.674a11.97 11.97 0 0 1 9.162.112l1.74.747a26.07 26.07 0 0 0-.118-12.768z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function FlagStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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