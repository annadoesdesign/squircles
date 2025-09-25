import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 6a1 1 0 0 1 1 1v4.015h4a1 1 0 0 1 0 2h-4V17a1 1 0 0 1-2 0v-3.985h-4a1 1 0 0 1 0-2h4V7a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512.015c.482 0 .93.228 1.265.574a7.97 7.97 0 0 0 6.948 2.333l.393-.07c.816-.168 1.724.004 2.116.74.972 1.822 1.278 4.51 1.278 8.423 0 9.018-9.76 11.53-11.676 11.936l-.162.026a1.6 1.6 0 0 1-.486-.026C10.272 23.545.512 21.033.512 12.015c0-3.913.307-6.6 1.279-8.423.392-.736 1.3-.908 2.116-.74a7.965 7.965 0 0 0 7.06-1.99l.28-.273c.336-.346.783-.574 1.265-.574m0 2.133a9.96 9.96 0 0 1-9.008 2.663l-.08-.013c-.622 1.358-.912 3.54-.912 7.217 0 3.646 1.922 5.979 4.238 7.54 2.289 1.543 4.822 2.212 5.762 2.419.94-.207 3.473-.876 5.763-2.42 2.316-1.56 4.237-3.893 4.237-7.54 0-3.677-.291-5.858-.913-7.216l-.079.013a9.966 9.966 0 0 1-9.009-2.662\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function HealthBadgeStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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