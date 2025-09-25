import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.552 3.006a.97.97 0 0 1 1.18-.639l.106.035.714.286a66.2 66.2 0 0 1 15.136 8.506 1.007 1.007 0 0 1 0 1.612 66.2 66.2 0 0 1-15.136 8.506l-.714.286a.972.972 0 0 1-1.313-.712 45.3 45.3 0 0 1 0-17.772zm1.326 1.028a43.8 43.8 0 0 0 0 15.93l.118-.045a64.7 64.7 0 0 0 14.256-7.92A64.7 64.7 0 0 0 6.996 4.082z\"/>",
} as const;

export default function PlayLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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