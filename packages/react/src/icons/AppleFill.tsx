import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M16.27.03a1 1 0 1 1 .484 1.94l-.119.03a4.12 4.12 0 0 0-3.007 3.035c1.585-.964 3.368-1.302 5.09-.811 4.056 1.157 6.802 6.671 5.444 12.067-1.359 5.397-6.307 8.631-10.363 7.475a6 6 0 0 1-1.287-.541 6 6 0 0 1-1.287.54C7.17 24.923 2.222 21.688.864 16.292S2.25 5.381 6.306 4.224c1.787-.51 3.637-.125 5.266.924A6.12 6.12 0 0 1 16.15.06z\"/>",
  regular: "",
  light: "",
} as const;

export default function AppleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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