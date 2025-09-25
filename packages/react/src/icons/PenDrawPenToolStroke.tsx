import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M3.314 1.106C7.415.834 18.406.662 21.752 6.238c1.478 2.463 1.207 5.819.548 8.6 2.345 2.762 2.093 4.151-.353 6.597s-3.836 2.698-6.598.353c-2.78.657-6.135.927-8.597-.55C1.177 17.892 1.346 6.903 1.618 2.802a1.807 1.807 0 0 1 1.696-1.696m9.17 2.345c-2.703-.456-5.49-.49-7.528-.422l5.989 5.99q.128-.011.27-.015L11.512 9c1.667 0 2 .333 2 2 0 1.666-.333 2-2 2l-.297-.004c-1.41-.043-1.703-.434-1.703-1.996l.004-.297q.004-.143.014-.272L3.54 4.442c-.068 2.038-.032 4.826.424 7.528.605 3.585 1.837 6.364 3.818 7.553 1.744 1.047 4.41.956 7.107.319l.233-.041a2 2 0 0 1 1.522.462c1.322 1.123 1.82 1.162 1.972 1.15.203-.015.702-.178 1.917-1.392 1.214-1.214 1.377-1.713 1.392-1.917.012-.151-.027-.65-1.15-1.971a2 2 0 0 1-.421-1.755c.639-2.699.73-5.366-.316-7.11-1.19-1.982-3.97-3.213-7.554-3.817\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function PenDrawPenToolStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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