import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.512 15c.834 0 1 .167 1 1s-.166 1-1 1c-.833 0-1-.167-1-1s.167-1 1-1M18.512 15c.834 0 1 .167 1 1s-.166 1-1 1c-.833 0-1-.167-1-1s.167-1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.512 7c.834 0 1 .167 1 1s-.166 1-1 1c-.833 0-1-.167-1-1s.167-1 1-1M18.512 7c.834 0 1 .167 1 1s-.166 1-1 1c-.833 0-1-.167-1-1s.167-1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c10 0 12 1.667 12 10s-2 10-12 10-12-1.667-12-10 2-10 12-10m0 2c-2.467 0-4.325.105-5.74.36-1.41.253-2.222.628-2.73 1.051-.96.8-1.53 2.368-1.53 6.589s.57 5.788 1.53 6.589c.508.423 1.32.798 2.73 1.052 1.415.254 3.273.359 5.74.359s4.325-.105 5.74-.36c1.411-.253 2.222-.628 2.73-1.051.96-.8 1.53-2.368 1.53-6.589s-.57-5.788-1.53-6.589c-.508-.423-1.319-.798-2.73-1.052C16.837 4.105 14.98 4 12.512 4\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function CurrencyMoneyDollarBillStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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