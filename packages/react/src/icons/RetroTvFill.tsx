import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M14.805.293a1 1 0 1 1 1.414 1.414l-2.308 2.308q.35.005.685.015a120.5 120.5 0 0 1 0 19.939 68 68 0 0 1-2.084.03c-10 0-12-1.666-12-10 0-7.928 1.81-9.821 10.599-9.986L8.805 1.707A1 1 0 1 1 10.22.293l2.293 2.293z\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M16.613 4.14c6.472.538 7.9 2.82 7.9 9.86s-1.428 9.32-7.9 9.86c.53-6.563.53-13.158 0-19.72m3.9 12.86a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function RetroTvFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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