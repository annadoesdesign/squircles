import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M2.512 2c2.5-2.5 16.5-2.5 20 0 2 2 1.517 6.11 1 10l-.113.768c-.614 3.776-1.972 6.577-4.887 9.232l-.358.314C16.39 23.793 14.968 24 12.512 24l-.478-.003c-2.17-.03-3.518-.303-5.164-1.683L6.512 22c-2.915-2.655-4.272-5.456-4.886-9.231L1.512 12c-.5-3.77-.97-7.744.82-9.807zm15.683 9.294a8 8 0 0 0-3.257.13 10 10 0 0 1-4.851 0 8 8 0 0 0-3.257-.13l-3.32.553c.51 3.724 1.672 6.235 4.349 8.675.804.732 1.395 1.05 1.973 1.224.631.19 1.396.254 2.68.254s2.05-.064 2.681-.254c.578-.173 1.168-.492 1.973-1.224 2.677-2.44 3.837-4.951 4.347-8.675zm-6.058-9.169c-2.04 0-4.01.15-5.58.437-.786.142-1.43.311-1.913.492-.24.089-.418.174-.546.246-.12.068-.168.11-.172.114-.455.455-.8 1.342-.859 2.95-.039 1.058.05 2.236.193 3.497l3.24-.54c1.354-.225 2.74-.17 4.07.163a8 8 0 0 0 3.884 0 10 10 0 0 1 4.07-.163l3.24.54c.142-1.26.232-2.44.194-3.497-.054-1.47-.348-2.336-.745-2.822-.543-.324-1.637-.697-3.285-.977-1.711-.29-3.753-.44-5.79-.44\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function CupLiquidGlassStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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