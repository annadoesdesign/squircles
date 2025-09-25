import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m5.464 5.5c-1.054 0-2.104.13-3.127.385l-.579.145a1 1 0 1 0 .484 1.94l.58-.145q.503-.125 1.013-.201a11.5 11.5 0 0 1-8.487 8.267l-.577.135a1 1 0 0 0 .459 1.948l.576-.136a13.5 13.5 0 0 0 9.88-9.415q.183.346.307.718l.059.175a1 1 0 1 0 1.896-.632l-.057-.175a6.9 6.9 0 0 0-1.671-2.703 1.04 1.04 0 0 0-.737-.306z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function StocksFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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