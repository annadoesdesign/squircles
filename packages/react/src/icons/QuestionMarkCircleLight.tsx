import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 17.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M11.537 4.096a5 5 0 0 1 5.95 4.414 5 5 0 0 1-2.334 4.736 5 5 0 0 1-1.89.695V15a.75.75 0 0 1-1.5 0v-1.75a.75.75 0 0 1 .75-.75 3.5 3.5 0 0 0 3.483-3.843 3.502 3.502 0 0 0-5.876-2.212 3.5 3.5 0 0 0-.989 1.649.75.75 0 0 1-1.449-.388 5 5 0 0 1 3.855-3.61\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c6.628 0 12 5.373 12 12s-5.372 12-12 12c-6.627 0-12-5.373-12-12s5.373-12 12-12m0 1.5c-5.799 0-10.5 4.701-10.5 10.5s4.701 10.5 10.5 10.5 10.5-4.701 10.5-10.5-4.7-10.5-10.5-10.5\" clip-rule=\"evenodd\"/>",
} as const;

export default function QuestionMarkCircleLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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