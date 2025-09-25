import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M117.333 64C123.224 64 128 68.776 128 74.667v32h32c5.891 0 10.667 4.775 10.667 10.666S165.891 128 160 128h-32v32c0 5.891-4.776 10.667-10.667 10.667s-10.666-4.776-10.666-10.667v-32h-32C68.776 128 64 123.224 64 117.333s4.776-10.666 10.667-10.666h32v-32c0-5.891 4.775-10.667 10.666-10.667\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M117.333 0c64.802 0 117.334 52.532 117.334 117.333 0 28.576-10.231 54.753-27.209 75.104l45.417 45.407c4.162 4.164 4.161 10.918 0 15.083-4.165 4.164-10.918 4.163-15.083 0l-45.417-45.406c-20.342 16.944-46.498 27.146-75.042 27.146C52.532 234.667 0 182.135 0 117.333 0 52.532 52.532 0 117.333 0m0 21.333c-53.019 0-96 42.981-96 96 0 53.02 42.981 96 96 96 53.02 0 96-42.98 96-96 0-53.019-42.98-96-96-96\" clip-rule=\"evenodd\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M117.333 64C123.224 64 128 68.776 128 74.667v32h32c5.891 0 10.667 4.775 10.667 10.666S165.891 128 160 128h-32v32c0 5.891-4.776 10.667-10.667 10.667s-10.666-4.776-10.666-10.667v-32h-32C68.776 128 64 123.224 64 117.333s4.776-10.666 10.667-10.666h32v-32c0-5.891 4.775-10.667 10.666-10.667\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M117.333 0c64.802 0 117.334 52.532 117.334 117.333 0 28.576-10.231 54.753-27.209 75.104l45.417 45.407c4.162 4.164 4.161 10.918 0 15.083-4.165 4.164-10.918 4.163-15.083 0l-45.417-45.406c-20.342 16.944-46.498 27.146-75.042 27.146C52.532 234.667 0 182.135 0 117.333 0 52.532 52.532 0 117.333 0m0 21.333c-53.019 0-96 42.981-96 96 0 53.02 42.981 96 96 96 53.02 0 96-42.98 96-96 0-53.019-42.98-96-96-96\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M117.333 66.667a8 8 0 0 1 8 8v34.666H160a8 8 0 0 1 0 16h-34.667V160a8 8 0 1 1-16 0v-34.667H74.667a8 8 0 0 1 0-16h34.666V74.667a8 8 0 0 1 8-8\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M117.333 0c64.802 0 117.334 52.532 117.334 117.333 0 29.537-10.944 56.499-28.959 77.125l45.282 45.271c3.121 3.123 3.119 8.189 0 11.313a8 8 0 0 1-11.313 0l-45.281-45.271c-20.618 17.98-47.558 28.896-77.063 28.896C52.532 234.667 0 182.135 0 117.333 0 52.532 52.532 0 117.333 0m0 16C61.369 16 16 61.369 16 117.333c0 55.965 45.369 101.334 101.333 101.334 55.965 0 101.334-45.369 101.334-101.334C218.667 61.369 173.298 16 117.333 16\"/>",
} as const;

export default function MagnifyingGlassSearchAddPlusZoom(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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