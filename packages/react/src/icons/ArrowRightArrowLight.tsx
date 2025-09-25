import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.888 6.584a.75.75 0 0 1 1.04-.208l.088.059a18.25 18.25 0 0 1 5.062 5.061l.058.088a.75.75 0 0 1 0 .832l-.058.088a18.3 18.3 0 0 1-5.062 5.062l-.088.058a.75.75 0 1 1-.832-1.248l.088-.059a16.8 16.8 0 0 0 3.862-3.567H3.512a.75.75 0 0 1 0-1.5h16.534a16.8 16.8 0 0 0-3.862-3.567l-.088-.059a.75.75 0 0 1-.208-1.04\"/>",
} as const;

export default function ArrowRightArrowLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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