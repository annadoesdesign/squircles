import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.512 6.25a.75.75 0 0 1 .75.75v3.25h3.25a.75.75 0 0 1 0 1.5h-3.25V15a.75.75 0 0 1-1.5 0v-3.25h-3.25a.75.75 0 0 1 0-1.5h3.25V7a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M11.512 0c6.075 0 11 4.925 11 11 0 2.77-1.026 5.297-2.715 7.23l4.246 4.245a.75.75 0 0 1-1.061 1.06l-4.245-4.244A10.95 10.95 0 0 1 11.512 22c-6.075 0-11-4.925-11-11s4.925-11 11-11m0 1.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19\" clip-rule=\"evenodd\"/>",
} as const;

export default function MagnifyingGlassSearchAddPlusZoomLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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