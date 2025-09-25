import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M16.77 1.004c2.004-.048 3.983.32 5.209 1.545 1.228 1.228 1.586 3.212 1.527 5.216-.06 2.059-.566 4.4-1.35 6.625-.785 2.226-1.868 4.392-3.122 6.088-1.224 1.657-2.738 3.037-4.436 3.377-3.106.62-5.395-.846-6.83-2.344-.472-.493-.86-1-1.17-1.456a.63.63 0 0 1 .083-.8l.356-.357v-.005a.004.004 0 0 1 0-.006l2.182-2.18a1 1 0 0 0-1.414-1.414l-1.46 1.458.001.005.001.005-.922.922a.925.925 0 0 1-1.18.124 11 11 0 0 1-1.24-1.001C1.49 15.379.028 13.088.661 9.926c.346-1.724 1.725-3.253 3.389-4.486 1.7-1.26 3.867-2.34 6.094-3.117 2.225-.776 4.567-1.269 6.625-1.319\"/>",
  regular: "",
  light: "",
} as const;

export default function EmailSendOutFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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