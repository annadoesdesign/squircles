import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M21.467 5.321c.794 1.67 1.045 4.123 1.045 7.679 0 9.167-1.666 11-10 11s-10-1.834-10-11c0-3.556.25-6.009 1.044-7.679C3.851 9.181 5.726 10 12.512 10c6.787 0 8.66-.819 8.955-4.679M8.512 18a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm0-5a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 0c5.834 0 7 .667 7 4s-1.166 4-7 4-7-.667-7-4 1.167-4 7-4\"/>",
  regular: "",
  light: "",
} as const;

export default function ClipboardFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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