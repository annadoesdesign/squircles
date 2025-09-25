import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.66 4.265a.75.75 0 0 1-.294 1.471 17.1 17.1 0 0 0-5.276-.218L20.042 18.47a.75.75 0 0 1-1.06 1.06L6.019 6.57a16.8 16.8 0 0 0 .23 5.284.75.75 0 0 1-1.472.295 18.2 18.2 0 0 1 0-7.299.75.75 0 0 1 .592-.585 18.8 18.8 0 0 1 7.29.001\"/>",
} as const;

export default function ArrowUpLeftLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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