import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.255 9.01c3.525.108 4.257 1.084 4.257 4.99l-.01.743C17.395 18.268 16.418 19 12.512 19l-.743-.01c-3.29-.1-4.146-.957-4.246-4.247L7.513 14c0-4.167.833-5 5-5zM12.512 11c-1.002 0-1.665.053-2.117.15-.43.093-.526.196-.531.202-.006.005-.109.1-.201.53-.098.453-.15 1.116-.15 2.118s.052 1.665.15 2.117c.092.43.195.526.2.531s.102.109.532.202c.452.097 1.115.15 2.117.15s1.665-.053 2.117-.15c.43-.093.526-.196.532-.202.005-.005.108-.1.2-.53.098-.453.151-1.116.151-2.118s-.053-1.665-.15-2.117c-.093-.43-.196-.526-.201-.531s-.102-.109-.532-.202c-.452-.097-1.115-.15-2.117-.15\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 1c4.166 0 5.95.68 6.631 3.498q.75.165 1.374.398A1 1 0 0 1 22.512 5v1q0 .048-.005.096c1.552 1.485 2.005 3.94 2.005 7.904 0 8.333-2 10-12 10s-12-1.667-12-10c0-6.008 1.04-8.55 5.368-9.502C6.56 1.68 8.346 1 12.512 1m0 2c-2.068 0-3.136.187-3.733.483-.389.193-.714.488-.954 1.485A2 2 0 0 1 6.31 6.45c-1.794.394-2.53 1.011-2.972 1.841-.547 1.03-.826 2.72-.826 5.708 0 4.221.57 5.788 1.53 6.589.508.423 1.32.798 2.73 1.052 1.415.254 3.273.359 5.74.359s4.325-.105 5.74-.36c1.411-.253 2.222-.628 2.73-1.051.9-.75 1.457-2.175 1.523-5.828l.007-.761c0-2.988-.28-4.678-.827-5.708-.441-.83-1.177-1.447-2.97-1.84a2 2 0 0 1-1.516-1.484c-.241-.997-.565-1.292-.953-1.485-.523-.259-1.406-.434-3.004-.474z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function CameraStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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