import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m2.832 6.445a1 1 0 0 0-1.386-.277 18.5 18.5 0 0 0-4.548 4.303l-.698.93a1 1 0 0 0 0 1.199l.698.93a18.5 18.5 0 0 0 4.547 4.302 1 1 0 1 0 1.11-1.664 16.5 16.5 0 0 1-4.058-3.838l-.248-.33.248-.33a16.5 16.5 0 0 1 4.058-3.838 1 1 0 0 0 .277-1.387\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowLeftChevronSquircleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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