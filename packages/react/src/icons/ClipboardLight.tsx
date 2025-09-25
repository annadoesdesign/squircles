import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.512 15a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zM16.512 11a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.552.009c4.448.077 5.72.719 5.927 3.134l.22.132c2.225 1.423 2.813 4.28 2.813 9.725l-.005.838C22.402 22.279 20.585 24 12.512 24l-.761-.006C4.076 23.878 2.512 21.88 2.512 13c0-5.62.627-8.484 3.032-9.858C5.768.549 7.22 0 12.512 0zm5.911 4.999C19.197 7.472 17.703 8 12.513 8l-1.04-.008C7.117 7.917 5.806 7.3 5.558 5.008l-.061.063c-.48.528-.867 1.326-1.123 2.632-.258 1.316-.363 3.033-.363 5.297s.105 3.982.363 5.297c.256 1.306.643 2.104 1.123 2.632.961 1.057 2.789 1.571 7.014 1.571 4.226 0 6.053-.514 7.015-1.571.48-.528.867-1.326 1.123-2.632.258-1.315.362-3.033.362-5.297s-.104-3.981-.362-5.297c-.256-1.306-.643-2.104-1.123-2.632zM12.513 1.5c-1.443 0-2.536.041-3.372.145-.849.104-1.313.26-1.572.408-.2.114-.3.233-.38.445-.104.276-.177.727-.177 1.502s.073 1.226.177 1.502c.08.212.18.33.38.445.259.148.723.304 1.572.408.836.104 1.93.145 3.371.145s2.535-.041 3.371-.145c.85-.104 1.314-.26 1.573-.408.2-.114.3-.233.38-.445.104-.276.176-.727.176-1.502s-.072-1.226-.177-1.502a.77.77 0 0 0-.38-.445c-.258-.148-.723-.304-1.572-.408-.836-.104-1.929-.145-3.37-.145\" clip-rule=\"evenodd\"/>",
} as const;

export default function ClipboardLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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