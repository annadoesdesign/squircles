import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M8.982 4.152a1 1 0 0 1 1.06 1.695A8.6 8.6 0 0 0 7.06 9h7.954a5.5 5.5 0 0 1-.002 11h-1.5a1 1 0 0 1 0-2h1.5a3.5 3.5 0 0 0 .002-7H7.06a8.6 8.6 0 0 0 2.983 3.152 1 1 0 0 1-1.061 1.696 10.62 10.62 0 0 1-4.232-5.063l-.167-.414a1 1 0 0 1 0-.742l.167-.414a10.62 10.62 0 0 1 4.232-5.063\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowUndoFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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