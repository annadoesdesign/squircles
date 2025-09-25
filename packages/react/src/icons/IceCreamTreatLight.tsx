import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0a7 7 0 0 1 6.418 4.204 5.002 5.002 0 0 1-.262 9.66l-.006.012-5.5 9.5a.75.75 0 0 1-1.3 0l-5.5-9.5-.006-.012a5 5 0 0 1-.263-9.66A7 7 0 0 1 12.513 0m3.599 13.8a5.97 5.97 0 0 1-3.599 1.2 5.97 5.97 0 0 1-3.6-1.2 5 5 0 0 1-.768.157l4.368 7.545 4.367-7.545a5 5 0 0 1-.768-.157M12.512 1.5a5.5 5.5 0 0 0-5.044 3.304 1.5 1.5 0 0 1-.95.839 3.5 3.5 0 0 0 1.975 6.717 1.5 1.5 0 0 1 1.321.24c.752.566 1.684.9 2.698.9a4.47 4.47 0 0 0 2.698-.9l.147-.097a1.5 1.5 0 0 1 1.174-.144 3.5 3.5 0 0 0 1.974-6.716 1.5 1.5 0 0 1-.95-.84A5.5 5.5 0 0 0 12.512 1.5\" clip-rule=\"evenodd\"/>",
} as const;

export default function IceCreamTreatLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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