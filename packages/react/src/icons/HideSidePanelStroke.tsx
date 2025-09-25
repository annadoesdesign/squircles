import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14.065 8.105a1 1 0 0 1 .895 1.79A5.7 5.7 0 0 0 13.444 11h5.068a1 1 0 1 1 0 2h-5.068a5.7 5.7 0 0 0 1.515 1.105 1 1 0 0 1-.894 1.79 7.7 7.7 0 0 1-3.447-3.448l-.008-.017a1 1 0 0 1-.035-.082l-.006-.019-.025-.078-.005-.022-.006-.028a1 1 0 0 1 .036-.533l.006-.017a1 1 0 0 1 .035-.082l.008-.016a7.7 7.7 0 0 1 3.447-3.448\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 2c-1.582 0-2.902.053-4.012.169a99.5 99.5 0 0 0 0 19.661c1.11.116 2.43.17 4.012.17 2.46 0 4.29-.126 5.672-.424 1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.298-1.382.424-3.212.424-5.672s-.126-4.29-.424-5.672c-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2m-6.054.515c-1.128.288-1.816.683-2.282 1.15-.516.515-.947 1.304-1.24 2.663C2.638 7.71 2.512 9.54 2.512 12s.126 4.29.424 5.672c.293 1.36.724 2.148 1.24 2.664.466.466 1.154.86 2.282 1.148a101.5 101.5 0 0 1 0-18.97\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function HideSidePanelStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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