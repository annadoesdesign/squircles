import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m3.707 7.293a1 1 0 1 0-1.414 1.414l.42.419A12.8 12.8 0 0 1 16.768 11H6.512a1 1 0 0 0 0 2H16.77c-.454.671-.97 1.3-1.545 1.874l-.419.419a1 1 0 1 0 1.414 1.414l.42-.419a14.8 14.8 0 0 0 2.768-3.84 1 1 0 0 0 .046-.787l-.046-.108a14.8 14.8 0 0 0-2.769-3.841z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowRightSquircleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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