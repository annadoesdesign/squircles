import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c.966 0 10 9.034 10 10s-9.034 10-10 10-10-9.034-10-10 9.035-10 10-10m-.651 2.93c-.94.825-2.126 1.951-3.297 3.122a74 74 0 0 0-3.121 3.297q-.32.364-.556.651.237.288.556.651c.824.94 1.95 2.127 3.121 3.297a74 74 0 0 0 3.297 3.121q.364.319.651.555.288-.236.652-.555c.939-.824 2.126-1.95 3.296-3.12a74 74 0 0 0 3.121-3.298q.32-.363.555-.651-.235-.288-.555-.651a74 74 0 0 0-3.12-3.297 74 74 0 0 0-3.297-3.121q-.364-.32-.652-.556-.288.236-.651.556\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function ComponentInstanceStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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