import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.512 16.5a.75.75 0 0 1 0 1.5h-14a.75.75 0 0 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M22.982 3.47a.751.751 0 0 1 1.062 1.06l-5.714 5.712c5.014.57 6.182 2.3 6.182 6.758l-.006.533C24.38 22.905 22.2 24 12.512 24l-.914-.004C2.686 23.924.641 22.732.518 17.533L.512 17c0-4.457 1.168-6.188 6.18-6.758L.982 4.53a.75.75 0 0 1 1.06-1.06l6.5 6.5a1 1 0 0 1 .096.116A74 74 0 0 1 12.512 10c1.454 0 2.74.026 3.873.086a1 1 0 0 1 .097-.116zm-10.47 8.03c-2.483 0-4.408.073-5.906.262-1.51.19-2.467.484-3.088.846-.564.33-.902.742-1.13 1.358-.25.678-.376 1.632-.376 3.034s.125 2.356.376 3.034c.228.616.566 1.029 1.13 1.358.621.362 1.577.656 3.088.846 1.498.189 3.423.262 5.906.262s4.408-.073 5.907-.262c1.51-.19 2.466-.484 3.087-.846.564-.33.903-.742 1.13-1.358.251-.678.376-1.632.376-3.034s-.125-2.356-.376-3.034c-.227-.616-.566-1.029-1.13-1.358-.62-.362-1.577-.656-3.087-.846-1.499-.189-3.424-.262-5.907-.262\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 4.5a4.5 4.5 0 0 1 3.182 1.318.75.75 0 1 1-1.06 1.06 3 3 0 0 0-4.243 0 .75.75 0 0 1-1.06-1.06A4.5 4.5 0 0 1 12.512 4.5M12.512.5a8.5 8.5 0 0 1 6.01 2.49.75.75 0 0 1-1.06 1.06 7 7 0 0 0-7.628-1.517A7 7 0 0 0 7.562 4.05a.75.75 0 1 1-1.06-1.06A8.5 8.5 0 0 1 12.511.5\"/>",
} as const;

export default function RouterStraightLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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