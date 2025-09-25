import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M11.512 0c6.075 0 11 4.925 11 11 0 2.679-.959 5.133-2.55 7.041l4.257 4.257a1 1 0 0 1-1.414 1.414l-4.258-4.257A10.95 10.95 0 0 1 11.512 22c-6.075 0-11-4.925-11-11s4.925-11 11-11m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function MagnifyingGlassSearchFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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