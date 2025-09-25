import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.172 5.06c.256-.093.541-.077.787.045a7.7 7.7 0 0 1 3.448 3.448 1 1 0 0 1-1.79.894 5.7 5.7 0 0 0-1.105-1.518V13a1 1 0 0 1-2 0V7.929a5.7 5.7 0 0 0-1.105 1.518 1 1 0 0 1-1.79-.894 7.7 7.7 0 0 1 3.448-3.448z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m-9.83 16q.095.928.254 1.672c.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.382.298 3.212.424 5.672.424s4.29-.126 5.672-.424c1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.107-.497.19-1.051.255-1.672h-3.589c-.53 0-1.039.211-1.414.586l-.242.242A4 4 0 0 1 14.27 18h-3.516a4 4 0 0 1-2.828-1.172l-.242-.242A2 2 0 0 0 6.27 16zm9.83-14c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12q.001 1.077.035 2H6.27a4 4 0 0 1 2.828 1.172l.242.242c.375.375.884.586 1.414.586h3.516c.53 0 1.04-.211 1.414-.586l.242-.242A4 4 0 0 1 18.754 14h3.723q.035-.923.035-2c0-2.46-.126-4.29-.424-5.672-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function OutboxMailboxMailOutgoingSentSendStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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