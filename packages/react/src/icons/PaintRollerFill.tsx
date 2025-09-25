import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M11.512-.004c6.68 0 8.599.53 8.939 3h2.061a1 1 0 0 1 1 1v6a1 1 0 0 1-.821.983L12.512 12.83v1.232c1.64.261 2 1.396 2 4.934 0 4.167-.5 5-3 5s-3-.833-3-5c0-3.538.36-4.673 2-4.934v-2.066a1 1 0 0 1 .822-.983L21.512 9.16V4.996h-1.061c-.34 2.471-2.259 3-8.939 3-7.5 0-9-.667-9-4s1.5-4 9-4\"/>",
  regular: "",
  light: "",
} as const;

export default function PaintRollerFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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