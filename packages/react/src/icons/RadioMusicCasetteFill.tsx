import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M8.512 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M4.512 0a1 1 0 0 1 1 1v5.528l-.033.008C7.205 6.14 9.494 6 12.512 6c10 0 12 1.5 12 9s-2 9-12 9-12-1.5-12-9c0-4.296.657-6.623 3.097-7.827q-.05.023-.097.048V1a1 1 0 0 1 1-1m4 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8m7.986.836a1 1 0 0 0-1.972.328 17.3 17.3 0 0 1 0 5.672 1 1 0 0 0 1.973.328c.349-2.095.349-4.233 0-6.328m4 0a1 1 0 0 0-1.972.328 17.3 17.3 0 0 1 0 5.672 1 1 0 0 0 1.973.328c.349-2.095.349-4.233 0-6.328\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function RadioMusicCasetteFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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