import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21.012 12c0-2.053-.104-3.592-.356-4.762-.249-1.152-.62-1.843-1.08-2.302s-1.15-.831-2.302-1.08c-1.17-.252-2.708-.356-4.762-.356s-3.592.104-4.762.356c-1.152.249-1.842.62-2.302 1.08s-.83 1.15-1.08 2.302c-.252 1.17-.356 2.709-.356 4.762s.104 3.592.357 4.762c.248 1.152.619 1.843 1.079 2.302s1.15.831 2.302 1.08c1.17.252 2.709.356 4.762.356V22l-.761-.005c-7.427-.102-9.132-1.807-9.234-9.233L2.512 12c0-8.333 1.667-10 10-10l.762.005c7.674.106 9.238 1.922 9.238 9.995l-.005.762C22.402 20.436 20.585 22 12.512 22v-1.5c2.054 0 3.593-.104 4.762-.356 1.152-.249 1.843-.62 2.303-1.08s.83-1.15 1.079-2.302c.252-1.17.356-2.709.356-4.762\"/>",
} as const;

export default function StopLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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