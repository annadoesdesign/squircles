import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c8.334 0 10 .833 10 5 0 2.545-.622 3.844-3.006 4.472q.006.256.006.528c0 4.778-1.065 5.9-6.25 5.99V23a.75.75 0 0 1-1.5 0v-7.01c-5.184-.09-6.25-1.212-6.25-5.99q0-.271.005-.528C3.134 8.844 2.512 7.545 2.512 5c0-4.167 1.667-5 10-5m0 1.5c-2.069 0-3.67.052-4.917.187-1.26.135-2.043.345-2.537.592-.436.218-.642.46-.778.776-.165.383-.268.973-.268 1.945 0 1.2.158 1.805.38 2.156.18.287.53.608 1.507.865A1.5 1.5 0 0 1 7.017 9.5q-.005.242-.005.5c0 2.547.346 3.356.79 3.736.234.202.641.41 1.428.555.792.146 1.849.209 3.282.209s2.49-.063 3.282-.209c.787-.145 1.194-.353 1.43-.555.442-.38.788-1.189.788-3.736q0-.25-.006-.5a1.5 1.5 0 0 1 1.119-1.479c.976-.257 1.328-.578 1.508-.865.194-.307.34-.809.372-1.733L21.012 5c0-.972-.102-1.562-.267-1.945-.137-.317-.343-.558-.779-.776-.493-.247-1.276-.456-2.537-.592-.934-.101-2.07-.155-3.451-.176z\" clip-rule=\"evenodd\"/>",
} as const;

export default function PinLocationSaveLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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