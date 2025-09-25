import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M17.843.505a4.66 4.66 0 0 1 5.74 3.468c.941 4.138.941 8.436 0 12.575l-.06.238a4.66 4.66 0 0 1-5.441 3.286l-.24-.057-.312-.083c-1.466-.39-2.9-.892-4.29-1.498l-.594-.265-2.134-.986v.077c0 5.834 1.25 7-2.5 7s-4.5-1.166-4.5-7q.001-.727.02-1.36.736.187 1.491.277-.01.506-.01 1.083c0 1.44.046 2.524.16 3.349.116.834.286 1.28.445 1.527.2.31.566.624 2.395.624.437 0 .754-.018.986-.049q.118-.016.192-.034c.04-.316.02-.82-.039-1.767-.058-.927-.14-2.138-.14-3.65q.001-.397.01-.765l-.48-.221a.2.2 0 0 0-.062-.014H6.44l-.478-.01a12 12 0 0 1-2.822-.457l-.457-.142a2.13 2.13 0 0 1-1.413-1.602l-.1-.499a16.8 16.8 0 0 1-.075-6.171l.076-.409.1-.499A2.13 2.13 0 0 1 2.682 4.87a11.9 11.9 0 0 1 3.279-.6l.478-.01h2.04l.062-.013 4.104-1.895A30.3 30.3 0 0 1 17.53.588zm4.278 3.801a3.16 3.16 0 0 0-3.893-2.351l-.311.084a29 29 0 0 0-4.642 1.675l-3.11 1.435a32.9 32.9 0 0 0 .004 10.224l3.106 1.433c1.496.69 3.05 1.251 4.642 1.676l.311.084a3.16 3.16 0 0 0 3.893-2.351c.89-3.92.89-7.99 0-11.909M8.48 5.76H6.44c-1.116 0-2.225.18-3.283.533a.63.63 0 0 0-.417.472l-.1.5a15.3 15.3 0 0 0 0 5.992l.1.498c.044.221.203.402.417.473 1.058.353 2.167.532 3.282.532h2.04q.042.001.084.004a34.4 34.4 0 0 1-.003-9.009q-.04.004-.08.005\" clip-rule=\"evenodd\"/>",
} as const;

export default function MegaphoneAnnouncementLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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