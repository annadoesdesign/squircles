import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.27.03a1 1 0 1 1 .485 1.94l-.12.03a4.12 4.12 0 0 0-3.007 3.035c1.586-.964 3.368-1.302 5.09-.811 4.056 1.157 6.802 6.671 5.444 12.067-1.359 5.397-6.307 8.631-10.363 7.475a6 6 0 0 1-1.287-.541 6 6 0 0 1-1.287.54C7.17 24.923 2.222 21.688.864 16.292S2.25 5.381 6.306 4.224c1.787-.51 3.637-.125 5.266.924A6.12 6.12 0 0 1 16.15.06zm1.9 6.117c-1.356-.387-2.915-.013-4.36 1.22a2 2 0 0 1-2.596 0C9.77 6.134 8.212 5.76 6.855 6.146c-1.332.38-2.64 1.548-3.487 3.365-.836 1.795-1.128 4.053-.565 6.291 1.168 4.639 5.211 6.799 7.873 6.04q.438-.125.856-.361l.115-.06a2 2 0 0 1 1.846.06q.418.236.855.361c2.663.759 6.707-1.402 7.874-6.04.563-2.238.27-4.496-.565-6.291-.847-1.817-2.156-2.985-3.488-3.365\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function AppleStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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