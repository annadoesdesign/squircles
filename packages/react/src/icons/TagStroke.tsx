import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 5c2.5 0 3 .5 3 3s-.5 3-3 3-3-.5-3-3 .5-3 3-3m0 2c-.453 0-.754.02-.953.047-.027.199-.047.499-.047.953s.02.753.047.952c.2.028.5.048.953.048.454 0 .754-.02.953-.048A7 7 0 0 0 13.512 8c0-.454-.02-.754-.047-.953A7 7 0 0 0 12.512 7\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c1.002 0 11 4 11 8l.02 4.563C23.559 22.087 23.012 24 12.512 24l-1.088-.005C.575 23.893 1.512 22.047 1.512 8c0-4 10-8 11-8m-.154 2.086c-.307.098-.73.25-1.234.455-1.008.409-2.27.996-3.494 1.695-1.24.709-2.357 1.485-3.137 2.252-.835.822-.98 1.33-.98 1.512 0 3.697-.063 6.408.029 8.531.093 2.16.341 3.275.707 3.914.264.462.691.86 1.931 1.145 1.343.31 3.315.41 6.332.41 2.985 0 4.934-.162 6.244-.527 1.202-.336 1.688-.79 1.997-1.362.393-.727.638-1.906.73-4.004a77 77 0 0 0 .049-3.538L21.512 8c0-.181-.145-.69-.98-1.512-.78-.767-1.897-1.543-3.137-2.252a30 30 0 0 0-3.494-1.695 18 18 0 0 0-1.234-.455q-.087-.027-.156-.045z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function TagStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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