import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M18.1 2.017a.75.75 0 0 1 .895.57 42.2 42.2 0 0 1 0 18.326.751.751 0 0 1-1.465-.326c.537-2.415.85-4.867.94-7.325a59 59 0 0 1-12.474 6.842l-.635.254a.947.947 0 0 1-1.28-.693 40.4 40.4 0 0 1 0-15.83l.027-.106a.95.95 0 0 1 1.15-.623l.103.036.635.253a59 59 0 0 1 12.475 6.842 40.7 40.7 0 0 0-.94-7.324.75.75 0 0 1 .568-.896M5.427 4.784a38.9 38.9 0 0 0 0 13.93l.01-.002a57.4 57.4 0 0 0 12.565-6.962A57.4 57.4 0 0 0 5.438 4.788z\" clip-rule=\"evenodd\"/>",
} as const;

export default function SkipForwardLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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