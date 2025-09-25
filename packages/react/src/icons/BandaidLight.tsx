import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.512 16.25c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M14.512 16.25c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M10.512 11.25c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M14.512 11.25c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M10.512 6.25c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M14.512 6.25c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c10 0 12 1.667 12 10l-.006.762C24.38 20.436 22.2 22 12.512 22l-.914-.005C2.686 21.893.641 20.188.518 12.762L.512 12c0-8.333 2-10 12-10m0 1.5c-2.18 0-3.907.082-5.285.28.03.099.043.204.03.313a63.8 63.8 0 0 0 0 15.814.74.74 0 0 1-.03.312c1.378.198 3.106.281 5.285.281s3.906-.083 5.284-.281a.75.75 0 0 1-.028-.312 63.8 63.8 0 0 0 0-15.814.75.75 0 0 1 .028-.313c-1.378-.198-3.105-.28-5.284-.28m-6.764.574c-.928.248-1.567.57-2.026.953-1.158.965-1.71 2.766-1.71 6.973s.552 6.008 1.71 6.973c.46.382 1.098.704 2.026.952a65.3 65.3 0 0 1 0-15.85m13.528 0a65.3 65.3 0 0 1 0 15.85c.928-.247 1.567-.569 2.026-.951 1.158-.965 1.71-2.766 1.71-6.973s-.552-6.008-1.71-6.973c-.459-.382-1.098-.705-2.026-.953\" clip-rule=\"evenodd\"/>",
} as const;

export default function BandaidLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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