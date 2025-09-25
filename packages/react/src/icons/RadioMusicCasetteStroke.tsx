import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M8.512 11a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.348 11.014a1 1 0 0 1 1.15.822c.35 2.095.35 4.233 0 6.328a1 1 0 0 1-1.972-.328 17.3 17.3 0 0 0 0-5.672 1 1 0 0 1 .822-1.15M19.348 11.014a1 1 0 0 1 1.15.822c.35 2.095.35 4.233 0 6.328a1 1 0 0 1-1.972-.328 17.3 17.3 0 0 0 0-5.672 1 1 0 0 1 .822-1.15\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M4.512 0a1 1 0 0 1 1 1v5.528l-.033.008C7.205 6.14 9.494 6 12.512 6c10 0 12 1.5 12 9s-2 9-12 9-12-1.5-12-9c0-4.296.657-6.623 3.097-7.827q-.05.023-.097.048V1a1 1 0 0 1 1-1m8 8c-2.47 0-4.342.095-5.774.326-1.436.232-2.265.578-2.776.961-.89.668-1.45 1.948-1.45 5.713s.56 5.045 1.45 5.713c.511.383 1.34.729 2.776.96 1.432.233 3.303.327 5.774.327s4.343-.095 5.775-.326c1.435-.232 2.264-.578 2.775-.961.891-.668 1.45-1.948 1.45-5.713s-.559-5.045-1.45-5.713c-.51-.383-1.34-.729-2.775-.96C16.855 8.094 14.983 8 12.512 8\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function RadioMusicCasetteStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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