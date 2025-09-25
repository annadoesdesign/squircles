import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.256 5.295a.75.75 0 0 1 .59.034 7.46 7.46 0 0 1 3.336 3.336.75.75 0 0 1-1.342.67 6 6 0 0 0-1.579-1.964V13a.75.75 0 0 1-1.5 0V7.371a6 6 0 0 0-1.579 1.964.75.75 0 0 1-1.342-.67 7.46 7.46 0 0 1 3.336-3.336z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12M2.177 16q.099.984.27 1.777c.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435s4.343-.125 5.778-.435c1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912q.17-.793.27-1.777h-4.093a2.25 2.25 0 0 0-1.59.66l-.244.241A3.75 3.75 0 0 1 14.27 18h-3.515a3.75 3.75 0 0 1-2.651-1.099l-.243-.242A2.25 2.25 0 0 0 6.27 16zM12.512 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777q0 1.366.055 2.5H6.27a3.75 3.75 0 0 1 2.651 1.099l.244.242c.421.422.994.659 1.59.659h3.515a2.25 2.25 0 0 0 1.59-.66l.244-.241a3.75 3.75 0 0 1 2.651-1.099h4.203q.055-1.134.054-2.5c0-2.47-.125-4.342-.434-5.777-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function OutboxMailboxMailOutgoingSentSendLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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