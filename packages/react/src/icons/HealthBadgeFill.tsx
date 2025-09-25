import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512.015c.482 0 .93.228 1.265.574a7.97 7.97 0 0 0 7.34 2.263c.817-.168 1.725.004 2.117.74.972 1.822 1.278 4.51 1.278 8.423 0 9.018-9.76 11.53-11.676 11.936a1.55 1.55 0 0 1-.648 0C10.272 23.545.512 21.033.512 12.015c0-3.913.307-6.6 1.279-8.423.392-.736 1.3-.908 2.116-.74a7.972 7.972 0 0 0 7.34-2.263c.336-.346.783-.574 1.265-.574m0 5.985a1 1 0 0 0-1 1v4.015h-4a1 1 0 0 0 0 2h4V17a1 1 0 0 0 2 0v-3.985h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function HealthBadgeFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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