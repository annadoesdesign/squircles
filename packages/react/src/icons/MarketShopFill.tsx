import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M23.48 14.439c-.234 6.892-1.926 9.032-7.992 9.468-.15-4.846-.823-5.906-2.976-5.906s-2.829 1.06-2.979 5.906c-6.028-.434-7.736-2.551-7.986-9.346 1.083.623 2.406.939 3.913.939a7 7 0 0 0 3.472-.919 7 7 0 0 0 3.482.919 7 7 0 0 0 3.48-.919 7 7 0 0 0 3.473.919c1.601 0 2.994-.358 4.113-1.062M12.414 0a27 27 0 0 1 2.234.094Q15.2.14 15.736.21c1.787.234 3.428.664 4.678 1.289.707.354 1.373.958 1.948 1.713a9 9 0 0 1 .433.624q.245.387.459.807c1.167 2.302 1.539 5.222.252 7.066-.754 1.08-2.075 1.79-4.139 1.79l-.252-.006a4.98 4.98 0 0 1-3.217-1.389 5 5 0 0 1-3.22 1.388l-.012.001a5 5 0 0 1-.253.005l-.252-.005a5 5 0 0 1-.498-.05q-.08-.011-.157-.026a5 5 0 0 1-2.576-1.312A4.97 4.97 0 0 1 5.46 13.5c-1.873 0-3.133-.586-3.914-1.501C.03 10.222.329 7.201 1.496 4.798q.207-.425.447-.82C2.62 2.87 3.481 1.968 4.414 1.5c2-1 5-1.5 8-1.5\"/>",
  regular: "",
  light: "",
} as const;

export default function MarketShopFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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