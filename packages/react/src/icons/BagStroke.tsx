import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c3.554 0 5.084.843 5.673 4.322 5.137.79 6.327 3.249 6.327 9.678 0 8.333-2 10-12 10s-12-1.667-12-10c0-6.428 1.19-8.888 6.324-9.678C7.426.842 8.958 0 12.512 0m9.898 11.33a17 17 0 0 1-3.898 2.085V14a1 1 0 0 1-1.999.03 17.05 17.05 0 0 1-8.003 0A.999.999 0 0 1 6.512 14v-.585a17 17 0 0 1-3.898-2.085A30 30 0 0 0 2.512 14c0 4.221.57 5.788 1.53 6.589.508.423 1.32.798 2.73 1.052 1.415.254 3.273.359 5.74.359s4.325-.105 5.74-.36c1.411-.253 2.222-.628 2.73-1.051.96-.8 1.53-2.368 1.53-6.589 0-1.042-.035-1.923-.102-2.67M12.512 6c-2.467 0-4.325.105-5.74.36-1.41.253-2.222.628-2.73 1.051-.431.36-.783.875-1.04 1.717q.07.039.135.09a15 15 0 0 0 3.375 2.037V11a1 1 0 1 1 2 0v.962c2.616.722 5.384.722 8 0V11a1 1 0 1 1 2 0v.255a15 15 0 0 0 3.375-2.036q.065-.052.135-.091c-.258-.841-.608-1.357-1.04-1.717-.508-.423-1.319-.798-2.73-1.052C16.837 6.105 14.98 6 12.512 6m0-4c-2.394 0-2.873.426-3.16.904-.152.253-.303.63-.435 1.199l-.185.013A53 53 0 0 1 12.512 4c1.392 0 2.628.034 3.726.112l-.133-.01c-.131-.568-.281-.945-.433-1.198-.287-.478-.766-.904-3.16-.904\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function BagStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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