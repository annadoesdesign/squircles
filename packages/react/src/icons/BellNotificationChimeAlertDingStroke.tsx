import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 3c6.667 0 8 1.5 8 9q0 .388-.006.755A4.5 4.5 0 0 1 18.013 21h-1.8c-.337 2.43-1.333 3-3.85 3l-.593-.013C9.686 23.893 8.825 23.23 8.515 21H7.012a4.5 4.5 0 0 1-2.495-8.245A55 55 0 0 1 4.512 12c0-7.5 1.334-9 8-9m-1.975 18c.089.49.192.694.24.766.011.016.013.046.17.096.23.075.647.138 1.416.138.77 0 1.186-.063 1.416-.138.157-.05.159-.08.17-.096.048-.072.151-.277.24-.766zm1.975-16c-3.407 0-4.5.449-5.005 1.017-.257.29-.527.794-.718 1.79-.193 1.005-.277 2.353-.277 4.193q0 .375.005.728a2 2 0 0 1-.89 1.69A2.5 2.5 0 0 0 7.013 19h11a2.5 2.5 0 0 0 1.384-4.581 2 2 0 0 1-.89-1.691q.006-.36.006-.728c0-1.84-.083-3.188-.276-4.193-.19-.996-.461-1.5-.719-1.79C17.012 5.449 15.92 5 12.512 5\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.7.238a1 1 0 0 1 .518 1.932 5 5 0 0 0-3.536 3.536A1 1 0 0 1 .751 5.19 7 7 0 0 1 5.7.239M18.1.945a1 1 0 0 1 1.224-.707 7 7 0 0 1 4.95 4.95 1 1 0 0 1-1.932.518 5 5 0 0 0-3.536-3.536A1 1 0 0 1 18.1.945\"/>",
  light: "",
} as const;

export default function BellNotificationChimeAlertDingStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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