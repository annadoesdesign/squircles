import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M4.53 2.587a.751.751 0 0 1 1.465.326 40.7 40.7 0 0 0-.942 7.324 59 59 0 0 1 12.476-6.842l.635-.253.103-.036a.95.95 0 0 1 1.15.623l.027.106a40.4 40.4 0 0 1 0 15.83.947.947 0 0 1-1.28.693l-.635-.254a59 59 0 0 1-12.476-6.842c.09 2.458.405 4.91.942 7.325a.751.751 0 0 1-1.465.326 42.24 42.24 0 0 1 0-18.326m13.557 2.201A57.4 57.4 0 0 0 5.522 11.75a57.4 57.4 0 0 0 12.565 6.962l.01.003c.839-4.606.839-9.325 0-13.93z\" clip-rule=\"evenodd\"/>",
} as const;

export default function SkipBackwardLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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