import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0a7 7 0 0 1 6.418 4.204 5.002 5.002 0 0 1 .339 9.477l-5.9 9.834a1 1 0 0 1-1.714 0l-5.9-9.834a5 5 0 0 1 .338-9.477A7 7 0 0 1 12.513 0m3.599 13.8a5.97 5.97 0 0 1-3.599 1.2 5.97 5.97 0 0 1-3.6-1.2q-.325.094-.667.144l4.267 7.112 4.266-7.112a5 5 0 0 1-.667-.144\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function IceCreamTreatFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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