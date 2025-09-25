import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M11.512-.004c6.68 0 8.599.53 8.939 3h2.061a1 1 0 0 1 1 1v6a1 1 0 0 1-.821.983L12.512 12.83v1.232c1.64.261 2 1.396 2 4.934 0 4.167-.5 5-3 5s-3-.833-3-5c0-3.538.36-4.673 2-4.934v-2.066a1 1 0 0 1 .822-.983L21.512 9.16V4.996h-1.061c-.34 2.471-2.259 3-8.939 3-7.5 0-9-.667-9-4s1.5-4 9-4m0 16c-.41 0-.64.029-.76.054a3.3 3.3 0 0 0-.14.664c-.068.533-.1 1.263-.1 2.282s.032 1.749.1 2.282c.047.36.104.561.14.663.12.026.349.055.76.055.41 0 .64-.03.759-.055.037-.102.094-.303.14-.663.07-.533.101-1.263.101-2.282s-.031-1.749-.1-2.282a3.2 3.2 0 0 0-.141-.664c-.12-.025-.349-.054-.759-.054m0-14c-1.858 0-3.282.042-4.38.148-1.118.107-1.756.268-2.12.43-.294.13-.328.22-.35.264-.06.127-.15.434-.15 1.158s.09 1.032.15 1.158c.022.044.056.134.35.265.364.161 1.002.322 2.12.43 1.098.105 2.522.147 4.38.147s3.282-.042 4.38-.147c1.118-.108 1.757-.269 2.12-.43.294-.13.329-.221.35-.265.061-.126.15-.434.15-1.158s-.089-1.031-.15-1.158c-.021-.043-.056-.134-.35-.265-.363-.161-1.002-.322-2.12-.43-1.098-.105-2.521-.147-4.38-.147\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function PaintRollerStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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