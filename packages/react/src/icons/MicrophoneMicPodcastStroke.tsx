import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.588 9.002a1 1 0 0 1 1.055.94c.215 3.686.822 5.576 1.887 6.612C7.582 17.577 9.323 18 12.549 18c3.071 0 4.798-.384 5.864-1.306 1.05-.908 1.696-2.551 1.97-5.779a1 1 0 0 1 1.994.17c-.282 3.307-.97 5.664-2.656 7.122-1.485 1.284-3.557 1.702-6.173 1.778V22h3a1 1 0 1 1 0 2h-8a1 1 0 0 1 0-2h3v-2.016c-2.758-.08-4.914-.54-6.413-1.997-1.661-1.616-2.272-4.227-2.488-7.93a1 1 0 0 1 .94-1.055\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.548 0c5 0 6 1.333 6 8s-1 8-6 8-6-1.333-6-8 1-8 6-8m0 2c-2.515 0-3.045.392-3.276.7-.164.22-.37.653-.515 1.557-.146.9-.21 2.105-.21 3.743s.064 2.842.21 3.743c.146.904.35 1.338.515 1.557.231.307.76.7 3.276.7s3.044-.393 3.275-.7c.164-.22.37-.653.516-1.557.145-.9.209-2.105.209-3.743s-.064-2.842-.21-3.743c-.146-.904-.35-1.338-.515-1.557-.23-.308-.76-.7-3.275-.7\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function MicrophoneMicPodcastStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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