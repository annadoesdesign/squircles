import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.513 13c6.85 0 9.301 3.283 9.864 7.694.069.539-.108 1.09-.531 1.43C20.05 23.572 17.136 24 12.513 24s-7.538-.428-9.334-1.876c-.422-.34-.599-.891-.53-1.43C3.212 16.284 5.662 13 12.513 13M12.513 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10\"/>",
  regular: "",
  light: "",
} as const;

export default function UserPersonAccountFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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