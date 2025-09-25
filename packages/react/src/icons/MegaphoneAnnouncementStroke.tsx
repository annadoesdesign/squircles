import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M17.843.505a4.66 4.66 0 0 1 5.74 3.468c.941 4.138.941 8.436 0 12.575l-.06.238a4.66 4.66 0 0 1-5.441 3.286l-.24-.057-.312-.083c-1.466-.39-2.9-.892-4.29-1.498l-.594-.265-2.134-.986v.077c0 5.834 1.25 7-2.5 7s-4.5-1.166-4.5-7q.001-.727.02-1.36.09.021.179.041a12 12 0 0 1-.57-.148l-.458-.142a2.13 2.13 0 0 1-1.413-1.602l-.1-.499a16.8 16.8 0 0 1-.075-6.171l.076-.409.1-.499A2.13 2.13 0 0 1 2.682 4.87a11.9 11.9 0 0 1 3.279-.6l.478-.01h2.04l.062-.013 4.104-1.895A30.3 30.3 0 0 1 17.53.588zM5.52 16.225q-.009.482-.008 1.035c0 1.434.047 2.49.157 3.28.111.803.266 1.167.369 1.327.047.074.165.393 1.974.393.304 0 .532-.013.698-.025a24 24 0 0 0-.058-1.294c-.058-.926-.14-2.151-.14-3.68q0-.52.01-.992a.1.1 0 0 0-.043-.009H6.44l-.478-.01q-.267-.011-.532-.035.045.006.091.01M21.634 4.417a2.66 2.66 0 0 0-3.277-1.979l-.311.083a28.3 28.3 0 0 0-4.562 1.648l-3.01 1.388a24.5 24.5 0 0 0 0 9.406l3.01 1.39c1.47.678 2.997 1.23 4.562 1.647l.311.083a2.66 2.66 0 0 0 3.277-1.979 26.4 26.4 0 0 0 0-11.687M6.44 6.26a9.9 9.9 0 0 0-3.124.507.13.13 0 0 0-.085.096l-.1.5a14.8 14.8 0 0 0 0 5.795l.1.5c.01.045.042.081.085.096a9.9 9.9 0 0 0 3.124.506h1.882a26.5 26.5 0 0 1 0-8z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function MegaphoneAnnouncementStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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