import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M22.38 12c-.376 3.528-1.65 5.08-4.953 5.676C17.134 22.85 15.975 24 12.512 24s-4.623-1.151-4.916-6.324C4.293 17.08 3.019 15.528 2.644 12h-.01a26 26 0 0 1-.117-2.21l-.005-.676c0-1.947.228-3.482.681-4.687l.094-.237C4.635.95 8.512 3.682 15.512.72s7 3.884 7 8.394l-.005.676c-.013.812-.05 1.546-.12 2.21zM4.153 12c.13 1.11.35 1.896.667 2.47.43.775 1.14 1.331 2.715 1.666l.327.064.126.028a1.5 1.5 0 0 1 1.106 1.363c.147 2.598.512 3.72.935 4.241.31.38.85.668 2.483.668 1.632 0 2.173-.288 2.482-.668.423-.52.787-1.643.935-4.24A1.5 1.5 0 0 1 17.16 16.2c1.806-.326 2.584-.903 3.043-1.73.318-.574.535-1.36.665-2.47zM19.127 1.584c-.512-.153-1.44-.155-3.03.518-3.77 1.595-6.729 1.655-8.75 1.748-1.055.048-1.64.104-2.044.254-.264.098-.45.229-.631.662-.411.99-.66 2.38-.66 4.348q0 .75.027 1.386h16.945q.027-.637.028-1.386c0-1.139-.001-2.346-.104-3.498-.104-1.166-.303-2.152-.635-2.874-.316-.69-.693-1.022-1.146-1.158\" clip-rule=\"evenodd\"/>",
} as const;

export default function PaintBrushLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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