import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.316 19.98a1 1 0 1 1 .393-1.96c1.542.308 3.11.392 4.673.265L4.806 5.707A1 1 0 0 1 6.22 4.293l12.589 12.59a16.7 16.7 0 0 0-.277-4.686 1 1 0 1 1 1.961-.393c.492 2.46.506 4.93-.001 7.397a1 1 0 0 1-.789.78c-2.44.475-4.939.49-7.387 0\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowDownRightFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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