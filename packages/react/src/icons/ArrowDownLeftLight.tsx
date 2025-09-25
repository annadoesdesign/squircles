import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.66 19.735a.75.75 0 0 0-.294-1.47 17.1 17.1 0 0 1-5.276.218L20.042 5.53a.75.75 0 1 0-1.06-1.06L6.019 17.432a16.8 16.8 0 0 1 .23-5.285.75.75 0 0 0-1.472-.294 18.2 18.2 0 0 0 0 7.298.75.75 0 0 0 .592.585c2.41.469 4.875.482 7.29 0\"/>",
} as const;

export default function ArrowDownLeftLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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