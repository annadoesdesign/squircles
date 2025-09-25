import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.512 3.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.274.006C20.948.133 22.512 2.312 22.512 12l-.005.914C22.402 22.123 20.585 24 12.512 24l-.761-.006C4.076 23.867 2.512 21.688 2.512 12c0-10 1.667-12 10-12zM12.512 1.5c-4.207 0-6.007.552-6.972 1.71-.5.6-.899 1.505-1.16 2.962-.263 1.46-.368 3.352-.368 5.828s.105 4.368.367 5.828c.262 1.457.66 2.363 1.16 2.962.966 1.158 2.766 1.71 6.973 1.71 4.208 0 6.008-.552 6.973-1.71.5-.6.898-1.505 1.16-2.962.262-1.46.367-3.352.367-5.828s-.105-4.368-.367-5.828c-.262-1.457-.66-2.362-1.16-2.962-.965-1.158-2.765-1.71-6.973-1.71\" clip-rule=\"evenodd\"/>",
} as const;

export default function MouseLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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