import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c8.334 0 10 .833 10 5 0 2.545-.622 3.844-3.006 4.472q.006.256.006.528c0 4.7-1.03 5.865-6 5.987V23a1 1 0 1 1-2 0v-7.013c-4.969-.123-6-1.287-6-5.987q0-.271.005-.528C3.134 8.844 2.512 7.545 2.512 5c0-4.167 1.667-5 10-5m0 2c-2.064 0-3.644.052-4.863.184-1.239.133-1.952.335-2.367.543-.338.169-.457.325-.543.526-.125.29-.227.798-.227 1.747 0 1.176.16 1.663.303 1.89.089.142.308.41 1.212.648a2 2 0 0 1 1.49 1.972q-.005.236-.005.49c0 2.563.364 3.141.614 3.356.144.123.456.306 1.195.443.746.138 1.766.201 3.191.201s2.445-.063 3.192-.201c.739-.137 1.05-.32 1.194-.443.25-.215.614-.793.614-3.356q0-.243-.006-.49a2 2 0 0 1 1.492-1.973c.904-.238 1.122-.505 1.211-.646.126-.2.264-.597.296-1.482L20.512 5c0-.949-.102-1.458-.226-1.747-.087-.201-.205-.357-.543-.526-.415-.208-1.13-.41-2.367-.543-.914-.099-2.032-.153-3.404-.174z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function PinLocationSaveStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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