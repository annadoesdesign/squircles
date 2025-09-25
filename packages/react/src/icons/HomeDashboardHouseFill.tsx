import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 0c3.795 0 8.742 5.185 10.907 7.684.727.84 1.093 1.919 1.093 3.03V16c0 6.037-1.452 6.865-8.071 6.979.05-.773.071-1.668.071-2.706 0-6.06-.667-7.273-4-7.273s-4 1.212-4 7.273c0 1.038.022 1.933.072 2.706C1.964 22.865.512 22.037.512 16v-5.285c0-1.112.366-2.19 1.094-3.031C3.77 5.184 8.717 0 12.512 0\"/>",
  regular: "",
  light: "",
} as const;

export default function HomeDashboardHouseFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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