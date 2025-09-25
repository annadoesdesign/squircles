import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12M2.133 15.5c.07.862.171 1.616.314 2.277.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435s4.343-.125 5.778-.435c1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.142-.66.243-1.415.313-2.277h-4.137a2.25 2.25 0 0 0-1.59.66l-.243.241A3.75 3.75 0 0 1 14.27 17.5h-3.516a3.75 3.75 0 0 1-2.651-1.099l-.242-.242A2.25 2.25 0 0 0 6.27 15.5zm10.38-14c-2.47 0-4.343.125-5.778.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777q0 1.072.034 2H6.27a3.75 3.75 0 0 1 2.651 1.099l.243.242c.421.422.994.659 1.59.659h3.516a2.25 2.25 0 0 0 1.59-.66l.243-.241A3.75 3.75 0 0 1 18.754 14h4.224q.033-.928.034-2c0-2.47-.125-4.342-.434-5.777-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function ArchiveMailboxLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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