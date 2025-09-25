import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m9.694 6.969a55.8 55.8 0 0 0-14.063-.04A99.5 99.5 0 0 0 8.5 21.83c1.11.116 2.43.17 4.012.17 2.46 0 4.29-.126 5.672-.424 1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.298-1.382.424-3.212.424-5.672 0-2.098-.094-3.737-.306-5.031M6.46 2.515c-1.13.288-1.817.683-2.283 1.15-.516.515-.947 1.304-1.24 2.663C2.638 7.71 2.512 9.54 2.512 12s.126 4.29.424 5.672c.293 1.36.724 2.148 1.24 2.664.466.466 1.154.86 2.282 1.148a101.5 101.5 0 0 1 0-18.97M12.512 2c-1.582 0-2.902.053-4.012.169q-.134 1.363-.231 2.727a57.8 57.8 0 0 1 13.373-.012c-.23-.535-.497-.923-.794-1.22-.516-.516-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function DashboardStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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