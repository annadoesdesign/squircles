import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 14c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4m-.183 1.71a9 9 0 0 0-1.131.976c-.394.393-.74.797-.975 1.13q-.072.104-.12.184.048.08.12.184c.235.333.58.736.975 1.13.394.394.797.74 1.13.975a4 4 0 0 0 .184.12q.08-.049.184-.12c.334-.235.737-.58 1.13-.975.395-.393.74-.797.975-1.13q.071-.103.12-.184a4 4 0 0 0-.12-.184 9 9 0 0 0-.974-1.13 9 9 0 0 0-1.131-.975 4 4 0 0 0-.184-.121 4 4 0 0 0-.183.12M6.512 8c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4M6.33 9.71c-.334.236-.737.582-1.131.975-.394.394-.74.798-.975 1.131q-.072.104-.12.184.048.08.12.184c.235.333.58.737.975 1.13.394.394.797.74 1.13.975q.105.071.184.12.08-.049.184-.12a9 9 0 0 0 1.13-.974c.395-.394.74-.798.975-1.131q.071-.103.12-.184a4 4 0 0 0-.12-.184 9 9 0 0 0-.974-1.13 9 9 0 0 0-1.131-.975 4 4 0 0 0-.184-.121 4 4 0 0 0-.183.12M18.512 8c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4m-.183 1.71c-.334.236-.737.582-1.131.975-.394.394-.74.798-.975 1.131q-.072.104-.12.184.048.08.12.184c.235.333.58.737.975 1.13.394.394.797.74 1.13.975a4 4 0 0 0 .184.12q.08-.049.184-.12c.334-.235.737-.58 1.13-.974.395-.394.74-.798.975-1.131q.071-.103.12-.184a4 4 0 0 0-.12-.184 9 9 0 0 0-.974-1.13 9 9 0 0 0-1.131-.975 4 4 0 0 0-.184-.121 4 4 0 0 0-.183.12M12.512 2c1 0 4 3 4 4s-3 4-4 4-4-3-4-4 3-4 4-4m-.183 1.71a9 9 0 0 0-1.131.976c-.394.393-.74.797-.975 1.13q-.072.104-.12.184.048.08.12.184c.235.333.58.737.975 1.13.394.394.797.74 1.13.975q.105.071.184.12.08-.049.184-.12c.334-.235.737-.58 1.13-.975a9 9 0 0 0 .975-1.13q.071-.103.12-.184a4 4 0 0 0-.12-.184 9 9 0 0 0-.974-1.13 9 9 0 0 0-1.131-.975 4 4 0 0 0-.184-.121 4 4 0 0 0-.183.12\" clip-rule=\"evenodd\"/>",
} as const;

export default function ComponentLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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