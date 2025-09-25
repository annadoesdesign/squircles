import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.316 4.045a1 1 0 0 0 .392 1.961 16.8 16.8 0 0 1 4.673-.265L4.806 18.292a1 1 0 0 0 1.412 1.416L18.81 7.14c.13 1.55.035 3.1-.278 4.664a1 1 0 0 0 1.961.392c.492-2.459.506-4.905-.001-7.372a1 1 0 0 0-.789-.78 19.1 19.1 0 0 0-7.387.001\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowUpRightFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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