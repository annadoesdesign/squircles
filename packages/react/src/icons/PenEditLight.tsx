import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M22.512 22.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M18.987 1.263c.895.08 2.07.374 2.98 1.283.909.91 1.202 2.084 1.283 2.98.116 1.306-.574 2.418-1.355 3.2l-7.642 7.64a6.8 6.8 0 0 1-3.694 1.902l-2.748.458A1.76 1.76 0 0 1 5.787 16.7l.458-2.748a6.8 6.8 0 0 1 1.901-3.694l7.64-7.642c.782-.78 1.895-1.47 3.2-1.354M9.207 11.32a5.3 5.3 0 0 0-1.483 2.88l-.458 2.748a.26.26 0 0 0 .299.298l2.748-.458a5.3 5.3 0 0 0 2.88-1.482l5.782-5.782-3.986-3.987zm9.647-8.563c-.678-.06-1.378.293-2.006.92l-.799.8 3.987 3.986.798-.799c.628-.627.982-1.327.921-2.006-.064-.717-.288-1.49-.85-2.051-.56-.561-1.333-.786-2.051-.85\" clip-rule=\"evenodd\"/>",
} as const;

export default function PenEditLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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