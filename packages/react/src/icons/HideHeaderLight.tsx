import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 10.25a1 1 0 0 1 .081.004l.034.006.04.007a.7.7 0 0 1 .156.051l.024.011a7.46 7.46 0 0 1 3.336 3.336.75.75 0 0 1-1.342.67 5.95 5.95 0 0 0-1.579-1.963V18a.75.75 0 0 1-1.5 0v-5.628a5.95 5.95 0 0 0-1.579 1.963.75.75 0 0 1-1.342-.67 7.46 7.46 0 0 1 3.336-3.336l.024-.01a.7.7 0 0 1 .14-.05l.02-.003q.018-.004.037-.006.015-.004.032-.006a1 1 0 0 1 .082-.004\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m10.304 7.735a110 110 0 0 0-20.608 0c-.135 1.179-.196 2.583-.196 4.265 0 2.47.125 4.342.435 5.777.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435s4.343-.125 5.778-.435c1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.31-1.435.434-3.307.434-5.777 0-1.682-.061-3.086-.196-4.265M12.512 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.604.603-1.067 1.487-1.373 2.896a111.5 111.5 0 0 1 20.124 0c-.306-1.409-.769-2.293-1.372-2.896-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function HideHeaderLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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