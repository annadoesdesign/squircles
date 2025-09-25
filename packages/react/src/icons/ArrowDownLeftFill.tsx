import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.709 19.98a1 1 0 0 0-.393-1.96 16.8 16.8 0 0 1-4.675.264L20.22 5.707a1 1 0 0 0-1.414-1.414L6.215 16.882a16.7 16.7 0 0 1 .278-4.686 1 1 0 0 0-1.961-.392c-.492 2.459-.507 4.93 0 7.397a1 1 0 0 0 .79.78c2.44.475 4.938.489 7.387 0\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowDownLeftFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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