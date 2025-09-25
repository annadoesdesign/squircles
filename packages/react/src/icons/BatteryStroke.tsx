import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M11.512 1c7.4 0 10.02 1.195 10.755 6.477 1.785.606 2.245 1.908 2.245 4.523l-.004.38c-.045 2.363-.545 3.566-2.24 4.143C21.531 21.805 18.911 23 11.511 23c-9.166 0-11-1.833-11-11s1.834-11 11-11m0 2c-2.252 0-3.915.115-5.164.385-1.227.264-1.916.648-2.36 1.092-.442.443-.826 1.132-1.091 2.359-.27 1.25-.385 2.912-.385 5.164s.116 3.915.385 5.164c.265 1.227.649 1.916 1.092 2.36.443.442 1.132.827 2.36 1.091 1.248.27 2.911.385 5.163.385s3.915-.115 5.164-.385c1.227-.264 1.917-.648 2.36-1.092.443-.443.827-1.132 1.091-2.359.27-1.25.385-2.912.385-5.164s-.115-3.915-.385-5.164c-.264-1.227-.648-1.916-1.091-2.36s-1.133-.827-2.36-1.091C15.427 3.115 13.764 3 11.512 3\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function BatteryStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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