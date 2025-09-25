import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 9.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c4.622 0 7 3.222 7.74 7.668A9.96 9.96 0 0 1 22.512 14c0 8-2.222 10-10 10s-10-2-10-10a9.96 9.96 0 0 1 2.259-6.332C5.511 3.222 7.891 0 12.512 0m0 1.5c-1.923 0-3.266.653-4.227 1.688-1 1.075-1.694 2.681-2.035 4.726a1.5 1.5 0 0 1-.319.704A8.46 8.46 0 0 0 4.012 14c0 3.982.585 5.9 1.634 6.93 1.057 1.037 2.98 1.57 6.866 1.57s5.81-.533 6.866-1.57c1.05-1.03 1.634-2.948 1.634-6.93a8.46 8.46 0 0 0-1.92-5.382 1.5 1.5 0 0 1-.32-.704c-.34-2.045-1.034-3.651-2.033-4.726-.962-1.035-2.303-1.688-4.227-1.688\" clip-rule=\"evenodd\"/>",
} as const;

export default function AvacadoLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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