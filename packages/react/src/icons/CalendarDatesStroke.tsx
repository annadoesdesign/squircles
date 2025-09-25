import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.512 12c.834 0 1 .167 1 1s-.166 1-1 1c-.833 0-1-.167-1-1s.167-1 1-1M12.512 12c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1M18.512 12c.834 0 1 .167 1 1s-.166 1-1 1c-.833 0-1-.167-1-1s.167-1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M17.512 0a1 1 0 0 1 1 1v.432c4.86.97 6 3.834 6 11.068l-.006.876C24.38 22.201 22.2 24 12.512 24l-.914-.006C2.686 23.877.641 21.917.518 13.376L.512 12.5c0-7.234 1.14-10.098 6-11.068V1a1 1 0 1 1 2 0v.151c1.165-.107 2.492-.151 4-.151s2.835.044 4 .151V1a1 1 0 0 1 1-1m4.9 9.995a99.5 99.5 0 0 0-19.8 0l-.038.001a45 45 0 0 0-.062 2.504c0 2.354.126 4.093.42 5.4.288 1.28.709 2.015 1.214 2.5.512.49 1.305.908 2.678 1.192 1.39.287 3.226.408 5.688.408a55 55 0 0 0 2.182-.041c.623-4.628 2.616-6.333 7.746-6.807.047-.784.072-1.664.072-2.652 0-.926-.02-1.757-.062-2.504zm-.246 7.197c-2.137.242-3.302.708-4.007 1.341-.638.574-1.133 1.505-1.421 3.273 2.138-.242 3.303-.707 4.008-1.34.638-.574 1.132-1.505 1.42-3.274M12.512 3c-1.573 0-2.89.05-4 .16V4a1 1 0 0 1-2 0v-.52c-1.183.28-1.894.668-2.366 1.12-.505.485-.926 1.22-1.214 2.5q-.089.405-.16.87a101.5 101.5 0 0 1 19.479 0q-.069-.465-.159-.87c-.288-1.28-.709-2.015-1.214-2.5-.472-.452-1.183-.84-2.366-1.12V4a1 1 0 1 1-2 0v-.84c-1.109-.11-2.427-.16-4-.16\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function CalendarDatesStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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