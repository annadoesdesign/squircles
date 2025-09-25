import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M17.066 15.01c5.601.191 7.26 3.315 7.43 7.267a.9.9 0 0 1-.589.892l-.338.112c-1.728.535-4.025.719-7.057.719l-1.31-.013a39 39 0 0 1-2.19-.102q.165-.014.325-.03c-1.122.1-2.391.145-3.824.145l-1.174-.01c-2.46-.045-4.386-.245-5.884-.709l-.338-.112a.9.9 0 0 1-.59-.892C1.703 18.197 3.466 15 9.513 15l.554.01c1.16.04 2.15.207 2.995.48l-.051-.017c.965-.306 2.122-.473 3.5-.473zM9.513 16.5c-2.766 0-4.255.726-5.097 1.63-.799.86-1.234 2.111-1.362 3.763 1.48.428 3.54.607 6.459.607 2.917 0 4.977-.18 6.458-.607-.129-1.652-.564-2.903-1.363-3.762-.841-.905-2.33-1.63-5.095-1.631m6.999 0q-.755 0-1.388.07c1.65 1.322 2.272 3.37 2.373 5.707a1 1 0 0 1-.02.213c2.415-.037 4.181-.218 5.493-.597-.129-1.652-.563-2.903-1.363-3.762-.841-.905-2.33-1.631-5.095-1.631M17.513 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M8.513 1a5 5 0 1 1-.001 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7\" clip-rule=\"evenodd\"/>",
} as const;

export default function UsersNewLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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