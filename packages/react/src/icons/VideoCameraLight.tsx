import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M9.512 1c5.381 0 7.672.944 8.538 4.863q0-.006-.002-.013l.464-.188c5-2.112 6 1.056 6 6.338l-.012.965c-.129 4.692-1.3 7.353-5.988 5.373q-.237-.1-.464-.19v-.002C17.181 22.059 14.89 23 9.512 23c-7.5 0-9-1.833-9-11s1.5-11 9-11m0 1.5c-3.786 0-5.33.51-6.151 1.513-.431.526-.785 1.335-1.02 2.662-.234 1.329-.329 3.057-.329 5.325s.095 3.996.33 5.325c.234 1.327.588 2.136 1.019 2.662.82 1.003 2.365 1.513 6.151 1.513s5.331-.51 6.152-1.513c.43-.526.785-1.335 1.02-2.662.234-1.329.328-3.057.328-5.325s-.094-3.996-.329-5.325c-.234-1.327-.588-2.136-1.02-2.662-.82-1.003-2.365-1.513-6.15-1.513m11.893 4.01c-.442-.046-1.172.054-2.309.534q-.416.174-.799.322c.154 1.285.215 2.815.215 4.634 0 1.818-.061 3.348-.215 4.632q.383.15.8.324c1.136.48 1.866.58 2.308.534.364-.038.58-.174.774-.437.239-.325.466-.887.62-1.79.152-.886.213-1.979.213-3.263s-.061-2.377-.213-3.264c-.154-.902-.381-1.465-.62-1.789-.194-.263-.41-.4-.774-.437\" clip-rule=\"evenodd\"/>",
} as const;

export default function VideoCameraLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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