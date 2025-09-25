import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m5.317 14.052a1 1 0 0 0-1.265.63q-.005.015-.021.053c-.024.054-.064.14-.124.248-.12.217-.317.513-.614.81C15.23 16.368 14.23 17 12.512 17c-1.717 0-2.718-.632-3.293-1.207a3.7 3.7 0 0 1-.614-.81 3 3 0 0 1-.145-.3 1 1 0 0 0-1.896.633L7.512 15l-.948.316v.002l.003.01.006.015.016.044q.02.052.055.136c.047.11.117.258.213.431.192.346.495.8.948 1.253C8.73 18.132 10.23 19 12.512 19s3.782-.868 4.707-1.793a5.7 5.7 0 0 0 .948-1.253 5 5 0 0 0 .268-.567l.017-.044.005-.016.003-.009s0-.002-.948-.318l.948.316a1 1 0 0 0-.631-1.264M8.012 5c-1.25 0-1.5.583-1.5 3.5l.003.52c.03 2.303.287 2.903 1.275 2.973l.222.007c1.172 0 1.465-.513 1.497-2.98l.003-.52c0-2.917-.25-3.5-1.5-3.5m9 0c-1.25 0-1.5.583-1.5 3.5l.003.52c.03 2.303.287 2.903 1.275 2.973l.222.007c1.172 0 1.465-.513 1.497-2.98l.003-.52c0-2.917-.25-3.5-1.5-3.5\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function SmileyFaceFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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