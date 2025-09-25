import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.709 4.02a1 1 0 0 1-.393 1.961 16.8 16.8 0 0 0-4.675-.265L20.22 18.293a1 1 0 0 1-1.414 1.414L6.215 7.118a16.7 16.7 0 0 0 .278 4.686 1 1 0 0 1-1.961.393c-.492-2.46-.507-4.931 0-7.398a1 1 0 0 1 .79-.78 19.1 19.1 0 0 1 7.387 0\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowUpLeftFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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