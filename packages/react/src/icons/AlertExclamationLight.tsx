import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 16c.625 0 .75.125.75.75s-.125.75-.75.75-.75-.125-.75-.75.125-.75.75-.75M12.512 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 1 1-1.5 0V7a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 1c8.304 0 14.587 15.583 10.94 19.25l-.178.169c-3.858 3.441-17.665 3.441-21.523 0l-.18-.169C-2.074 16.583 4.209 1 12.513 1m0 1.5c-1.59 0-3.199.747-4.726 2.111-1.524 1.362-2.868 3.255-3.881 5.304-1.014 2.05-1.654 4.17-1.838 5.936-.195 1.867.155 2.925.568 3.341.61.614 1.87 1.221 3.727 1.66 1.802.427 3.962.648 6.15.648s4.349-.221 6.15-.648c1.858-.439 3.117-1.046 3.727-1.66.414-.416.763-1.474.569-3.341-.184-1.767-.825-3.886-1.838-5.936s-2.357-3.942-3.881-5.304C15.71 3.247 14.102 2.5 12.512 2.5\" clip-rule=\"evenodd\"/>",
} as const;

export default function AlertExclamationLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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