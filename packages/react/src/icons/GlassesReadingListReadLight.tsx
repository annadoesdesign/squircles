import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.524 11.25C13.65 7.332 14.832 6 18.012 6s4.361 1.332 4.488 5.25h1.012a.75.75 0 0 1 0 1.5H22.5l-.002.059C22.364 16.682 21.177 18 18.013 18s-4.35-1.318-4.486-5.191l-.001-.059h-2.026v.059C11.363 16.682 10.176 18 7.012 18s-4.35-1.318-4.486-5.191l-.001-.059H1.512a.75.75 0 0 1 0-1.5h1.012C2.65 7.332 3.832 6 7.012 6s4.362 1.332 4.488 5.25zM7.012 7.5c-1.5 0-2.031.335-2.315.713-.384.512-.685 1.564-.685 3.787s.3 3.275.685 3.787c.284.378.814.713 2.315.713s2.032-.335 2.316-.713c.384-.512.684-1.564.684-3.787s-.3-3.275-.684-3.787c-.284-.378-.815-.713-2.316-.713m11 0c-1.5 0-2.032.335-2.315.713-.384.512-.685 1.564-.685 3.787s.3 3.275.685 3.787c.284.378.814.713 2.315.713s2.032-.335 2.316-.713c.384-.512.684-1.564.684-3.787s-.3-3.275-.684-3.787c-.284-.378-.815-.713-2.316-.713\" clip-rule=\"evenodd\"/>",
} as const;

export default function GlassesReadingListReadLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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