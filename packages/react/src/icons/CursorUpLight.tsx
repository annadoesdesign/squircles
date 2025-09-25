import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.528 1.454a2.454 2.454 0 0 1 3.969 0l.418.574a55 55 0 0 1 8.883 19.024c.327 1.308-1.06 2.38-2.244 1.734l-7.485-4.083a3.25 3.25 0 0 0-3.113 0L3.47 22.786c-1.184.646-2.571-.426-2.244-1.734A55 55 0 0 1 10.11 2.028zm2.756.882a.954.954 0 0 0-1.543 0l-.418.574A53.5 53.5 0 0 0 2.68 21.415q-.003.017-.002.02l.001.007a.1.1 0 0 0 .019.024.1.1 0 0 0 .027.011h.007l.018-.007 7.487-4.083a4.75 4.75 0 0 1 4.549 0l7.486 4.083q.015.007.018.007h.007a.1.1 0 0 0 .028-.011.1.1 0 0 0 .018-.024l.001-.007q.001-.003-.002-.02A53.5 53.5 0 0 0 13.702 2.91z\"/>",
} as const;

export default function CursorUpLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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