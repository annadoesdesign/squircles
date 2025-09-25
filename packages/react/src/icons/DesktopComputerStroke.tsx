import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 1.667 12 10l-.006.762c-.122 7.402-2.155 9.118-10.994 9.23v1.545c1.09.063 2.176.227 3.242.493a1 1 0 1 1-.484 1.94 15.5 15.5 0 0 0-7.516 0 1 1 0 1 1-.484-1.94 17.5 17.5 0 0 1 3.242-.493v-1.544C2.673 19.881.64 18.164.518 10.762L.512 10c0-8.333 2-10 12-10m0 2c-2.467 0-4.325.105-5.74.36-1.41.253-2.222.628-2.73 1.051-.96.8-1.53 2.368-1.53 6.589s.57 5.788 1.53 6.589c.508.423 1.32.798 2.73 1.052 1.415.254 3.273.359 5.74.359s4.325-.105 5.74-.36c1.411-.253 2.222-.628 2.73-1.051.96-.8 1.53-2.368 1.53-6.589s-.57-5.788-1.53-6.589c-.508-.423-1.319-.798-2.73-1.052C16.837 2.105 14.98 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function DesktopComputerStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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