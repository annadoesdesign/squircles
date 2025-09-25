import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.619 2.07c.597-1.043 1.876-1.674 2.95-1.136C17.233 2.771 24.512 7.266 24.512 14c0 6.51-5.183 9.876-11.647 9.994h.012q-.18.005-.365.006-.184 0-.366-.007l.013.001C5.695 23.876.512 20.51.512 14c0-2 2-6 6-8 1.967-.983 3.208-2.45 3.962-3.687zm2.338 8.706a1 1 0 0 0-.246.148 1.4 1.4 0 0 0-.252.263 8.4 8.4 0 0 1-3.052 2.602 5.87 5.87 0 0 0-2.23 1.987c-.54.81-.665 1.423-.665 1.557 0 1.602.619 2.678 1.564 3.405C9.083 21.513 10.614 22 12.512 22s3.43-.487 4.437-1.262c.945-.727 1.563-1.803 1.563-3.405 0-1.355-.665-2.628-1.8-3.82-1.116-1.17-2.54-2.102-3.718-2.748zM4.871 19.59a6.9 6.9 0 0 1-.36-2.257c0-1.333 1.334-4 4-5.333a6.4 6.4 0 0 0 2.328-1.988c.706-.972 1.99-1.614 3.044-1.04 2.562 1.393 6.628 4.252 6.628 8.36 0 .83-.126 1.581-.36 2.257 1.451-1.276 2.36-3.092 2.36-5.59 0-2.602-1.404-4.923-3.485-6.929-2.055-1.98-4.566-3.448-6.312-4.326l-.03.01a.6.6 0 0 0-.172.114.8.8 0 0 0-.16.196c-.87 1.516-2.399 3.451-4.946 4.725-1.644.822-2.894 2.065-3.73 3.32-.874 1.31-1.165 2.425-1.165 2.89 0 2.498.908 4.315 2.36 5.59\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m12.512 24-.335-.005h-.018q.176.003.353.005M12.865 23.994q-.176.005-.353.006.177-.002.353-.006\"/>",
  light: "",
} as const;

export default function FireStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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