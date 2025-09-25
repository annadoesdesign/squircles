import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.601 9.251a.75.75 0 0 1 .793.705c.215 3.688.822 5.669 1.962 6.777 1.13 1.1 2.965 1.517 6.193 1.517 3.074 0 4.887-.379 6.028-1.366 1.13-.977 1.78-2.71 2.056-5.947a.75.75 0 0 1 1.495.127c-.28 3.297-.965 5.566-2.57 6.955-1.468 1.269-3.557 1.668-6.29 1.723l.024 2.758h3.256a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5h3.243l-.024-2.76c-2.847-.063-4.99-.506-6.457-1.931-1.587-1.544-2.198-4.064-2.414-7.765a.75.75 0 0 1 .705-.793\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.548 0c5 0 6 1.333 6 8s-1 8-6 8-6-1.333-6-8 1-8 6-8m0 1.5c-2.511 0-3.283.378-3.675.9-.233.31-.458.833-.61 1.777-.153.94-.215 2.178-.215 3.823s.062 2.882.215 3.823c.152.944.377 1.466.61 1.777.392.522 1.164.9 3.675.9s3.283-.378 3.675-.9c.232-.31.457-.833.61-1.777.152-.94.215-2.178.215-3.823s-.063-2.882-.215-3.823c-.153-.944-.378-1.466-.61-1.777-.392-.522-1.164-.9-3.675-.9\" clip-rule=\"evenodd\"/>",
} as const;

export default function MicrophoneMicPodcastLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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