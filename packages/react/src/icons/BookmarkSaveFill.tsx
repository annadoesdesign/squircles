import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"m21.96 20.764.038-.192c1-5.003 1.046-10.15.133-15.169-.372-2.048-1.97-3.675-4.031-3.966C16.225 1.172 14.369 1 12.512 1c-1.856 0-3.713.172-5.587.437-2.061.291-3.66 1.918-4.032 3.966a40.5 40.5 0 0 0 .134 15.169l.038.192a1.466 1.466 0 0 0 2.295.901l6.052-4.37a1.88 1.88 0 0 1 2.2 0l6.052 4.37a1.466 1.466 0 0 0 2.295-.9\"/>",
  regular: "",
  light: "",
} as const;

export default function BookmarkSaveFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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