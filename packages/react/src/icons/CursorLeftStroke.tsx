import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M1.935 4.351a2.557 2.557 0 0 1 2.929-2.928l.619.1a50.7 50.7 0 0 1 18.107 6.61c1.293.777 1.04 2.72-.407 3.143l-7.24 2.116a3 3 0 0 0-2.038 2.038l-2.116 7.24c-.423 1.448-2.367 1.7-3.144.408A50.7 50.7 0 0 1 2.035 4.97zm2.612-.953a.556.556 0 0 0-.636.637l.098.62c.951 5.945 3 11.659 6.035 16.854l1.94-6.64a5 5 0 0 1 3.398-3.397l6.64-1.94A48.7 48.7 0 0 0 5.167 3.497z\"/>",
  light: "",
} as const;

export default function CursorLeftStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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