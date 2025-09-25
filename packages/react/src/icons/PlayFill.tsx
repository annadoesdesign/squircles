import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M5.315 2.929c.198-.62.855-.975 1.482-.803l.134.045.714.285a66.5 66.5 0 0 1 15.193 8.539c.67.503.67 1.507 0 2.01a66.5 66.5 0 0 1-15.193 8.539l-.714.285a1.222 1.222 0 0 1-1.652-.895 45.6 45.6 0 0 1 0-17.869z\"/>",
  regular: "",
  light: "",
} as const;

export default function PlayFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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