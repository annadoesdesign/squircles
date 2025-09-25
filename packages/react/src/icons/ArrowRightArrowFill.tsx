import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M15.68 6.445a1 1 0 0 1 1.387-.277l.088.059a18.5 18.5 0 0 1 5.13 5.13l.06.088a1 1 0 0 1 0 1.11l-.06.088a18.5 18.5 0 0 1-5.13 5.13l-.088.06a1 1 0 1 1-1.11-1.665l.088-.058A16.5 16.5 0 0 0 19.52 13H3.512a1 1 0 1 1 0-2H19.52a16.5 16.5 0 0 0-3.475-3.11l-.088-.058a1 1 0 0 1-.277-1.387\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowRightArrowFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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