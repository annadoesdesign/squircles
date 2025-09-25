import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 14c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4M6.512 8c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4M18.512 8c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4M12.512 2c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4\"/>",
  regular: "",
  light: "",
} as const;

export default function ComponentFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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