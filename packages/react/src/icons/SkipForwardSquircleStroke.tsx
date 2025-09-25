import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M17.413 6.005a1 1 0 0 1 1.094.895c.34 3.391.34 6.809 0 10.2a1 1 0 0 1-1.99-.2q.172-1.729.223-3.464a37.4 37.4 0 0 1-7.827 4.279l-.397.158a1.123 1.123 0 0 1-1.518-.822 25.8 25.8 0 0 1 0-10.102l.033-.126c.196-.61.874-.94 1.485-.696l.397.158a37.4 37.4 0 0 1 7.827 4.278 49 49 0 0 0-.223-3.463 1 1 0 0 1 .896-1.095M8.773 8.39a23.8 23.8 0 0 0 0 7.217c2.3-.97 4.491-2.178 6.535-3.608a35.4 35.4 0 0 0-6.534-3.61\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12s.126 4.29.424 5.672c.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.382.298 3.212.424 5.672.424s4.29-.126 5.672-.424c1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.298-1.382.424-3.212.424-5.672s-.126-4.29-.424-5.672c-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function SkipForwardSquircleStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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