import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.512 2c4.056 0 9.026-.073 9.873 5.33 3.317.562 4.127 1.974 4.127 5.17l-.005.419c-.079 3.153-1.113 4.43-4.997 4.875C18.26 21.078 15.632 22 10.512 22c-8.182 0-10-2.353-10-12.941C.512 1.912 6.064 2 10.512 2m0 2c-2.363 0-4.379.014-5.85.674-.656.294-1.144.698-1.492 1.285-.36.608-.658 1.565-.658 3.1 0 2.61.114 4.606.382 6.145.269 1.539.669 2.473 1.133 3.073C4.869 19.367 6.443 20 10.512 20s5.643-.633 6.486-1.723c.464-.6.864-1.534 1.132-3.073.269-1.539.382-3.535.382-6.145 0-1.535-.298-2.492-.658-3.1-.348-.587-.835-.991-1.491-1.285C14.89 4.014 12.876 4 10.513 4m9.994 6.027c-.026 2.278-.155 4.143-.434 5.666.792-.135 1.288-.304 1.601-.476.321-.177.471-.361.586-.654.15-.38.253-1 .253-2.063s-.104-1.682-.253-2.062c-.115-.294-.265-.478-.586-.655-.251-.138-.619-.276-1.163-.395z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function CupStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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