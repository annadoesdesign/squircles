import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.512 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2M19.512 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2M19.512 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M14.805.293a1 1 0 1 1 1.414 1.414l-2.306 2.306c8.789.165 10.6 2.058 10.6 9.987 0 8.333-2 10-12 10s-12-1.667-12-10c0-7.929 1.81-9.822 10.598-9.987L8.805 1.707A1 1 0 1 1 10.22.293l2.293 2.293zM12.512 6c-2.467 0-4.325.105-5.74.36-1.41.253-2.222.628-2.73 1.051-.96.8-1.53 2.368-1.53 6.589s.57 5.788 1.53 6.589c.508.423 1.32.798 2.73 1.052 1.415.254 3.273.359 5.74.359q1.133 0 2.102-.033a80.5 80.5 0 0 0 0-15.935A65 65 0 0 0 12.512 6m4.123.15a82.5 82.5 0 0 1 0 15.699 19 19 0 0 0 1.617-.209c1.411-.253 2.222-.628 2.73-1.051.96-.8 1.53-2.368 1.53-6.59 0-4.22-.57-5.787-1.53-6.588-.508-.423-1.319-.798-2.73-1.052a19 19 0 0 0-1.617-.209\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function RetroTvStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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