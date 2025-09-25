import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M219.729 179.197c4.712-3.534 5.669-10.214 2.135-14.927a282.9 282.9 0 0 0-80.781-72.854l-7.594-4.563a10.67 10.67 0 0 0-10.979 0l-7.593 4.563a282.9 282.9 0 0 0-80.782 72.854c-3.533 4.713-2.576 11.393 2.136 14.927s11.393 2.577 14.927-2.135a261.6 261.6 0 0 1 74.687-67.355l2.115-1.26 2.114 1.26a261.6 261.6 0 0 1 74.688 67.355c3.534 4.712 10.214 5.668 14.927 2.135\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M219.73 179.197c4.712-3.534 5.669-10.214 2.135-14.927a282.9 282.9 0 0 0-80.781-72.854l-7.594-4.563a10.67 10.67 0 0 0-10.979 0l-7.593 4.563a282.9 282.9 0 0 0-80.782 72.854c-3.533 4.713-2.577 11.393 2.136 14.927 4.712 3.533 11.393 2.577 14.927-2.135a261.6 261.6 0 0 1 74.687-67.355l2.115-1.26 2.114 1.26a261.6 261.6 0 0 1 74.688 67.355c3.534 4.712 10.214 5.668 14.927 2.135\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M218.135 177.06c3.532-2.651 4.244-7.664 1.594-11.198a280.3 280.3 0 0 0-80.011-72.166l-7.604-4.563a8 8 0 0 0-8.229 0l-7.604 4.563a280.3 280.3 0 0 0-80.01 72.166c-2.65 3.534-1.938 8.547 1.593 11.198a8 8 0 0 0 11.198-1.594 264.3 264.3 0 0 1 75.448-68.052l3.49-2.083 3.489 2.083a264.3 264.3 0 0 1 75.448 68.052 8 8 0 0 0 11.198 1.594\"/>",
} as const;

export default function ArrowChevronUp(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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