import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m9.9 8.995a99.5 99.5 0 0 0-19.8 0h-.014c-.057.88-.086 1.877-.086 3.005 0 2.46.126 4.29.424 5.672.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.382.298 3.212.424 5.672.424s4.29-.126 5.672-.424c1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.298-1.382.424-3.212.424-5.672 0-1.129-.03-2.124-.087-3.005zM8.528 2.166a16 16 0 0 0-1.687.258c-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328q-.065.304-.12.639a102 102 0 0 1 5.755-.389c.26-1.45.25-2.936-.04-4.382zM12.512 2q-1.064 0-1.976.034c.27 1.482.295 2.998.074 4.487 3.869-.073 7.74.076 11.596.446a13 13 0 0 0-.118-.639c-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function TopBarStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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