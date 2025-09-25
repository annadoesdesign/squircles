import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.426.006C22.636.133 24.512 2.312 24.512 12l-.006.914C24.38 22.123 22.2 24 12.512 24l-.914-.006C2.39 23.867.512 21.688.512 12c0-10 2-12 12-12zM5.512 12.75H2.017c.024 2.104.152 3.741.43 5.027.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.286.278 2.923.405 5.027.43V18.99c-4.944-.1-6.141-1.297-6.242-6.242zm13.991-.001c-.1 4.945-1.297 6.142-6.242 6.242l.001.009v3.494c2.104-.024 3.741-.151 5.028-.429 1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.277-1.286.406-2.923.43-5.027h-3.496zM12.513 6.5c-1.43 0-2.468.073-3.24.24-.753.162-1.147.392-1.388.633s-.47.635-.634 1.389c-.166.77-.239 1.81-.239 3.238s.073 2.467.24 3.238c.162.754.392 1.148.633 1.389s.635.471 1.389.634c.77.166 1.81.239 3.238.239 1.429 0 2.468-.073 3.239-.24.754-.162 1.147-.392 1.388-.633s.471-.635.634-1.389c.166-.77.24-1.81.24-3.238s-.074-2.467-.24-3.238c-.163-.754-.393-1.148-.634-1.389s-.634-.471-1.388-.634c-.771-.166-1.81-.239-3.239-.239m-.75-4.995c-2.105.024-3.742.152-5.028.43-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.278 1.286-.406 2.923-.43 5.027H5.52c.1-4.944 1.299-6.141 6.242-6.242zM13.262 5l-.002.008c4.945.1 6.142 1.298 6.242 6.242h3.504c-.024-2.104-.152-3.741-.43-5.027-.305-1.418-.77-2.307-1.375-2.912-.606-.606-1.494-1.07-2.912-1.376-1.287-.278-2.924-.406-5.028-.43z\" clip-rule=\"evenodd\"/>",
} as const;

export default function HelpSosLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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