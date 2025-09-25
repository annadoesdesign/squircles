import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 24c-1.514 0-2.844-.047-4.012-.16l-.001-.004a72 72 0 0 1 0-23.672V.16C9.669.048 11 0 12.513 0c10 0 12 2 12 12s-2 12-12 12m2.553-8.105a1 1 0 0 0 .895-1.79A5.7 5.7 0 0 1 14.444 13h5.068a1 1 0 1 0 0-2h-5.068a5.7 5.7 0 0 1 1.515-1.105 1 1 0 0 0-.894-1.79 7.7 7.7 0 0 0-3.447 3.448l-.007.017a1 1 0 0 0-.035.082l-.007.019a1.02 1.02 0 0 0 0 .661l.007.017q.015.042.035.082l.007.016a7.7 7.7 0 0 0 3.447 3.448\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M6.424 23.533C1.638 22.503.512 19.503.512 12S1.638 1.498 6.424.468a74 74 0 0 0 0 23.065\"/>",
  regular: "",
  light: "",
} as const;

export default function HideSidePanelFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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