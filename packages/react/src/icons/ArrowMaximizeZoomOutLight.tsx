import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.732 13.22a.75.75 0 0 1 1.061 0l6.134 6.134a4.65 4.65 0 0 0-.335-3.269.75.75 0 0 1 1.342-.67 6.15 6.15 0 0 1 .334 4.694l-.293.879a.75.75 0 0 1-.475.474l-.879.293a6.15 6.15 0 0 1-4.693-.334.75.75 0 0 1 .67-1.342 4.65 4.65 0 0 0 3.268.335l-6.134-6.133a.75.75 0 0 1 0-1.061M9.732 13.22a.75.75 0 0 1 1.061 1.06l-6.134 6.134a4.65 4.65 0 0 0 3.269-.335.75.75 0 0 1 .67 1.342 6.15 6.15 0 0 1-4.694.333l-.879-.292a.75.75 0 0 1-.474-.474l-.293-.88a6.15 6.15 0 0 1 .334-4.693.75.75 0 0 1 1.342.67 4.65 4.65 0 0 0-.335 3.269zM3.904 1.745a6.15 6.15 0 0 1 4.694.334.75.75 0 0 1-.67 1.342 4.65 4.65 0 0 0-3.269-.335l6.134 6.134a.75.75 0 0 1-1.06 1.06L3.598 4.148a4.65 4.65 0 0 0 .335 3.268.75.75 0 0 1-1.342.67 6.15 6.15 0 0 1-.334-4.693l.293-.879a.75.75 0 0 1 .474-.475zM15.928 2.08a6.15 6.15 0 0 1 4.693-.335l.879.293a.75.75 0 0 1 .355.252l.079.125a6.15 6.15 0 0 1 .334 4.694l-.293.879a.751.751 0 0 1-1.424-.475l.293-.879a4.65 4.65 0 0 0 .118-2.522l-6.169 6.169a.75.75 0 0 1-1.06-1.061l6.133-6.134a4.65 4.65 0 0 0-3.268.335.75.75 0 0 1-.67-1.342\"/>",
} as const;

export default function ArrowMaximizeZoomOutLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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