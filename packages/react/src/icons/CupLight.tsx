import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.512 2c4.056 0 9.026-.073 9.873 5.33 3.317.562 4.127 1.974 4.127 5.17l-.005.419c-.079 3.153-1.113 4.43-4.997 4.875C18.26 21.078 15.632 22 10.512 22c-8.182 0-10-2.353-10-12.941C.512 1.912 6.064 2 10.512 2m0 1.5c-2.328 0-4.465.005-6.054.718-.736.33-1.31.797-1.718 1.487-.418.706-.728 1.757-.728 3.354 0 2.619.114 4.65.39 6.231.276 1.582.697 2.604 1.23 3.293 1 1.295 2.805 1.917 6.88 1.917s5.88-.622 6.881-1.917c.533-.69.954-1.711 1.23-3.293.275-1.581.39-3.612.39-6.231 0-1.597-.31-2.648-.728-3.354-.409-.69-.983-1.158-1.718-1.487-1.59-.713-3.726-.718-6.055-.718m10 5.559c0 3.004-.147 5.345-.544 7.158.93-.145 1.54-.34 1.947-.563.422-.232.652-.506.81-.909.183-.468.287-1.16.287-2.245 0-1.084-.104-1.777-.287-2.245-.158-.403-.388-.677-.81-.91-.322-.176-.77-.336-1.406-.467z\" clip-rule=\"evenodd\"/>",
} as const;

export default function CupLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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