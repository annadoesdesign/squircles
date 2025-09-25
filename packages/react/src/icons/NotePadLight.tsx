import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.512 4.25A3.75 3.75 0 0 1 20.262 8v.586c0 .464-.184.91-.512 1.237l-7.423 7.423a6.75 6.75 0 0 1-3.45 1.846l-1.747.35a1.75 1.75 0 0 1-2.06-2.06l.35-1.747a6.75 6.75 0 0 1 1.846-3.45l7.423-7.422a1.75 1.75 0 0 1 1.237-.513zm-8.185 8.996A5.25 5.25 0 0 0 6.89 15.93l-.35 1.747c-.034.175.12.33.295.295l1.748-.35a5.25 5.25 0 0 0 2.682-1.435L16.452 11l-2.94-2.94zm7.6-7.496a.25.25 0 0 0-.178.073L14.574 7l2.94 2.94 1.176-1.177a.25.25 0 0 0 .073-.177V8a2.25 2.25 0 0 0-2.25-2.25z\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12 0 2.623-.142 4.694-.525 6.324l-.014.06C22.883 22.92 19.857 24 12.513 24c-10 0-12-2-12-12s2-12 12-12m0 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777s.125 4.342.435 5.777c.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435q1.199-.001 2.219-.044c.61-5.107 2.677-6.888 8.188-7.331.063-.919.093-1.955.093-3.125 0-2.47-.125-4.342-.434-5.777-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435m10.256 15.144c-2.488.227-3.914.735-4.802 1.533-.841.757-1.415 1.975-1.712 4.178 2.47-.226 3.893-.728 4.782-1.515q.03-.026.057-.053c.821-.76 1.383-1.973 1.675-4.143\" clip-rule=\"evenodd\"/>",
} as const;

export default function NotePadLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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