import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M10.619 2.07c.597-1.043 1.876-1.674 2.95-1.136C17.233 2.771 24.512 7.266 24.512 14c0 6.627-5.372 10-12 10l-.617-.01C5.555 23.786.512 20.42.512 14c0-2 2-6 6-8 1.967-.983 3.208-2.45 3.962-3.687zm2.549 8.219c-.058-.031-.168-.066-.393.021a1.7 1.7 0 0 0-.72.583 7.9 7.9 0 0 1-2.872 2.449 6.37 6.37 0 0 0-2.423 2.157c-.571.857-.748 1.567-.748 1.834 0 1.754.687 2.978 1.758 3.802 1.117.86 2.766 1.365 4.742 1.365s3.625-.505 4.742-1.365c1.071-.825 1.758-2.048 1.758-3.802 0-1.53-.753-2.92-1.94-4.164-1.185-1.244-2.692-2.22-3.904-2.88m-.271-8.014c-.083-.041-.208-.063-.404.019a1.25 1.25 0 0 0-.574.521c-.835 1.458-2.3 3.31-4.736 4.527-1.733.866-3.045 2.174-3.923 3.49C2.355 12.189 2.012 13.4 2.012 14c0 2.858 1.135 4.915 2.93 6.297q.18.14.373.27.068.118.14.232c-.6-.948-.943-2.103-.943-3.466 0-1.333 1.334-4 4-5.333a6.4 6.4 0 0 0 2.328-1.988c.706-.972 1.99-1.614 3.044-1.04 2.562 1.393 6.628 4.252 6.628 8.36 0 1.254-.29 2.332-.803 3.234q.192-.13.373-.27c1.795-1.38 2.93-3.438 2.93-6.296 0-2.794-1.508-5.236-3.639-7.29-2.122-2.045-4.707-3.548-6.476-4.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function FireLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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