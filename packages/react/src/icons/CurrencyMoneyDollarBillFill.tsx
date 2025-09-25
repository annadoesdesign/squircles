import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 2c10 0 12 1.667 12 10s-2 10-12 10-12-1.667-12-10 2-10 12-10m-7 14c-.833 0-1 .167-1 1s.167 1 1 1c.834 0 1-.167 1-1s-.166-1-1-1m14 0c-.833 0-1 .167-1 1s.167 1 1 1c.834 0 1-.167 1-1s-.166-1-1-1m-7-8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-7-2c-.833 0-1 .167-1 1s.167 1 1 1c.834 0 1-.167 1-1s-.166-1-1-1m14 0c-.833 0-1 .167-1 1s.167 1 1 1c.834 0 1-.167 1-1s-.166-1-1-1\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function CurrencyMoneyDollarBillFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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