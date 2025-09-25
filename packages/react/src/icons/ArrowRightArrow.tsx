import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M161.791 68.751c3.268-4.902 9.89-6.226 14.792-2.958l.938.625a197.4 197.4 0 0 1 54.729 54.729l.625.937a10.67 10.67 0 0 1 0 11.834l-.625.937a197.35 197.35 0 0 1-54.729 54.729l-.938.625c-4.902 3.268-11.524 1.944-14.792-2.958-3.267-4.902-1.943-11.524 2.959-14.792l.937-.625a176 176 0 0 0 37.063-33.166H32c-5.891 0-10.667-4.776-10.667-10.667S26.109 117.334 32 117.334h170.75a176 176 0 0 0-37.063-33.166l-.937-.625c-4.902-3.268-6.226-9.89-2.959-14.792\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M161.792 68.751c3.268-4.902 9.89-6.226 14.792-2.958l.937.625a197.3 197.3 0 0 1 54.73 54.729l.625.937a10.67 10.67 0 0 1 0 11.834l-.625.937a197.3 197.3 0 0 1-54.73 54.729l-.937.625c-4.902 3.268-11.524 1.944-14.792-2.958-3.267-4.902-1.943-11.524 2.959-14.792l.937-.625a176 176 0 0 0 37.063-33.166H32.001c-5.891 0-10.667-4.776-10.667-10.667s4.776-10.667 10.667-10.667h170.75a176 176 0 0 0-37.063-33.166l-.937-.625c-4.902-3.268-6.226-9.89-2.959-14.792\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M164.01 70.23a8 8 0 0 1 11.094-2.219l.938.625a194.7 194.7 0 0 1 53.989 53.99l.625.937a8 8 0 0 1 0 8.875l-.625.938a194.7 194.7 0 0 1-53.989 53.989l-.938.625a8 8 0 1 1-8.875-13.312l.938-.625a178.7 178.7 0 0 0 41.198-38.052H32a8 8 0 0 1 0-16h176.365a178.7 178.7 0 0 0-41.198-38.052l-.938-.625a8 8 0 0 1-2.219-11.094\"/>",
} as const;

export default function ArrowRightArrow(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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