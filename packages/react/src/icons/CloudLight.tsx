import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M22.762 14c0-2.9-2.35-5.25-5.25-5.25h-.062a.75.75 0 0 1-.751-.644 6.251 6.251 0 0 0-12.42 1.351.75.75 0 0 1-.25.615A5.24 5.24 0 0 0 2.262 14c0 2.333 1.504 4.587 3.5 5.293a20.23 20.23 0 0 0 13.5 0c1.996-.706 3.5-2.96 3.5-5.293m1.5 0c0 2.892-1.835 5.765-4.5 6.707a21.73 21.73 0 0 1-14.5 0C2.598 19.765.762 16.892.762 14c0-1.877.767-3.577 2.003-4.8L2.762 9a7.75 7.75 0 0 1 15.306-1.726A6.75 6.75 0 0 1 24.262 14\"/>",
} as const;

export default function CloudLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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