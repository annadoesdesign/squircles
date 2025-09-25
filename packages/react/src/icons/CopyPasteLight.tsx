import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M19.845 4.451c3.77.912 4.667 3.435 4.667 9.549 0 8.333-1.666 10-10 10-6.02 0-8.56-.87-9.507-4.496C1.54 18.598.592 16.236.517 10.762L.512 10c0-8.333 1.667-10 10-10l.762.005c5.474.075 7.837 1.022 8.743 4.488q-.085-.022-.172-.042M14.512 5.5c-2.053 0-3.592.104-4.762.356-1.152.249-1.842.62-2.302 1.08s-.83 1.15-1.08 2.302c-.252 1.17-.356 2.709-.356 4.762s.104 3.592.357 4.762c.248 1.152.619 1.843 1.079 2.302s1.15.831 2.302 1.08c1.17.252 2.709.356 4.762.356 2.054 0 3.593-.104 4.762-.356 1.152-.249 1.843-.62 2.303-1.08s.83-1.15 1.079-2.302c.252-1.17.356-2.709.356-4.762s-.104-3.592-.356-4.762c-.249-1.152-.62-1.843-1.08-2.302s-1.15-.831-2.302-1.08c-1.17-.252-2.708-.356-4.762-.356m-4-4c-2.053 0-3.592.104-4.762.356-1.152.249-1.842.62-2.302 1.08s-.83 1.15-1.08 2.302c-.252 1.17-.356 2.709-.356 4.762s.104 3.592.357 4.762c.248 1.152.619 1.843 1.079 2.302.298.3.695.558 1.252.773l.003.025c-.136-1.093-.19-2.37-.19-3.862 0-8.333 1.666-10 10-10 1.49 0 2.769.055 3.862.19q-.013 0-.026-.003c-.214-.556-.474-.953-.772-1.251-.46-.46-1.15-.831-2.303-1.08-1.17-.252-2.708-.356-4.762-.356\" clip-rule=\"evenodd\"/>",
} as const;

export default function CopyPasteLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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