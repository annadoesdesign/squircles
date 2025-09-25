import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.77 1.004c2.004-.048 3.983.32 5.209 1.545 1.228 1.228 1.586 3.212 1.527 5.216-.06 2.059-.566 4.4-1.35 6.625-.785 2.226-1.868 4.392-3.121 6.088-1.225 1.657-2.74 3.037-4.437 3.377-3.106.62-5.395-.845-6.83-2.344a11.8 11.8 0 0 1-1.963-2.783 11.407 11.407 0 0 1-2.8-1.922C1.49 15.378.03 13.089.662 9.926 1.008 8.202 2.387 6.673 4.05 5.44c1.7-1.26 3.867-2.34 6.094-3.117 2.226-.776 4.567-1.269 6.625-1.319m.048 2c-1.8.044-3.932.482-6.014 1.208-2.081.726-4.058 1.72-5.561 2.834-1.539 1.14-2.421 2.288-2.618 3.273-.452 2.255.54 3.89 1.751 5.032a9.4 9.4 0 0 0 1.752 1.287q.117.065.22.12L9.77 13.34a1 1 0 0 1 1.414 1.414l-3.411 3.41q.055.1.12.211a9.8 9.8 0 0 0 1.321 1.753c1.167 1.218 2.804 2.204 4.993 1.767.95-.19 2.081-1.063 3.22-2.605 1.11-1.502 2.109-3.481 2.843-5.564.735-2.084 1.185-4.217 1.238-6.019.055-1.856-.318-3.119-.942-3.743-.627-.627-1.893-1.004-3.747-.959\"/>",
  light: "",
} as const;

export default function EmailSendOutStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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