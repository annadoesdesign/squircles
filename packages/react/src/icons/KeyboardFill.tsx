import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 2c10 0 12 1.667 12 10s-2 10-12 10-12-1.667-12-10 2-10 12-10m0 13c-8.494 0-7.994 0-7.994 1l-.005.33c.018.574.421.656 5.217.668l2.782.002c8.494 0 7.994 0 7.994-1 0-.875.383-.984-5.212-.998zm-6.5-5c-1.25 0-1.5.167-1.5 1s.25 1 1.5 1 1.5-.167 1.5-1-.25-1-1.5-1m4.5 0c-.833 0-1 .167-1 1s.167 1 1 1 1-.167 1-1-.167-1-1-1m4 0c-.833 0-1 .167-1 1s.167 1 1 1 1-.167 1-1-.167-1-1-1m4 0c-.833 0-1 .167-1 1s.167 1 1 1c.834 0 1-.167 1-1s-.166-1-1-1m-12-4c-.833 0-1 .167-1 1s.167 1 1 1c.834 0 1-.167 1-1s-.166-1-1-1m4 0c-.833 0-1 .167-1 1s.167 1 1 1 1-.167 1-1-.167-1-1-1m4 0c-.833 0-1 .167-1 1s.167 1 1 1 1-.167 1-1-.167-1-1-1m4.5 0c-1.25 0-1.5.167-1.5 1s.25 1 1.5 1 1.5-.167 1.5-1-.25-1-1.5-1\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function KeyboardFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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