import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.512 14.5a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM17.512 8.5a.75.75 0 0 1 0 1.5h-9a.75.75 0 1 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.888.006C22.713.133 24.512 2.312 24.512 12l-.006.914C24.385 22.123 22.296 24 13.012 24l-.876-.006c-6.708-.096-9.354-1.38-10.239-6.244h-.385a.75.75 0 0 1 0-1.5h.177a39 39 0 0 1-.172-3.5h-.005a.75.75 0 0 1 0-1.5h.005a39 39 0 0 1 .171-3.5h-.176a.75.75 0 1 1 0-1.5h.386C2.82 1.18 5.656 0 13.012 0zM13.012 1.5c-2.364 0-4.148.126-5.51.433-1.342.302-2.178.758-2.75 1.355-.578.603-1.027 1.494-1.322 2.922l-.008.04h1.09a.75.75 0 0 1 0 1.5H3.198c-.109.997-.166 2.153-.18 3.5h1.494a.75.75 0 0 1 0 1.5H3.017c.015 1.347.072 2.503.18 3.5h1.315a.75.75 0 0 1 0 1.5h-1.09l.008.04c.295 1.428.744 2.319 1.321 2.922.573.597 1.409 1.053 2.75 1.355 1.363.307 3.147.433 5.511.433s4.149-.126 5.51-.433c1.343-.302 2.178-.758 2.75-1.355.579-.603 1.027-1.494 1.322-2.922.298-1.441.418-3.318.418-5.79s-.12-4.349-.418-5.79c-.295-1.428-.743-2.319-1.321-2.922-.573-.597-1.408-1.053-2.75-1.355-1.362-.307-3.146-.433-5.51-.433\" clip-rule=\"evenodd\"/>",
} as const;

export default function NotebookLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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