import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M104.675 13.937c11.519-15.833 35.127-15.832 46.646 0l4.458 6.125a589.8 589.8 0 0 1 95.188 203.844c4.052 16.213-13.12 29.491-27.792 21.489l-79.854-43.552a32 32 0 0 0-30.646 0l-79.854 43.552C18.15 253.396.977 240.118 5.03 223.906l1.76-6.875a589.8 589.8 0 0 1 93.428-196.969z\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M106.833 15.51c10.454-14.373 31.879-14.373 42.333 0l4.459 6.125a587.1 587.1 0 0 1 94.76 202.917c3.489 13.959-11.305 25.39-23.937 18.5L144.604 199.5a34.68 34.68 0 0 0-33.208 0l-79.844 43.552c-12.632 6.89-27.427-4.541-23.938-18.5a587.1 587.1 0 0 1 94.761-202.917zm29.396 9.407c-4.065-5.585-12.394-5.585-16.458 0l-4.459 6.124a571.1 571.1 0 0 0-92.177 197.386c-.03.118-.022.191-.02.219q0 .04.01.073c.019.051.075.155.198.25a.6.6 0 0 0 .291.125c.022.001.048.005.073 0a.8.8 0 0 0 .198-.084l79.854-43.552a50.66 50.66 0 0 1 48.521 0l79.854 43.552c.105.057.17.078.198.084.026.005.051.001.073 0a.6.6 0 0 0 .292-.125.6.6 0 0 0 .198-.25.2.2 0 0 0 .01-.073c.002-.028.009-.101-.021-.219a571.1 571.1 0 0 0-92.177-197.385z\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M104.677 13.937c11.519-15.833 35.127-15.833 46.646 0l4.458 6.125a589.8 589.8 0 0 1 95.188 203.844c4.052 16.213-13.12 29.492-27.792 21.49l-79.854-43.552a32 32 0 0 0-30.646 0l-79.854 43.552c-14.671 8.002-31.844-5.277-27.792-21.49l1.76-6.875A589.8 589.8 0 0 1 100.22 20.062zm29.396 12.553c-3-4.125-9.146-4.125-12.146 0l-4.458 6.125a568.4 568.4 0 0 0-90.52 191.677l75.51-41.178a53.35 53.35 0 0 1 51.083 0l75.5 41.178a568.4 568.4 0 0 0-90.511-191.677z\"/>",
} as const;

export default function CursorUp(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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