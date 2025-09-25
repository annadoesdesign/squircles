import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.865 4.114a.75.75 0 0 1 .795 1.272A8.9 8.9 0 0 0 6.398 9h8.366a5.25 5.25 0 0 1-.002 10.5h-1.5a.75.75 0 0 1 0-1.5h1.5a3.75 3.75 0 0 0 .002-7.5H6.397a8.9 8.9 0 0 0 3.263 3.614.75.75 0 1 1-.795 1.272 10.37 10.37 0 0 1-4.134-4.944l-.165-.414a.75.75 0 0 1 0-.556l.165-.415a10.37 10.37 0 0 1 4.134-4.943\"/>",
} as const;

export default function ArrowUndoLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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