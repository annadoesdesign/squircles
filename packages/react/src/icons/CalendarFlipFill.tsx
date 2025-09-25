import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M.544 10.927a169 169 0 0 1 23.912 0q.044.967.044 2.073c0 1.285-.043 2.426-.138 3.438q.018-.177.034-.358c-6.3.372-8.344 2.171-8.792 7.839a26 26 0 0 0 2.028-.192c.223-2.35.727-3.51 1.47-4.19.51-.467 1.307-.871 2.692-1.145.67-.133 1.444-.227 2.339-.29q.031-.171.06-.347C23.342 22.84 20.453 24 12.5 24c-10 0-12-1.833-12-11q0-1.106.044-2.073M17.524 0a1 1 0 0 1 .988 1.013l-.012.999a1 1 0 0 1-.083.386c3.817.707 5.368 2.504 5.874 6.511A171 171 0 0 0 .708 8.91c.506-4.008 2.057-5.805 5.875-6.512a1 1 0 0 1-.083-.41l.013-1a1 1 0 1 1 1.999.025l-.012.999q-.001.068-.013.134C9.655 2.042 10.986 2 12.5 2s2.843.043 4.01.146a1 1 0 0 1-.01-.159l.013-1A1 1 0 0 1 17.524 0\"/>",
  regular: "",
  light: "",
} as const;

export default function CalendarFlipFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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