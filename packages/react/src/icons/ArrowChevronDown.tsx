import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M36.27 87.47c-4.712 3.535-5.668 10.215-2.135 14.928a283 283 0 0 0 80.782 72.854l7.593 4.563a10.68 10.68 0 0 0 10.98 0l7.593-4.563a283 283 0 0 0 80.782-72.854c3.533-4.713 2.576-11.393-2.136-14.927-4.713-3.533-11.393-2.577-14.927 2.135a261.6 261.6 0 0 1-74.687 67.354L128 158.221l-2.115-1.261a261.6 261.6 0 0 1-74.687-67.354c-3.534-4.712-10.215-5.668-14.927-2.135\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M36.272 87.47c-4.712 3.535-5.669 10.215-2.136 14.928a283 283 0 0 0 80.782 72.854l7.593 4.563a10.68 10.68 0 0 0 10.979 0l7.594-4.563a283 283 0 0 0 80.781-72.854c3.534-4.713 2.577-11.393-2.135-14.927-4.713-3.533-11.393-2.577-14.927 2.135a261.6 261.6 0 0 1-74.688 67.354l-2.114 1.261-2.115-1.261a261.6 261.6 0 0 1-74.687-67.354c-3.534-4.712-10.215-5.668-14.927-2.135\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M37.864 89.607a8 8 0 0 0-1.593 11.198 280.3 280.3 0 0 0 80.01 72.166l7.604 4.563a8 8 0 0 0 8.229 0l7.604-4.563a280.3 280.3 0 0 0 80.011-72.166 8 8 0 0 0-1.594-11.198 8 8 0 0 0-11.198 1.594 264.3 264.3 0 0 1-75.448 68.052L128 161.336l-3.49-2.083a264.3 264.3 0 0 1-75.448-68.052 8 8 0 0 0-11.198-1.594\"/>",
} as const;

export default function ArrowChevronDown(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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