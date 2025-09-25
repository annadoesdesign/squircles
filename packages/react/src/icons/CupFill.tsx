import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M10.512 2c4.056 0 9.026-.073 9.873 5.33 3.317.562 4.127 1.974 4.127 5.17l-.005.419c-.079 3.153-1.113 4.43-4.997 4.875C18.26 21.079 15.632 22 10.512 22c-8.182 0-10-2.353-10-12.941C.512 1.912 6.064 2 10.512 2m9.994 8.027c-.026 2.278-.155 4.143-.434 5.666.792-.135 1.288-.304 1.601-.476.321-.177.471-.361.586-.654.15-.38.253-1 .253-2.063s-.104-1.682-.253-2.062c-.115-.294-.265-.478-.586-.655-.251-.138-.619-.276-1.163-.395z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function CupFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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