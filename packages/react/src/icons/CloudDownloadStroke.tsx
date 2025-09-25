import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 8a1 1 0 0 1 1 1v5.332c.466-.299.9-.646 1.293-1.039a1 1 0 1 1 1.414 1.414 9.7 9.7 0 0 1-2.524 1.82l-.735.367a1 1 0 0 1-.788.046l-.107-.046-.735-.367a9.7 9.7 0 0 1-2.525-1.82 1 1 0 1 1 1.414-1.414c.393.393.827.74 1.293 1.039V9a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.512 1a8 8 0 0 1 7.756 6.041A7 7 0 0 1 24.512 14c0 2.985-1.89 5.961-4.667 6.942a21.98 21.98 0 0 1-14.666 0C2.403 19.962.512 16.985.512 14a6.98 6.98 0 0 1 2.001-4.898V9a8 8 0 0 1 8-8m0 2a6 6 0 0 0-5.984 6.44 1 1 0 0 1-.333.819A4.99 4.99 0 0 0 2.512 14c0 2.24 1.449 4.39 3.333 5.057a19.98 19.98 0 0 0 13.334 0c1.884-.666 3.333-2.817 3.333-5.057a5 5 0 0 0-5-5h-.06a1 1 0 0 1-1-.858A6 6 0 0 0 10.512 3\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function CloudDownloadStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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