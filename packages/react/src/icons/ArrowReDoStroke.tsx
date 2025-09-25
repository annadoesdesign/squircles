import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.618.553A1 1 0 0 1 11.96.106a7.7 7.7 0 0 1 3.438 3.43c.146.292.146.636 0 .928a7.7 7.7 0 0 1-3.438 3.43 1 1 0 0 1-.895-1.788A5.7 5.7 0 0 0 12.58 5h-.069c-2.274 0-4.035.1-5.403.355-1.365.254-2.262.65-2.881 1.183C3.006 7.593 2.512 9.51 2.512 13.5s.494 5.907 1.716 6.962c.619.534 1.516.93 2.88 1.184 1.37.255 3.13.354 5.404.354s4.034-.1 5.403-.354c1.364-.255 2.263-.65 2.881-1.184 1.222-1.055 1.716-2.971 1.716-6.962 0-2.434-.18-4.125-.628-5.324-.421-1.127-1.083-1.831-2.185-2.308a1 1 0 0 1 .793-1.836c1.61.696 2.657 1.815 3.266 3.444.582 1.556.754 3.555.754 6.024 0 3.926-.423 6.76-2.409 8.476-.986.85-2.265 1.347-3.822 1.637-1.553.289-3.46.387-5.769.387-2.308 0-4.216-.098-5.77-.387-1.556-.29-2.835-.786-3.82-1.637C.934 20.26.511 17.426.511 13.5c0-3.925.423-6.76 2.41-8.475.985-.851 2.264-1.347 3.82-1.637C8.297 3.098 10.205 3 12.513 3h.069a5.7 5.7 0 0 0-1.516-1.105 1 1 0 0 1-.447-1.342\"/>",
  light: "",
} as const;

export default function ArrowReDoStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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