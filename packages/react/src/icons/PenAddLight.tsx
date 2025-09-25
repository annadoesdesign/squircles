import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M19.237 6.513c.895.08 2.07.373 2.98 1.283.909.91 1.203 2.084 1.283 2.98.116 1.306-.574 2.418-1.355 3.2l-7.642 7.64a6.8 6.8 0 0 1-3.694 1.902l-2.748.458a1.76 1.76 0 0 1-2.024-2.025l.458-2.748a6.8 6.8 0 0 1 1.901-3.694l7.64-7.642c.782-.781 1.895-1.47 3.2-1.354m-9.78 10.056a5.3 5.3 0 0 0-1.483 2.88l-.458 2.748a.26.26 0 0 0 .299.3l2.748-.459a5.3 5.3 0 0 0 2.88-1.482l6.282-6.283-3.986-3.986zm9.647-8.562c-.678-.06-1.378.293-2.006.92l-.299.3 3.987 3.986.298-.299c.628-.628.982-1.327.921-2.006-.064-.718-.288-1.49-.85-2.052-.56-.56-1.333-.785-2.051-.85\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.262 2.5a.75.75 0 0 1 .75.75V5.5h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0V7h-2.25a.75.75 0 1 1 0-1.5h2.25V3.25a.75.75 0 0 1 .75-.75\"/>",
} as const;

export default function PenAddLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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