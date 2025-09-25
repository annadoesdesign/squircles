import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M21.512 13.5c0 8.75-1.5 10.5-9 10.5s-9-1.75-9-10.5q0-.402.004-.785.62.415 1.252.81a45 45 0 0 0 4.234 2.34c.642.306 1.255.57 1.792.764.463.166 1.11.371 1.718.371s1.256-.205 1.718-.371c.538-.193 1.15-.458 1.792-.764a45 45 0 0 0 5.484-3.15q.005.383.006.785\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M12.348 14.984c-1.38-.184-5.667-2.423-8.682-4.6q-.621-.449-1.154-.885V18a1 1 0 1 1-2 0V7c0-3.63 10.167-7 12-7s12 3.37 12 7c0 .798-1.332 2.065-3.119 3.358l-.596.421C17.696 12.92 13.61 15 12.512 15q-.073-.001-.164-.016\"/>",
  regular: "",
  light: "",
} as const;

export default function GraduationCapGraduateStudentCollegeFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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