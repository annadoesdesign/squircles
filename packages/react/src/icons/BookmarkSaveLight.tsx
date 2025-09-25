import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512.25c1.902 0 3.795.176 5.693.444 2.4.34 4.237 2.23 4.664 4.575a41.2 41.2 0 0 1-.136 15.45l-.038.192c-.317 1.581-2.162 2.306-3.47 1.362l-6.052-4.37a1.13 1.13 0 0 0-1.322 0L5.8 22.272c-1.307.944-3.153.22-3.47-1.362l-.037-.192a41.2 41.2 0 0 1-.136-15.45C2.582 2.923 4.419 1.034 6.82.694 8.717.426 10.61.25 12.512.25m0 1.5c-1.81 0-3.63.168-5.482.43-1.721.243-3.08 1.607-3.399 3.357a39.7 39.7 0 0 0 .131 14.888l.038.192a.716.716 0 0 0 1.121.44l6.052-4.37a2.63 2.63 0 0 1 3.078 0l6.052 4.37a.716.716 0 0 0 1.121-.44l.038-.192a39.7 39.7 0 0 0 .131-14.888c-.318-1.75-1.678-3.114-3.398-3.357-1.853-.262-3.672-.43-5.483-.43\"/>",
} as const;

export default function BookmarkSaveLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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