import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.274.005c7.26.09 9.05 1.558 9.223 7.871l-.018-.015c1.575 1.334 2.033 3.55 2.033 7.139 0 7.5-2 9-12 9s-12-1.5-12-9c0-3.59.46-5.806 2.034-7.14l-.018.016C2.705 1.348 4.613 0 12.512 0zM12.512 8c-2.47 0-4.342.095-5.774.326-1.436.232-2.265.578-2.776.961-.89.668-1.45 1.948-1.45 5.713s.56 5.045 1.45 5.713c.511.383 1.34.729 2.776.96 1.432.233 3.303.327 5.774.327s4.343-.095 5.775-.326c1.435-.232 2.264-.578 2.775-.961.891-.668 1.45-1.948 1.45-5.713s-.559-5.045-1.45-5.713c-.51-.383-1.34-.729-2.775-.96C16.855 8.094 14.983 8 12.512 8m0-6c-2.047 0-3.561.094-4.697.314-1.124.219-1.727.533-2.09.86-.56.504-.98 1.43-1.14 3.608L4.53 6.8c1.807-.602 4.373-.8 7.981-.8 3.595 0 6.154.197 7.96.794l-.033-.012c-.16-2.177-.58-3.104-1.14-3.608-.363-.327-.965-.641-2.09-.86C16.074 2.094 14.56 2 12.513 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function TimelineStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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