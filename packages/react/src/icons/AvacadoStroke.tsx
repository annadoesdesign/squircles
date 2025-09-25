import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 10a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c4.622 0 7 3.222 7.74 7.668A9.96 9.96 0 0 1 22.512 14c0 8-2.222 10-10 10s-10-2-10-10a9.96 9.96 0 0 1 2.259-6.332C5.511 3.222 7.891 0 12.512 0m0 2c-1.794 0-3 .602-3.861 1.528-.911.98-1.577 2.483-1.907 4.47a2 2 0 0 1-.426.938A7.96 7.96 0 0 0 4.512 14c0 3.977.594 5.7 1.485 6.573.9.884 2.63 1.427 6.515 1.427s5.616-.543 6.516-1.427c.89-.874 1.484-2.596 1.484-6.573a7.96 7.96 0 0 0-1.806-5.064 2 2 0 0 1-.426-.939c-.331-1.986-.997-3.488-1.907-4.469C15.513 2.602 14.307 2 12.513 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function AvacadoStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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