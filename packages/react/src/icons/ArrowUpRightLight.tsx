import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.365 4.29a.75.75 0 0 0 .294 1.471 17.1 17.1 0 0 1 5.274-.219L4.983 18.47a.75.75 0 0 0 1.059 1.062L19.004 6.592a16.7 16.7 0 0 1-.227 5.261.75.75 0 0 0 1.471.294c.485-2.427.499-4.84-.001-7.272a.75.75 0 0 0-.591-.586 18.8 18.8 0 0 0-7.291.002\"/>",
} as const;

export default function ArrowUpRightLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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