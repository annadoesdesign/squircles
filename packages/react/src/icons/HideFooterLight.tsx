import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 5.25a.75.75 0 0 1 .75.75v5.627a5.95 5.95 0 0 0 1.58-1.962.75.75 0 0 1 1.341.67 7.46 7.46 0 0 1-3.336 3.336l-.024.01a.8.8 0 0 1-.197.06q-.016.001-.033.004a1 1 0 0 1-.08.005l-.078-.004h-.005l-.032-.006a.7.7 0 0 1-.157-.043l-.04-.016-.024-.01a7.46 7.46 0 0 1-3.336-3.336.75.75 0 0 1 1.342-.67 5.95 5.95 0 0 0 1.58 1.962V6a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m9.81 18.734a99.8 99.8 0 0 0-19.62 0c.288.883.665 1.5 1.12 1.955.606.606 1.495 1.07 2.913 1.376 1.435.31 3.307.435 5.777.435s4.343-.125 5.778-.435c1.418-.305 2.306-.77 2.912-1.376.456-.456.831-1.072 1.12-1.955M12.512 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777 0 2.188.099 3.907.336 5.269a1 1 0 0 1 .09-.015c6.7-.67 13.449-.67 20.148 0a1 1 0 0 1 .09.015c.237-1.362.336-3.08.336-5.269 0-2.47-.125-4.342-.434-5.777-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function HideFooterLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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