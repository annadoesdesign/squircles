import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.426.006C22.636.133 24.512 2.312 24.512 12l-.006.914C24.38 22.123 22.2 24 12.512 24l-.914-.006C2.39 23.867.512 21.688.512 12c0-10 2-12 12-12zM2.52 13c.031 1.966.16 3.484.416 4.672.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.188.256 2.707.384 4.672.415v-3.006C6.86 18.851 5.66 17.652 5.526 13zm16.978-.001c-.135 4.653-1.334 5.852-5.986 5.986v3.006c1.966-.03 3.484-.159 4.672-.415 1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.257-1.188.385-2.706.416-4.672h-2.992zM12.512 7c-1.418 0-2.415.074-3.133.229-.695.15-.989.346-1.14.498-.152.151-.348.445-.498 1.14-.155.718-.229 1.714-.229 3.133s.074 2.415.229 3.133c.15.695.346.989.498 1.14.151.152.445.349 1.14.498.718.155 1.715.229 3.133.229 1.419 0 2.415-.074 3.133-.229.696-.15.99-.346 1.14-.498.152-.151.349-.445.499-1.14.155-.718.228-1.714.228-3.133s-.073-2.415-.228-3.133c-.15-.695-.347-.989-.498-1.14-.152-.152-.445-.348-1.141-.498C14.927 7.074 13.931 7 12.512 7m1-1.986c4.652.134 5.851 1.334 5.986 5.986h3.006c-.03-1.965-.16-3.484-.416-4.672-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24c-1.188-.256-2.706-.385-4.672-.416zm-2-3.006c-1.965.031-3.484.16-4.672.416-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.68 7.516 2.551 9.035 2.52 11h3.006c.134-4.652 1.334-5.852 5.986-5.986z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function HelpSosStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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