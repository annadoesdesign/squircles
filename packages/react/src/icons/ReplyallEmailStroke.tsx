import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.805 6.293A1 1 0 1 1 9.22 7.707a10.5 10.5 0 0 0-2.32 3.52L6.59 12l.309.773a10.5 10.5 0 0 0 2.32 3.52 1 1 0 1 1-1.414 1.414 12.5 12.5 0 0 1-2.763-4.19l-.458-1.146a1 1 0 0 1 0-.742l.458-1.146a12.5 12.5 0 0 1 2.763-4.19\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.982 6.152a1 1 0 0 1 1.06 1.696 8.6 8.6 0 0 0-2.971 3.132c.846-.02 1.615-.048 2.365-.058 1.125-.016 2.18.01 3.068.232.932.233 1.75.7 2.297 1.588.517.84.711 1.935.711 3.259a1 1 0 0 1-2-.001c0-1.175-.18-1.832-.414-2.21-.203-.331-.51-.553-1.078-.695-.611-.153-1.432-.19-2.557-.174-.688.01-1.514.038-2.415.059a8.6 8.6 0 0 0 2.995 3.172 1 1 0 0 1-1.061 1.696 10.62 10.62 0 0 1-4.232-5.063l-.166-.414q-.007-.015-.012-.032a1 1 0 0 1 .02-.73l.158-.394a10.62 10.62 0 0 1 4.232-5.063\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12s.126 4.29.424 5.672c.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.382.298 3.212.424 5.672.424s4.29-.126 5.672-.424c1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.298-1.382.424-3.212.424-5.672s-.126-4.29-.424-5.672c-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function ReplyallEmailStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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