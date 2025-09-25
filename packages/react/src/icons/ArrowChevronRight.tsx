import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M87.47 219.726c3.534 4.712 10.214 5.669 14.926 2.136a283 283 0 0 0 72.855-80.782l4.562-7.593a10.67 10.67 0 0 0 0-10.98l-4.562-7.593a282.9 282.9 0 0 0-72.855-80.782c-4.712-3.533-11.392-2.576-14.927 2.136-3.533 4.713-2.576 11.393 2.136 14.927a261.6 261.6 0 0 1 67.354 74.687l1.26 2.115-1.26 2.115a261.6 261.6 0 0 1-67.354 74.687c-4.713 3.534-5.669 10.214-2.136 14.927\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M87.468 219.726c3.535 4.712 10.215 5.669 14.927 2.136a283 283 0 0 0 72.855-80.782l4.562-7.593a10.67 10.67 0 0 0 0-10.98l-4.562-7.593a282.9 282.9 0 0 0-72.855-80.782c-4.712-3.533-11.392-2.576-14.927 2.136-3.533 4.713-2.577 11.393 2.136 14.927a261.6 261.6 0 0 1 67.354 74.687l1.26 2.115-1.26 2.115a261.6 261.6 0 0 1-67.354 74.687c-4.713 3.534-5.669 10.214-2.136 14.927\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M89.605 218.133a8 8 0 0 0 11.197 1.594 280.3 280.3 0 0 0 72.167-80.011l4.563-7.604a8.01 8.01 0 0 0 0-8.229l-4.563-7.604a280.3 280.3 0 0 0-72.167-80.01 8 8 0 0 0-11.198 1.593 8 8 0 0 0 1.594 11.198 264.3 264.3 0 0 1 68.052 75.448l2.084 3.489-2.084 3.49a264.3 264.3 0 0 1-68.052 75.448 8 8 0 0 0-1.593 11.198\"/>",
} as const;

export default function ArrowChevronRight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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