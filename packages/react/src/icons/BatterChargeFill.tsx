import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M11.512 1c7.4 0 10.02 1.195 10.755 6.477 1.785.606 2.245 1.908 2.245 4.523l-.004.38c-.045 2.363-.545 3.566-2.24 4.143C21.531 21.805 18.911 23 11.511 23c-9.166 0-11-1.833-11-11s1.834-11 11-11M5.676 5.014a1 1 0 0 0-1.15.822 37.5 37.5 0 0 0 0 12.328 1 1 0 0 0 1.973-.328 35.5 35.5 0 0 1 0-11.672 1 1 0 0 0-.823-1.15m4 0a1 1 0 0 0-1.15.822 37.5 37.5 0 0 0 0 12.328 1 1 0 0 0 1.973-.328 35.5 35.5 0 0 1 0-11.672 1 1 0 0 0-.823-1.15m4 0a1 1 0 0 0-1.15.822 37.5 37.5 0 0 0 0 12.328 1 1 0 0 0 1.973-.328 35.5 35.5 0 0 1 0-11.672 1 1 0 0 0-.823-1.15\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function BatterChargeFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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