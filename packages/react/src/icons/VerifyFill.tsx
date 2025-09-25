import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c1.477 0 2.952.486 4.07 2.17 1.984-.4 3.371.3 4.416 1.345 1.044 1.044 1.743 2.43 1.342 4.414 1.686 1.119 2.172 2.594 2.172 4.071s-.486 2.951-2.172 4.07c.401 1.983-.298 3.37-1.342 4.414-1.045 1.045-2.431 1.744-4.414 1.343C15.464 23.513 13.99 24 12.512 24c-1.477 0-2.953-.486-4.072-2.173-1.983.4-3.369-.298-4.413-1.342s-1.745-2.431-1.344-4.415C.998 14.951.513 13.477.513 12s.485-2.952 2.17-4.071c-.4-1.983.3-3.37 1.344-4.414C5.07 2.47 6.457 1.77 8.44 2.17 9.56.486 11.035 0 12.512 0m5.8 7.4a1 1 0 0 0-1.4-.2 26.5 26.5 0 0 0-6.595 7.19l-2.098-2.097a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.565-.192l.427-.713A24.5 24.5 0 0 1 18.112 8.8a1 1 0 0 0 .2-1.4\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function VerifyFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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