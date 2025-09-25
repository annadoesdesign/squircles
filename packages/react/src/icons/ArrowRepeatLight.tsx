import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21.672 8.008c.378 0 .698.283.73.66.077.908.11 1.931.11 3.081 0 8.334-1.666 10-10 10-3.656 0-6.027-.321-7.538-1.386.134.535.323 1.057.571 1.553l.12.238a.75.75 0 0 1-1.342.671l-.118-.237a9.1 9.1 0 0 1-.961-4.067.8.8 0 0 1 .442-.715l.184-.092a9.2 9.2 0 0 1 4.124-.973.75.75 0 0 1 0 1.5c-.903 0-1.796.162-2.64.47q.046.053.094.103c.46.46 1.15.83 2.302 1.079 1.17.252 2.709.356 4.762.356 2.054 0 3.593-.104 4.762-.356 1.152-.249 1.843-.62 2.303-1.08s.83-1.15 1.079-2.302c.252-1.17.356-2.708.356-4.762 0-1.109-.03-2.068-.098-2.9a.773.773 0 0 1 .758-.84M19.177.338a.75.75 0 0 1 1.006.335l.12.237a9.1 9.1 0 0 1 .96 4.068.8.8 0 0 1-.442.715l-.185.091a9.2 9.2 0 0 1-4.124.974.75.75 0 0 1 0-1.5 7.7 7.7 0 0 0 3.014-.62c-.46-.437-1.14-.792-2.252-1.032-1.17-.252-2.708-.357-4.762-.357s-3.592.105-4.762.357c-1.152.248-1.842.619-2.302 1.079s-.83 1.15-1.08 2.303c-.252 1.169-.356 2.708-.356 4.761q0 .782.022 1.468a.763.763 0 0 1-.758.791.737.737 0 0 1-.741-.71 49 49 0 0 1-.023-1.549c0-8.333 1.667-10 10-10 3.189 0 5.4.245 6.917 1.013a7.6 7.6 0 0 0-.469-1.18l-.119-.238a.75.75 0 0 1 .336-1.006\"/>",
} as const;

export default function ArrowRepeatLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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