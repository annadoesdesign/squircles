import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M5.512 16c2.5 0 3 .5 3 3s-.5 3-3 3c-2.123 0-2.8-.36-2.958-2H1.512a1 1 0 1 1 0-2h1.042c.157-1.64.835-2 2.958-2m0 2c-.454 0-.754.02-.953.048a7 7 0 0 0-.047.952c0 .454.02.754.047.953.2.027.5.047.953.047s.753-.02.952-.047c.028-.199.048-.499.048-.953s-.02-.753-.048-.952A7 7 0 0 0 5.512 18\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.512 18a1 1 0 1 1 0 2h-12a1 1 0 1 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M19.512 9c2.123 0 2.801.36 2.958 2h1.042a1 1 0 1 1 0 2H22.47c-.157 1.64-.835 2-2.958 2-2.5 0-3-.5-3-3s.5-3 3-3m0 2c-.453 0-.753.02-.952.048a7 7 0 0 0-.048.952c0 .454.02.754.048.953.2.027.499.047.952.047.454 0 .754-.02.953-.047.028-.199.047-.499.047-.953s-.02-.753-.047-.952a7 7 0 0 0-.953-.048\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.512 11a1 1 0 1 1 0 2h-12a1 1 0 1 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M5.512 2c2.5 0 3 .5 3 3s-.5 3-3 3c-2.123 0-2.8-.36-2.958-2H1.512a1 1 0 0 1 0-2h1.042c.157-1.64.835-2 2.958-2m0 2c-.454 0-.754.02-.953.048A7 7 0 0 0 4.512 5c0 .454.02.754.047.953.2.028.5.047.953.047s.753-.02.952-.047c.028-.199.048-.499.048-.953s-.02-.753-.048-.952A7 7 0 0 0 5.512 4\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.512 4a1 1 0 1 1 0 2h-12a1 1 0 1 1 0-2z\"/>",
  light: "",
} as const;

export default function FilterStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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