import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 5c2.5 0 3 .5 3 3s-.5 3-3 3-3-.5-3-3 .5-3 3-3m0 1.5c-.595 0-.967.031-1.207.083a1 1 0 0 0-.163.047 1 1 0 0 0-.047.163c-.051.24-.083.612-.083 1.207s.032.967.083 1.207c.018.081.036.132.047.162.03.012.081.03.163.048.24.052.612.083 1.207.083s.968-.031 1.207-.083a1 1 0 0 0 .163-.048c.011-.03.03-.08.047-.162.052-.24.083-.612.083-1.207s-.03-.967-.083-1.207a1 1 0 0 0-.047-.163 1 1 0 0 0-.162-.047c-.24-.052-.613-.083-1.208-.083\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c1.002 0 11 4 11 8l.02 4.563C23.559 22.087 23.012 24 12.512 24l-1.088-.005C.575 23.893 1.512 22.047 1.512 8c0-4 10-8 11-8m-.305 1.61c-.323.102-.759.26-1.272.467a31 31 0 0 0-3.553 1.726c-1.258.718-2.416 1.519-3.24 2.329-.865.85-1.13 1.482-1.13 1.868 0 3.68-.061 6.416.03 8.553.094 2.165.343 3.387.773 4.14.355.62.925 1.078 2.253 1.384 1.405.324 3.431.423 6.444.423 2.988 0 4.997-.16 6.377-.546 1.3-.363 1.916-.887 2.304-1.604.451-.835.697-2.114.79-4.22.045-1.045.053-2.22.049-3.563L22.012 8c0-.386-.265-1.018-1.13-1.868-.823-.81-1.981-1.61-3.239-2.33a31 31 0 0 0-3.554-1.725 18 18 0 0 0-1.27-.468 6 6 0 0 0-.307-.088q-.114.029-.305.088\" clip-rule=\"evenodd\"/>",
} as const;

export default function TagLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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