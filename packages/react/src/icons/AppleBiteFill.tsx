import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M16.27.03a1 1 0 1 1 .484 1.94l-.119.03a4.12 4.12 0 0 0-3.007 3.035c1.585-.964 3.368-1.302 5.09-.811 2.147.612 3.927 2.447 4.925 4.838a2.57 2.57 0 0 0-1.704.21l-.227.113a1.93 1.93 0 0 0-.966 2.334l.075.225c.084.251.065.526-.054.763l-.052.103a1.93 1.93 0 0 0 0 1.723l.052.102c.119.237.138.512.054.764l-.075.225a1.93 1.93 0 0 0 .966 2.334l.227.114a2.57 2.57 0 0 0 1.502.245c-1.936 4.15-6.124 6.452-9.642 5.449a6 6 0 0 1-1.287-.541 6 6 0 0 1-1.287.54C7.17 24.923 2.222 21.688.864 16.292S2.25 5.381 6.306 4.224c1.787-.51 3.638-.125 5.267.924A6.12 6.12 0 0 1 16.15.06z\"/>",
  regular: "",
  light: "",
} as const;

export default function AppleBiteFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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