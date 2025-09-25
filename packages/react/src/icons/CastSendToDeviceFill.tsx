import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M.542 10.089A14 14 0 0 1 14.51 23.967a57 57 0 0 1-1.998.033l-.002-.001a12 12 0 0 0-4.693-9.43 12 12 0 0 0-7.305-2.48V12q0-1.01.03-1.911\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M.55 14.09a10.001 10.001 0 0 1 8.932 5.576 10 10 0 0 1 1.028 4.3 33 33 0 0 1-2.005-.125 8 8 0 0 0-2.336-5.41 8 8 0 0 0-5.49-2.338 33 33 0 0 1-.13-2.003M12.512 0c10 0 12 2 12 12 0 8.493-1.443 11.214-8.004 11.842A15.998 15.998 0 0 0 .662 8.09C1.276 1.455 3.983 0 12.513 0\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M.984 18.11a6 6 0 0 1 5.502 5.435c-3.228-.68-4.808-2.236-5.502-5.436\"/>",
  regular: "",
  light: "",
} as const;

export default function CastSendToDeviceFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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