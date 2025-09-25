import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.762 15.25c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M19.262 15.25c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.762 7.25c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M19.262 7.25c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c10 0 12 1.667 12 10s-2 10-12 10-12-1.667-12-10 2-10 12-10m0 1.5c-2.475 0-4.368.105-5.828.367-1.457.262-2.362.66-2.962 1.16-1.158.965-1.71 2.766-1.71 6.973s.552 6.008 1.71 6.973c.6.5 1.505.898 2.962 1.16 1.46.262 3.353.367 5.828.367s4.369-.105 5.828-.367c1.457-.262 2.363-.66 2.962-1.16 1.158-.965 1.71-2.766 1.71-6.973s-.552-6.008-1.71-6.973c-.6-.5-1.505-.898-2.962-1.16-1.46-.262-3.352-.367-5.828-.367\" clip-rule=\"evenodd\"/>",
} as const;

export default function CurrencyMoneyDollarBillLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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