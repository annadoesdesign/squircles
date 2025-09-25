import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M4.512 17c1.667 0 2 .333 2 2s-.333 2-2 2c-1.378 0-1.844-.228-1.964-1.25H1.512a.75.75 0 0 1 0-1.5h1.036c.12-1.022.586-1.25 1.964-1.25m0 1.5c-.21 0-.368.007-.484.017-.01.116-.016.273-.016.483s.006.368.016.484c.116.01.273.016.484.016s.367-.006.484-.016c.01-.116.016-.273.016-.484s-.007-.367-.016-.483a6 6 0 0 0-.484-.017\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.512 18.25a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M20.512 10c1.379 0 1.844.228 1.964 1.25h1.036a.75.75 0 0 1 0 1.5h-1.036c-.12 1.022-.585 1.25-1.964 1.25-1.666 0-2-.333-2-2s.334-2 2-2m0 1.5c-.21 0-.367.007-.483.017-.01.116-.017.273-.017.483s.007.368.017.484c.116.01.273.016.483.016.211 0 .368-.006.485-.016.01-.116.015-.273.015-.484s-.006-.367-.015-.483a6 6 0 0 0-.485-.017\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.512 11.25a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M4.512 3c1.667 0 2 .333 2 2s-.333 2-2 2c-1.378 0-1.844-.228-1.964-1.25H1.512a.75.75 0 1 1 0-1.5h1.036C2.668 3.228 3.134 3 4.512 3m0 1.5c-.21 0-.368.007-.484.017-.01.116-.016.273-.016.483s.006.368.016.484c.116.01.273.016.484.016s.367-.006.484-.016c.01-.116.016-.273.016-.484s-.007-.367-.016-.483a6 6 0 0 0-.484-.017\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.512 4.25a.75.75 0 0 1 0 1.5h-15a.75.75 0 1 1 0-1.5z\"/>",
} as const;

export default function FilterLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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