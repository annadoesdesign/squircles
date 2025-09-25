import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.762 17.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M19.762 13.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M19.762 9.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M14.982.47a.75.75 0 1 1 1.06 1.06l-2.477 2.477c9.09.122 10.947 1.96 10.947 9.993 0 8.333-2 10-12 10s-12-1.667-12-10c0-8.032 1.858-9.87 10.947-9.993L8.982 1.53a.75.75 0 1 1 1.06-1.06l2.47 2.47zm-2.47 5.03c-2.475 0-4.368.105-5.828.367-1.457.262-2.362.66-2.962 1.16-1.158.965-1.71 2.766-1.71 6.973s.552 6.008 1.71 6.973c.6.5 1.505.898 2.962 1.16 1.46.262 3.353.367 5.828.367q1.245 0 2.302-.04a80.8 80.8 0 0 0 0-16.922 64 64 0 0 0-2.302-.038m3.819.122c.57 5.57.57 11.185 0 16.755a20 20 0 0 0 2.01-.244c1.456-.262 2.362-.66 2.961-1.16 1.158-.965 1.71-2.766 1.71-6.973s-.552-6.008-1.71-6.973c-.6-.5-1.505-.898-2.962-1.16a20 20 0 0 0-2.01-.245\" clip-rule=\"evenodd\"/>",
} as const;

export default function RetroTvLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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