import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M128 106.667c11.782 0 21.333 9.552 21.333 21.334s-9.551 21.333-21.333 21.333-21.333-9.551-21.333-21.333 9.551-21.334 21.333-21.334\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M128 21.334c74.667 0 128 64 128 106.667 0 42.666-53.333 106.666-128 106.666s-128-64-128-106.666C0 85.334 53.333 21.334 128 21.334m0 64c-23.564 0-42.667 19.103-42.667 42.667s19.103 42.666 42.667 42.666 42.667-19.102 42.667-42.666S151.564 85.334 128 85.334\" clip-rule=\"evenodd\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M128 96c17.673 0 32 14.328 32 32.001s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M128 21.334c74.667 0 128 64 128 106.667 0 42.666-53.333 106.666-128 106.666s-128-64-128-106.666C0 85.334 53.333 21.334 128 21.334m0 21.333c-31.052 0-58.005 13.302-77.375 31.532-20.007 18.83-29.292 40.26-29.292 53.802 0 13.541 9.285 34.971 29.292 53.802 19.37 18.229 46.323 31.531 77.375 31.531s58.005-13.302 77.375-31.531c20.007-18.831 29.292-40.261 29.292-53.802 0-13.542-9.285-34.972-29.292-53.802-19.37-18.23-46.323-31.532-77.375-31.532\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M128 96c17.673 0 32 14.328 32 32.001s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M128 21.334c74.667 0 128 64 128 106.667 0 42.666-53.333 106.666-128 106.666s-128-64-128-106.666C0 85.334 53.333 21.334 128 21.334m0 16c-32.624 0-60.837 13.983-81.031 32.99C26.297 89.779 16 112.512 16 128s10.297 38.221 30.969 57.677c20.194 19.006 48.407 32.989 81.031 32.989s60.837-13.983 81.031-32.989C229.703 166.222 240 143.49 240 128.001s-10.297-38.222-30.969-57.677c-20.194-19.007-48.407-32.99-81.031-32.99\"/>",
} as const;

export default function EyeOpenEyeView(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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