import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M1.936 4.351a2.556 2.556 0 0 1 2.928-2.927l.62.1a50.7 50.7 0 0 1 18.106 6.61c1.293.777 1.041 2.72-.406 3.143l-7.241 2.114a3 3 0 0 0-2.038 2.04l-2.115 7.24c-.424 1.448-2.367 1.699-3.144.407l-.614-1.049A50.7 50.7 0 0 1 2.036 4.971z\"/>",
  regular: "",
  light: "",
} as const;

export default function CursorLeftFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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