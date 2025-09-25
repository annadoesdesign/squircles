import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.044 11.164a.75.75 0 0 1 .937 1.172 18 18 0 0 0-4.03 4.526l-.803 1.286a.75.75 0 0 1-1.235.052l-.42-.557a9.8 9.8 0 0 0-2.397-2.269.75.75 0 1 1 .832-1.248 11.3 11.3 0 0 1 2.523 2.306l.228-.365a19.5 19.5 0 0 1 4.365-4.903\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M17.512 0a.75.75 0 0 1 .75.75v.385c5.071.922 6.25 3.759 6.25 11.115l-.006.876C24.38 21.951 22.2 23.75 12.512 23.75l-.914-.006C2.686 23.627.641 21.667.518 13.126l-.006-.876c0-7.356 1.18-10.193 6.25-11.115V.75a.75.75 0 1 1 1.5 0v.176C9.487.8 10.895.75 12.512.75c1.618 0 3.026.051 4.25.176V.75a.75.75 0 0 1 .75-.75m5.417 9.41a60.8 60.8 0 0 0-20.835 0 44 44 0 0 0-.082 2.84c0 2.365.126 4.148.433 5.51.302 1.342.758 2.178 1.355 2.75.603.579 1.494 1.027 2.922 1.322 1.441.298 3.319.418 5.79.418s4.35-.12 5.79-.418c1.428-.295 2.319-.743 2.922-1.321.598-.573 1.054-1.409 1.356-2.75.306-1.363.432-3.146.432-5.511 0-1.059-.027-2-.083-2.84M12.512 2.25c-1.672 0-3.073.057-4.25.185V3.75a.75.75 0 0 1-1.5 0V2.66l-.04.008c-1.428.295-2.319.743-2.922 1.321-.597.573-1.053 1.409-1.355 2.75q-.117.519-.2 1.122a62.2 62.2 0 0 1 20.534 0 14 14 0 0 0-.2-1.122c-.301-1.341-.757-2.177-1.355-2.75-.603-.578-1.494-1.026-2.922-1.321l-.04-.008v1.09a.75.75 0 0 1-1.5 0V2.435c-1.177-.128-2.577-.185-4.25-.185\" clip-rule=\"evenodd\"/>",
} as const;

export default function CalendarCheckLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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