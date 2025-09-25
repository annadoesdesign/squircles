import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M22.38 12c-.377 3.525-1.65 5.076-4.953 5.672-.293 5.173-1.452 6.324-4.915 6.324s-4.623-1.151-4.916-6.324C4.295 17.076 3.021 15.524 2.645 12zM15.512.725c7-3 7 3.933 7 8.5q0 .399-.008.775H2.52a42 42 0 0 1-.008-.775c0-2.102.26-3.73.776-4.986C4.635.96 8.512 3.725 15.512.725\"/>",
  regular: "",
  light: "",
} as const;

export default function PaintBrushFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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