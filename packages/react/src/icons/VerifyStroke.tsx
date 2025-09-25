import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.913 7.2a1 1 0 1 1 1.199 1.6 24.5 24.5 0 0 0-6.315 7.002l-.427.713a1 1 0 0 1-1.565.192l-3-3a1 1 0 0 1 1.414-1.414l2.098 2.098a26.5 26.5 0 0 1 6.596-7.19\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c1.477 0 2.952.486 4.07 2.17 1.984-.4 3.371.3 4.416 1.345 1.044 1.044 1.743 2.43 1.342 4.414 1.686 1.119 2.172 2.594 2.172 4.071s-.486 2.951-2.172 4.07c.401 1.983-.298 3.37-1.342 4.414-1.045 1.045-2.431 1.744-4.414 1.343C15.464 23.513 13.99 24 12.512 24c-1.477 0-2.953-.486-4.072-2.173-1.983.4-3.369-.298-4.413-1.342s-1.745-2.431-1.344-4.415C.998 14.951.513 13.477.513 12s.485-2.952 2.17-4.071c-.4-1.983.3-3.37 1.344-4.414C5.07 2.47 6.457 1.77 8.44 2.17 9.56.486 11.035 0 12.512 0m0 2c-.95 0-1.73.26-2.405 1.277a2 2 0 0 1-2.062.854c-1.196-.242-1.932.125-2.604.798-.672.672-1.04 1.407-.798 2.603a2 2 0 0 1-.853 2.063c-.89.59-1.201 1.261-1.265 2.056L2.512 12c0 .95.26 1.729 1.278 2.404a2 2 0 0 1 .853 2.063c-.242 1.196.126 1.932.798 2.604.67.671 1.406 1.037 2.603.795l.15-.023a2 2 0 0 1 1.913.879C10.782 21.739 11.56 22 12.512 22s1.73-.26 2.406-1.278l.087-.123a2 2 0 0 1 1.975-.732c1.197.242 1.932-.125 2.604-.797.671-.672 1.038-1.406.796-2.603a2 2 0 0 1 .854-2.063c1.018-.675 1.278-1.454 1.278-2.404s-.26-1.73-1.278-2.405a2 2 0 0 1-.854-2.063c.242-1.197-.125-1.931-.796-2.603-.673-.673-1.408-1.04-2.605-.798a2 2 0 0 1-2.062-.854C14.24 2.26 13.462 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function VerifyStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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