import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.302 15.002c5.599.014 5.216.123 5.216.998l.005.33c-.02.67-.568.67-8.005.67l-2.784-.002c-4.8-.012-5.203-.094-5.22-.668l.004-.33c0-1-.5-1 8-1zM6.012 11c1.25 0 1.5.167 1.5 1s-.25 1-1.5 1-1.5-.167-1.5-1 .25-1 1.5-1M10.512 11c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1M14.512 11c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1M18.512 11c.834 0 1 .167 1 1s-.166 1-1 1c-.833 0-1-.167-1-1s.167-1 1-1M5.512 7c.834 0 1 .167 1 1s-.166 1-1 1c-.833 0-1-.167-1-1s.167-1 1-1M9.512 7c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1M13.512 7c.833 0 1 .167 1 1s-.167 1-1 1-1-.167-1-1 .167-1 1-1M18.012 7c1.25 0 1.5.167 1.5 1s-.25 1-1.5 1-1.5-.167-1.5-1 .25-1 1.5-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c10 0 12 1.667 12 10l-.006.762C24.38 20.436 22.2 22 12.512 22l-.914-.005C2.686 21.893.641 20.188.518 12.762L.512 12c0-8.333 2-10 12-10m0 2c-2.467 0-4.325.105-5.74.36-1.41.253-2.222.628-2.73 1.051-.96.8-1.53 2.368-1.53 6.589s.57 5.788 1.53 6.589c.508.423 1.32.798 2.73 1.052 1.415.254 3.273.359 5.74.359s4.325-.105 5.74-.36c1.411-.253 2.222-.628 2.73-1.051.96-.8 1.53-2.368 1.53-6.589s-.57-5.788-1.53-6.589c-.508-.423-1.319-.798-2.73-1.052C16.837 4.105 14.98 4 12.512 4\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function KeyboardStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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