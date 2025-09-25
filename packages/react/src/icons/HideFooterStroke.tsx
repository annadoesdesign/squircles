import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 5a1 1 0 0 1 1 1v5.067a5.7 5.7 0 0 0 1.106-1.514 1 1 0 0 1 1.789.894 7.7 7.7 0 0 1-3.447 3.448l-.018.006a1 1 0 0 1-.082.036l-.017.005a1 1 0 0 1-.33.058l-.103-.005a1 1 0 0 1-.23-.053l-.016-.005a1 1 0 0 1-.082-.036l-.017-.006a7.7 7.7 0 0 1-3.447-3.448 1 1 0 0 1 1.789-.894 5.7 5.7 0 0 0 1.105 1.514V6a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m9.208 18.93a99.5 99.5 0 0 0-18.417 0c.247.633.543 1.075.873 1.406.516.516 1.305.947 2.664 1.24 1.382.298 3.212.424 5.672.424s4.29-.126 5.672-.424c1.36-.293 2.148-.724 2.664-1.24.33-.33.625-.773.872-1.406M12.512 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12c0 2.064.09 3.684.295 4.968 6.455-.62 12.954-.62 19.41 0 .204-1.285.295-2.904.295-4.968 0-2.46-.126-4.29-.424-5.672-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function HideFooterStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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