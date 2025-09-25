import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.618 8.553a1 1 0 0 1 1.342-.448 7.7 7.7 0 0 1 3.447 3.448l.007.016a1 1 0 0 1 .035.082l.006.017a1 1 0 0 1 .057.332 1 1 0 0 1-.056.33l-.007.018a1 1 0 0 1-.035.082l-.007.017a7.7 7.7 0 0 1-3.447 3.448 1 1 0 0 1-.895-1.79A5.7 5.7 0 0 0 11.58 13H6.512a1 1 0 1 1 0-2h5.069a5.7 5.7 0 0 0-1.516-1.105 1 1 0 0 1-.447-1.342\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12s.126 4.29.424 5.672c.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.382.298 3.212.424 5.672.424 1.582 0 2.902-.054 4.01-.17.65-6.538.65-13.123 0-19.661C15.415 2.053 14.095 2 12.513 2m6.053.515c.592 6.31.592 12.66 0 18.97 1.13-.29 1.817-.683 2.283-1.15.516-.515.947-1.303 1.24-2.663.298-1.382.424-3.212.424-5.672s-.126-4.29-.424-5.672c-.293-1.36-.724-2.148-1.24-2.664-.466-.466-1.154-.86-2.283-1.15\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function HideRightPanelStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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