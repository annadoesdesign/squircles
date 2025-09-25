import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.212 21c-.337 2.43-1.333 3-3.85 3l-.593-.013C9.686 23.893 8.825 23.23 8.515 21H5.512a5 5 0 0 1-2.877-9.09A29 29 0 0 1 2.512 9c0-7.5 1.667-9 10-9s10 1.5 10 9c0 1.093-.038 2.058-.124 2.91A5 5 0 0 1 19.512 21zm-5.675 0c.088.49.192.694.24.766.01.016.013.046.17.096.23.075.647.138 1.416.138.77 0 1.186-.063 1.416-.138.157-.05.159-.08.17-.096.048-.072.151-.277.24-.766zm1.975-19c-2.048 0-3.561.094-4.697.314-1.125.219-1.727.533-2.09.86-.722.65-1.213 2-1.213 5.826 0 1.052.036 1.946.113 2.709a2 2 0 0 1-.837 1.836A3 3 0 0 0 5.513 19h14a3 3 0 0 0 1.724-5.455 2 2 0 0 1-.84-1.836c.059-.573.095-1.22.108-1.95L20.512 9c0-3.827-.49-5.176-1.213-5.826-.363-.327-.965-.641-2.09-.86C16.074 2.094 14.56 2 12.513 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function BellNotificationChimeAlertStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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