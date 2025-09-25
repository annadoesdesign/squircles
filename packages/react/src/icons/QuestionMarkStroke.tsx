import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 18.001a1 1 0 1 1 0 2 1 1 0 0 1 0-2M11.537 4.097a5 5 0 0 1 4.942 1.86 5 5 0 0 1-1.326 7.29 5 5 0 0 1-1.64.65v1.104a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1l.208-.008a3 3 0 1 0-3.106-3.768 1 1 0 0 1-1.933-.518 5 5 0 0 1 3.855-3.61\"/>",
  light: "",
} as const;

export default function QuestionMarkStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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