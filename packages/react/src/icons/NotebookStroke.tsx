import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.512 14a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zM17.512 8a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.888.006C22.713.133 24.512 2.312 24.512 12l-.006.914C24.385 22.123 22.296 24 13.012 24l-.876-.006C5.544 23.9 2.874 22.66 1.944 18h-.432a1 1 0 1 1 0-2h.15c-.082-.9-.126-1.897-.142-3h-.008a1 1 0 1 1 0-2h.008c.016-1.103.062-2.1.145-3h-.153a1 1 0 0 1 0-2h.432c.97-4.86 3.834-6 11.068-6zM13.012 2c-2.354 0-4.093.126-5.4.42-1.28.288-2.015.709-2.5 1.214-.452.472-.84 1.183-1.12 2.366h.52a1 1 0 0 1 0 2h-.84a36 36 0 0 0-.152 3h.992a1 1 0 1 1 0 2H3.52c.017 1.142.066 2.134.152 3h.84a1 1 0 1 1 0 2h-.52c.28 1.183.668 1.894 1.12 2.366.485.505 1.22.926 2.5 1.214 1.307.294 3.046.42 5.4.42s4.093-.126 5.4-.42c1.28-.288 2.016-.709 2.5-1.214.49-.512.908-1.305 1.192-2.677.287-1.39.408-3.227.408-5.689s-.12-4.298-.408-5.688c-.284-1.373-.701-2.166-1.192-2.678-.484-.505-1.22-.926-2.5-1.214-1.307-.294-3.046-.42-5.4-.42\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function NotebookStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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