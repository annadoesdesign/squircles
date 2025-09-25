import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.511 19.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M10.33 3.272a9 9 0 0 1 4.363 0 .75.75 0 0 1-.363 1.456 7.5 7.5 0 0 0-3.637 0 .75.75 0 0 1-.363-1.456\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.256 0c6.822 0 9.174 1.34 9.804 7.313a.75.75 0 0 1 .443.564 19 19 0 0 1 0 6.246.75.75 0 0 1-.296.48c-.264 6.327-1.693 8.586-6.314 9.203l-.398.047c-.948.104-2.022.147-3.239.147-7.207 0-9.427-1.496-9.895-8.37a.74.74 0 0 1-.27-.295c-.42-.84-.42-1.83 0-2.67a.8.8 0 0 1 .167-.219L2.256 12q0-.747.014-1.435a.8.8 0 0 1-.179-.23c-.42-.84-.42-1.83 0-2.67.08-.16.21-.275.36-.344C3.079 1.341 5.43 0 12.256 0m0 1.5c-4.207 0-6.007.552-6.972 1.71-.5.6-.899 1.505-1.16 2.962-.263 1.46-.368 3.352-.368 5.828s.105 4.368.368 5.828c.261 1.457.66 2.363 1.16 2.962.965 1.158 2.765 1.71 6.972 1.71 1.356 0 2.488-.055 3.438-.182 1.19-.159 2.027-.423 2.636-.776.58-.338 1.019-.793 1.364-1.463.752-1.458 1.062-3.883 1.062-8.079 0-2.476-.105-4.368-.367-5.828-.262-1.457-.66-2.362-1.16-2.962-.965-1.158-2.765-1.71-6.973-1.71\" clip-rule=\"evenodd\"/>",
} as const;

export default function PhoneCellLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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