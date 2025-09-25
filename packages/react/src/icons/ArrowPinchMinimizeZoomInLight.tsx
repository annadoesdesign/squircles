import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.177 14.329a6.15 6.15 0 0 1 4.694-.334l.879.293c.223.075.4.25.474.475l.293.879a6.15 6.15 0 0 1-.334 4.693.75.75 0 0 1-1.342-.67 4.65 4.65 0 0 0 .335-3.269L3.042 22.53a.75.75 0 1 1-1.06-1.06l6.134-6.134a4.65 4.65 0 0 0-3.269.335.75.75 0 0 1-.67-1.342M16.154 13.995a6.15 6.15 0 0 1 4.693.334.75.75 0 0 1-.67 1.342 4.65 4.65 0 0 0-3.268-.335l6.134 6.134a.75.75 0 1 1-1.061 1.06l-6.134-6.134a4.65 4.65 0 0 0 .335 3.269.75.75 0 0 1-1.342.67 6.15 6.15 0 0 1-.334-4.693l.293-.88c.075-.223.251-.4.475-.474zM1.982 1.47a.75.75 0 0 1 1.06 0l6.134 6.133a4.65 4.65 0 0 0-.335-3.268.75.75 0 0 1 1.342-.67 6.15 6.15 0 0 1 .334 4.693l-.293.88a.75.75 0 0 1-.474.474l-.88.293a6.15 6.15 0 0 1-4.693-.334.75.75 0 0 1 .67-1.342 4.65 4.65 0 0 0 3.269.335L1.982 2.53a.75.75 0 0 1 0-1.06M21.982 1.47a.75.75 0 1 1 1.06 1.06L16.91 8.664a4.65 4.65 0 0 0 3.268-.335.75.75 0 0 1 .67 1.342 6.15 6.15 0 0 1-4.693.334l-.88-.293a.75.75 0 0 1-.474-.475l-.293-.879a6.15 6.15 0 0 1 .334-4.693.75.75 0 0 1 1.342.67 4.65 4.65 0 0 0-.335 3.268z\"/>",
} as const;

export default function ArrowPinchMinimizeZoomInLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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