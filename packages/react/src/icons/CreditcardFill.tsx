import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M.568 9.854a84.5 84.5 0 0 1 23.888 0q.056.99.056 2.146c0 8.333-2 10-12 10s-12-1.667-12-10q-.001-1.155.056-2.146M4.512 15a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm9 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 2c8.025 0 10.895 1.074 11.717 5.804a86.5 86.5 0 0 0-23.435 0C1.616 3.074 4.488 2 12.512 2\"/>",
  regular: "",
  light: "",
} as const;

export default function CreditcardFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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