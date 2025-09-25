import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.315 2.929c.199-.62.855-.975 1.482-.803l.134.045.714.285a66.5 66.5 0 0 1 15.193 8.54c.67.502.67 1.506 0 2.009a66.5 66.5 0 0 1-15.193 8.539l-.714.285a1.22 1.22 0 0 1-1.651-.895 45.6 45.6 0 0 1 0-17.869zM7.067 4.38a43.6 43.6 0 0 0 0 15.237A64.5 64.5 0 0 0 20.83 12 64.5 64.5 0 0 0 7.067 4.38\"/>",
  light: "",
} as const;

export default function PlayStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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