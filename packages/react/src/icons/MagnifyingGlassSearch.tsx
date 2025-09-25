import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M117.333 0c64.802 0 117.334 52.532 117.334 117.333 0 28.576-10.231 54.753-27.209 75.105l45.417 45.406c4.163 4.164 4.161 10.918 0 15.083-4.165 4.165-10.918 4.164-15.083 0l-45.417-45.406c-20.342 16.944-46.498 27.146-75.042 27.146C52.532 234.667 0 182.135 0 117.333 0 52.532 52.532 0 117.333 0m0 21.333c-53.019 0-96 42.981-96 96 0 53.02 42.981 96 96 96 53.02 0 96-42.98 96-96 0-53.019-42.98-96-96-96\" clip-rule=\"evenodd\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M117.333 0c64.802 0 117.334 52.532 117.334 117.333 0 28.576-10.231 54.753-27.209 75.105l45.417 45.406c4.163 4.164 4.161 10.918 0 15.083-4.165 4.165-10.918 4.164-15.083 0l-45.417-45.406c-20.342 16.944-46.498 27.146-75.042 27.146C52.532 234.667 0 182.135 0 117.333 0 52.532 52.532 0 117.333 0m0 21.333c-53.019 0-96 42.981-96 96 0 53.02 42.981 96 96 96 53.02 0 96-42.98 96-96 0-53.019-42.98-96-96-96\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M117.333 0c64.802 0 117.334 52.532 117.334 117.333 0 29.521-10.93 56.472-28.927 77.094l45.25 45.24c3.119 3.122 3.116 8.188 0 11.312a8 8 0 0 1-11.313 0l-45.25-45.239c-20.622 17.997-47.573 28.927-77.094 28.927C52.532 234.667 0 182.135 0 117.333 0 52.532 52.532 0 117.333 0m0 16C61.369 16 16 61.369 16 117.333c0 55.965 45.369 101.334 101.333 101.334 55.965 0 101.334-45.369 101.334-101.334C218.667 61.369 173.298 16 117.333 16\"/>",
} as const;

export default function MagnifyingGlassSearch(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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