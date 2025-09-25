import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.326 1.307a2.704 2.704 0 0 1 4.373 0l.418.574a55.3 55.3 0 0 1 8.924 19.11c.38 1.52-1.23 2.765-2.606 2.015l-7.486-4.083a3 3 0 0 0-2.873 0l-7.487 4.083c-1.375.75-2.985-.495-2.605-2.015l.165-.644A55.3 55.3 0 0 1 9.908 1.88zm2.755 1.176a.704.704 0 0 0-1.138 0l-.418.575a53.3 53.3 0 0 0-8.486 17.97l7.079-3.861a5 5 0 0 1 4.789 0l7.078 3.86A53.3 53.3 0 0 0 13.5 3.057z\"/>",
  light: "",
} as const;

export default function CursorUpStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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