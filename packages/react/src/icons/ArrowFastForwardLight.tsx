import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.92 3.539a.75.75 0 0 1 1.053-.13l.266.206a43.7 43.7 0 0 1 7.658 7.658 1.184 1.184 0 0 1 0 1.454 43.7 43.7 0 0 1-7.658 7.658l-.266.207a.75.75 0 0 1-.922-1.184l.267-.207A42.2 42.2 0 0 0 10.56 12a42.2 42.2 0 0 0-7.242-7.201l-.267-.207a.75.75 0 0 1-.13-1.053\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.92 3.539a.75.75 0 0 1 1.053-.13l.266.206a43.7 43.7 0 0 1 7.658 7.658 1.184 1.184 0 0 1 0 1.454 43.7 43.7 0 0 1-7.658 7.658l-.266.207a.75.75 0 0 1-.922-1.184l.267-.207A42.2 42.2 0 0 0 19.56 12a42.2 42.2 0 0 0-7.242-7.201l-.267-.207a.75.75 0 0 1-.13-1.053\"/>",
} as const;

export default function ArrowFastForwardLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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