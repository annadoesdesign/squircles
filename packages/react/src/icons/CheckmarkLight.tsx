import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18.127 7.357a.75.75 0 0 1 .771 1.287 25.2 25.2 0 0 0-7.996 7.624l-.766 1.148a.75.75 0 0 1-1.267-.03l-.573-.954a7.3 7.3 0 0 0-2.2-2.308.75.75 0 1 1 .832-1.248A8.8 8.8 0 0 1 9.543 15.6l.11-.164a26.7 26.7 0 0 1 8.474-8.08\"/>",
} as const;

export default function CheckmarkLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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