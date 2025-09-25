import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M168.531 219.726c-3.534 4.712-10.215 5.669-14.927 2.136A283 283 0 0 1 80.75 141.08l-4.563-7.593a10.67 10.67 0 0 1 0-10.98l4.563-7.593a282.9 282.9 0 0 1 72.854-80.782c4.712-3.533 11.393-2.576 14.927 2.136 3.533 4.713 2.577 11.393-2.136 14.927a261.6 261.6 0 0 0-67.354 74.687l-1.26 2.115 1.26 2.115a261.6 261.6 0 0 0 67.354 74.687c4.713 3.534 5.669 10.214 2.136 14.927\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M168.532 219.726c-3.534 4.712-10.215 5.669-14.927 2.136a283 283 0 0 1-72.854-80.782l-4.563-7.593a10.67 10.67 0 0 1 0-10.98l4.563-7.593a282.9 282.9 0 0 1 72.854-80.782c4.712-3.533 11.393-2.576 14.927 2.136 3.533 4.713 2.577 11.393-2.136 14.927a261.6 261.6 0 0 0-67.354 74.687l-1.26 2.115 1.26 2.115a261.6 261.6 0 0 0 67.354 74.687c4.713 3.534 5.669 10.214 2.136 14.927\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M166.396 218.133c-2.651 3.531-7.664 4.243-11.198 1.593a280.3 280.3 0 0 1-72.166-80.01l-4.563-7.604a8 8 0 0 1 0-8.229l4.563-7.605a280.3 280.3 0 0 1 72.166-80.01c3.534-2.65 8.547-1.938 11.198 1.594a8 8 0 0 1-1.593 11.198 264.3 264.3 0 0 0-68.052 75.448l-2.084 3.489 2.084 3.49a264.3 264.3 0 0 0 68.052 75.448 8 8 0 0 1 1.593 11.198\"/>",
} as const;

export default function ArrowChevronLeft(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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