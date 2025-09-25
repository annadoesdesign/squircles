import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.051 3.408a.75.75 0 0 1 .922 1.184l-.266.207a42.2 42.2 0 0 0-7.243 7.2 42.2 42.2 0 0 0 7.243 7.202l.266.207a.75.75 0 0 1-.922 1.184l-.265-.207a43.7 43.7 0 0 1-7.659-7.659 1.184 1.184 0 0 1 0-1.453 43.7 43.7 0 0 1 7.659-7.658z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.051 3.408a.75.75 0 0 1 .922 1.184l-.266.207a42.2 42.2 0 0 0-7.243 7.2 42.2 42.2 0 0 0 7.243 7.202l.266.207a.751.751 0 0 1-.922 1.184l-.265-.207a43.7 43.7 0 0 1-7.659-7.659 1.18 1.18 0 0 1 0-1.453 43.7 43.7 0 0 1 7.659-7.658z\"/>",
} as const;

export default function ArrowRewindLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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