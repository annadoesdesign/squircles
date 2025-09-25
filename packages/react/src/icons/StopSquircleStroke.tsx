import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 7c4.167 0 5 .833 5 5s-.833 5-5 5-5-.833-5-5 .834-5 5-5m0 2c-1.001 0-1.665.053-2.117.15-.43.093-.525.196-.531.202-.006.005-.109.1-.201.53-.098.453-.15 1.116-.15 2.118s.052 1.665.15 2.117c.092.43.195.526.2.531.008.007.105.11.532.202.453.097 1.116.15 2.117.15 1.002 0 1.665-.053 2.117-.15.43-.093.526-.196.532-.202.005-.005.108-.101.2-.53.098-.453.151-1.116.151-2.118s-.053-1.665-.15-2.117c-.092-.427-.194-.525-.201-.531-.006-.006-.102-.109-.531-.202-.453-.097-1.116-.15-2.118-.15\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.426.006C22.636.133 24.512 2.313 24.512 12l-.006.914C24.38 22.123 22.2 24 12.513 24l-.914-.006C2.686 23.872.641 21.826.518 12.914L.512 12c0-10 2-12 12-12zM12.512 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12s.126 4.29.424 5.672c.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.383.298 3.212.424 5.672.424s4.29-.126 5.672-.424c1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.299-1.382.424-3.212.424-5.672s-.125-4.29-.424-5.672c-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.973 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function StopSquircleStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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