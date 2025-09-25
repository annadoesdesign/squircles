import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.805 7.293a1 1 0 1 1 1.414 1.414l-.419.419A12.8 12.8 0 0 0 8.255 11h10.257a1 1 0 1 1 0 2H8.255c.454.671.97 1.3 1.545 1.874l.42.419a1 1 0 1 1-1.415 1.414l-.419-.419a14.8 14.8 0 0 1-2.768-3.84l-.046-.11a1 1 0 0 1 .046-.785 14.8 14.8 0 0 1 2.768-3.841z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12s.126 4.29.424 5.672c.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.382.298 3.212.424 5.672.424s4.29-.126 5.672-.424c1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.298-1.382.424-3.212.424-5.672s-.126-4.29-.424-5.672c-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function ArrowLeftSquircleStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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