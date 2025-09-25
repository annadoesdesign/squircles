import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.512 10.5c1.25 0 1.5.25 1.5 1.5s-.25 1.5-1.5 1.5-1.5-.25-1.5-1.5.25-1.5 1.5-1.5M12.512 10.5c1.25 0 1.5.25 1.5 1.5s-.25 1.5-1.5 1.5-1.5-.25-1.5-1.5.25-1.5 1.5-1.5M21.512 10.5c1.25 0 1.5.25 1.5 1.5s-.25 1.5-1.5 1.5-1.5-.25-1.5-1.5.25-1.5 1.5-1.5\"/>",
} as const;

export default function ElipseDotsLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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