import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 16a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5zM16.512 12a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M17.512.25a.75.75 0 0 1 .75.75v.385c5.071.922 6.25 3.759 6.25 11.115 0 9.583-2 11.5-12 11.5s-12-1.917-12-11.5c0-7.356 1.18-10.193 6.25-11.115V1a.75.75 0 0 1 1.5 0v.176C9.487 1.05 10.895 1 12.512 1c1.618 0 3.026.051 4.25.176V1a.75.75 0 0 1 .75-.75m5.42 9.454c-6.926-.601-13.914-.6-20.84-.002-.054.83-.08 1.757-.08 2.798 0 2.365.126 4.148.433 5.51.302 1.342.758 2.178 1.355 2.75.603.579 1.494 1.027 2.922 1.322 1.441.298 3.319.418 5.79.418s4.35-.12 5.79-.418c1.428-.295 2.319-.743 2.922-1.321.598-.573 1.054-1.409 1.356-2.75.306-1.363.432-3.146.432-5.511 0-1.04-.027-1.967-.08-2.796M12.512 2.5c-1.672 0-3.073.057-4.25.185V4a.75.75 0 0 1-1.5 0V2.91l-.04.008c-1.428.295-2.319.743-2.922 1.321-.597.573-1.053 1.409-1.355 2.75a14 14 0 0 0-.21 1.196c6.833-.575 13.72-.576 20.553.002q-.086-.647-.208-1.198c-.302-1.341-.758-2.177-1.356-2.75-.603-.578-1.494-1.026-2.922-1.321l-.04-.008V4a.75.75 0 0 1-1.5 0V2.685c-1.177-.128-2.577-.185-4.25-.185\" clip-rule=\"evenodd\"/>",
} as const;

export default function CalendarLinesLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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