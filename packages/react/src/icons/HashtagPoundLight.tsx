import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.42 3.256a.75.75 0 0 1 .836.651q.19 1.518.307 3.041 1.524.119 3.042.308a.75.75 0 0 1-.186 1.488 64 64 0 0 0-2.757-.283 65 65 0 0 1 0 7.077q1.38-.112 2.757-.282a.75.75 0 0 1 .186 1.488 65 65 0 0 1-3.042.307 65 65 0 0 1-.307 3.042.75.75 0 0 1-1.488-.186 64 64 0 0 0 .282-2.758 65 65 0 0 1-7.077 0q.112 1.381.283 2.758a.75.75 0 0 1-1.488.186 65 65 0 0 1-.308-3.042 65 65 0 0 1-3.04-.307.75.75 0 0 1 .185-1.488q1.376.17 2.757.282a65 65 0 0 1 0-7.077q-1.38.111-2.757.283a.75.75 0 0 1-.186-1.488 65 65 0 0 1 3.041-.308q.12-1.524.308-3.04a.75.75 0 0 1 1.488.185 64 64 0 0 0-.283 2.757 65 65 0 0 1 7.077 0q-.11-1.38-.282-2.757a.75.75 0 0 1 .651-.837m-.266 5.101a64 64 0 0 0-7.284 0 64 64 0 0 0 0 7.285c2.426.138 4.858.138 7.284 0a64 64 0 0 0 0-7.285\" clip-rule=\"evenodd\"/>",
} as const;

export default function HashtagPoundLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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