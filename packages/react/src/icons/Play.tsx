import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M51.225 31.237c2.122-6.603 9.123-10.392 15.813-8.562l1.427.48 7.615 3.04a709 709 0 0 1 162.062 91.084c7.146 5.362 7.146 16.076 0 21.438A709 709 0 0 1 76.08 229.8l-7.615 3.042c-7.563 3.022-16.016-1.556-17.615-9.542a486 486 0 0 1 0-190.604z\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M51.23 31.238c2.121-6.604 9.121-10.394 15.812-8.563l1.427.48 7.615 3.041a709 709 0 0 1 162.062 91.084c7.146 5.361 7.146 16.075 0 21.437A709 709 0 0 1 76.084 229.8l-7.615 3.042c-7.564 3.026-16.016-1.552-17.614-9.542a485.95 485.95 0 0 1 0-190.604zm18.687 15.49a464.6 464.6 0 0 0 0 162.531 687.5 687.5 0 0 0 146.823-81.261 687.6 687.6 0 0 0-146.823-81.27\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M53.76 32.062c1.686-5.255 7.26-8.27 12.583-6.813l1.136.375 7.614 3.052a706.2 706.2 0 0 1 161.448 90.73c5.727 4.295 5.727 12.892 0 17.187a706.3 706.3 0 0 1-161.448 90.729l-7.614 3.052c-6.017 2.407-12.74-1.239-14.01-7.593a483.3 483.3 0 0 1 0-189.563zM67.906 43.03a467.2 467.2 0 0 0 0 169.927l1.25-.49c54.063-21.626 105.148-50.024 152.073-84.469-46.925-34.444-98.01-62.843-152.073-84.468z\"/>",
} as const;

export default function Play(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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