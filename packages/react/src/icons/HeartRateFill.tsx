import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M13.128 2.534a6.98 6.98 0 0 1 9.823 1.093c2.41 3.019 1.876 9.28-.44 12.373-2.386 3.188-7.326 5.74-9.233 6.646a1.8 1.8 0 0 1-1.55-.001C9.824 21.739 4.898 19.187 2.51 16c-.779-1.04-1.354-2.439-1.683-3.952h5.18L8.67 15.6a1 1 0 0 0 1.762-.325l1.293-4.528.85 1.7a1 1 0 0 0 .895.553h4a1 1 0 0 0 0-2H14.09l-1.723-3.447a1 1 0 0 0-1.857.173l-1.447 5.062-1.755-2.34a1 1 0 0 0-.8-.4H.542c-.169-2.416.29-4.855 1.541-6.42a6.98 6.98 0 0 1 9.823-1.094l.596.466z\"/>",
  regular: "",
  light: "",
} as const;

export default function HeartRateFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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