import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M9.512 20a2 2 0 1 1 0 4 2 2 0 0 1 0-4M17.512 20a2 2 0 1 1 0 4 2 2 0 0 1 0-4\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M1.512 0a5 5 0 0 1 4.656 3.179C7.528 2.314 10.004 2 14.512 2c10 0 10 1.545 10 7.212S22.29 19 14.512 19s-10-4.121-10-9.788V5a3 3 0 0 0-3-3 1 1 0 0 1 0-2m9 8a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ShoppingCartFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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