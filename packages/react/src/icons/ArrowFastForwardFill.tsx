import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M2.723 3.386a1 1 0 0 1 1.403-.175l.266.207a44 44 0 0 1 7.28 7.166l.422.536a1.43 1.43 0 0 1 0 1.76 44 44 0 0 1-7.702 7.702l-.266.207a1 1 0 0 1-1.228-1.578l.267-.207A42 42 0 0 0 10.242 12a42 42 0 0 0-7.077-7.004l-.267-.207a1 1 0 0 1-.175-1.403\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M11.723 3.386a1 1 0 0 1 1.403-.175l.266.207a44 44 0 0 1 7.28 7.166l.422.536a1.43 1.43 0 0 1 0 1.76 44 44 0 0 1-7.702 7.702l-.265.207a1 1 0 0 1-1.229-1.578l.267-.207A42 42 0 0 0 19.242 12a42 42 0 0 0-7.077-7.004l-.267-.207a1 1 0 0 1-.175-1.403\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowFastForwardFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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