import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M3.314 1.106C7.415.834 18.406.662 21.752 6.238c1.478 2.463 1.207 5.819.548 8.6 2.345 2.762 2.093 4.151-.353 6.597s-3.836 2.698-6.598.353c-2.78.657-6.135.927-8.597-.55C1.177 17.892 1.346 6.903 1.618 2.802q.008-.127.034-.249l7.878 7.878q-.01.129-.014.272L9.512 11c0 1.562.293 1.953 1.703 1.996l.297.004c1.667 0 2-.334 2-2 0-1.667-.333-2-2-2l-.297.004a6 6 0 0 0-.27.014L3.067 1.14q.12-.024.247-.034\"/>",
  regular: "",
  light: "",
} as const;

export default function PenDrawPenToolFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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