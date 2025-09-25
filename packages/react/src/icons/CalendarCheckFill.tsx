import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M.544 10.927a169 169 0 0 1 23.912 0q.044.967.044 2.073c0 9.167-2 11-12 11S.5 22.167.5 13q0-1.106.044-2.073m16.737 2.448a1 1 0 0 0-1.406-.156 19.8 19.8 0 0 0-4.42 4.966l-.046.072a11.5 11.5 0 0 0-2.354-2.089 1 1 0 0 0-1.11 1.664 9.5 9.5 0 0 1 2.336 2.21l.42.558a1 1 0 0 0 1.647-.07l.803-1.285a17.8 17.8 0 0 1 3.974-4.464 1 1 0 0 0 .156-1.406\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M17.524 0a1 1 0 0 1 .988 1.013l-.012.999a1 1 0 0 1-.083.386c3.817.707 5.368 2.504 5.874 6.511A171 171 0 0 0 .708 8.91c.506-4.008 2.057-5.805 5.875-6.512a1 1 0 0 1-.083-.41l.013-1a1 1 0 1 1 1.999.025l-.012.999q-.001.068-.013.134C9.655 2.042 10.986 2 12.5 2s2.843.043 4.01.146a1 1 0 0 1-.01-.159l.013-1A1 1 0 0 1 17.524 0\"/>",
  regular: "",
  light: "",
} as const;

export default function CalendarCheckFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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