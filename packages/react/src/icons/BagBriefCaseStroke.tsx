import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c3.554 0 5.084.843 5.673 4.322 5.137.79 6.327 3.249 6.327 9.678 0 8.333-2 10-12 10s-12-1.667-12-10c0-6.428 1.19-8.888 6.324-9.678C7.426.842 8.958 0 12.512 0M8.334 13.988c-.466 2.58-.415 5.23.155 7.795l.012.077c1.12.097 2.442.14 4.011.14 1.57 0 2.891-.043 4.01-.14l.014-.077c.57-2.565.62-5.214.153-7.795-2.74.693-5.615.693-8.355 0M22.41 11.33a17 17 0 0 1-3.8 2.047c.523 2.705.527 5.484.012 8.19 1.185-.25 1.898-.593 2.36-.978.96-.8 1.53-2.368 1.53-6.589 0-1.042-.035-1.923-.102-2.67m-19.796 0A30 30 0 0 0 2.512 14c0 4.221.57 5.788 1.53 6.589.462.384 1.175.727 2.36.977a21.7 21.7 0 0 1 .01-8.189 17 17 0 0 1-3.798-2.047M12.512 6c-2.467 0-4.325.105-5.74.36-1.41.253-2.222.628-2.73 1.051-.431.36-.783.875-1.04 1.717q.07.039.135.09a15.01 15.01 0 0 0 18.75 0q.065-.051.135-.09c-.258-.841-.608-1.357-1.04-1.717-.508-.423-1.319-.798-2.73-1.052C16.837 6.105 14.98 6 12.512 6m0-4c-2.394 0-2.873.426-3.16.904-.152.253-.303.63-.435 1.199l-.185.013A53 53 0 0 1 12.512 4c1.392 0 2.628.034 3.726.112l-.133-.01c-.131-.568-.281-.945-.433-1.198-.287-.478-.766-.904-3.16-.904\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function BagBriefCaseStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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