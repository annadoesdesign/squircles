import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 7c4.167 0 5 .833 5 5s-.833 5-5 5-5-.833-5-5 .834-5 5-5m0 1.5c-1.011 0-1.717.052-2.222.161-.489.105-.684.242-.78.337s-.231.29-.337.78c-.108.505-.16 1.21-.16 2.222s.052 1.717.16 2.223c.106.488.242.684.337.779s.291.232.78.337c.505.109 1.21.161 2.222.161s1.718-.052 2.223-.161c.488-.106.684-.242.78-.337s.23-.291.336-.78c.11-.505.161-1.21.161-2.222s-.052-1.717-.16-2.223c-.106-.488-.242-.684-.338-.779-.095-.095-.29-.232-.779-.337-.505-.109-1.21-.161-2.223-.161\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.426.006C22.636.133 24.512 2.313 24.512 12l-.006.914C24.38 22.123 22.2 24 12.513 24l-.914-.006C2.686 23.872.641 21.826.518 12.914L.512 12c0-10 2-12 12-12zM12.512 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.306.77-2.912 1.376s-1.07 1.494-1.376 2.912C2.137 7.658 2.012 9.53 2.012 12s.125 4.342.435 5.777c.306 1.418.77 2.307 1.376 2.912.606.606 1.494 1.07 2.912 1.375 1.435.31 3.307.436 5.777.436s4.343-.126 5.778-.436c1.418-.305 2.306-.769 2.912-1.375.605-.605 1.069-1.494 1.375-2.912.31-1.435.435-3.307.435-5.777s-.126-4.342-.435-5.777c-.306-1.418-.77-2.307-1.375-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.307-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function StopSquircleLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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