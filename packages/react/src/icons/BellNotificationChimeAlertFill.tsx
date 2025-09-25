import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M16.212 21c-.337 2.43-1.333 3-3.85 3l-.593-.013C9.686 23.893 8.825 23.23 8.515 21H5.512a5 5 0 0 1-2.877-9.09A29 29 0 0 1 2.512 9c0-7.5 1.667-9 10-9s10 1.5 10 9c0 1.093-.038 2.058-.124 2.91A5 5 0 0 1 19.512 21zm-5.675 0c.088.49.192.694.24.766.01.016.013.046.17.096.23.075.647.138 1.416.138.77 0 1.186-.063 1.416-.138.157-.05.159-.08.17-.096.048-.072.151-.277.24-.766z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function BellNotificationChimeAlertFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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