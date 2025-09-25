import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 17.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M11.536 4.096a5.003 5.003 0 0 1 5.952 4.415 5 5 0 0 1-2.335 4.736 5 5 0 0 1-1.891.695v1.059a.75.75 0 0 1-1.5 0v-1.75a.75.75 0 0 1 .75-.75l.244-.009a3.5 3.5 0 1 0-3.625-4.397.75.75 0 0 1-1.45-.388 5 5 0 0 1 3.855-3.61\"/>",
} as const;

export default function QuestionMarkLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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