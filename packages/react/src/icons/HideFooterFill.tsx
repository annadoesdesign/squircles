import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M1.185 18.904a72 72 0 0 1 22.653 0C22.641 23.004 19.568 24 12.512 24s-10.13-.996-11.327-5.096\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12 0 1.932-.077 3.565-.27 4.943a74 74 0 0 0-23.461 0C.588 15.565.512 13.932.512 12c0-10 2-12 12-12m0 3a1 1 0 0 0-1 1v5.067a5.7 5.7 0 0 1-1.105-1.514 1 1 0 0 0-1.79.894 7.7 7.7 0 0 0 3.448 3.448l.017.006a1 1 0 0 0 .082.036l.016.005a1 1 0 0 0 .23.053l.102.005a1 1 0 0 0 .331-.058l.017-.005a1 1 0 0 0 .082-.036l.018-.006a7.7 7.7 0 0 0 3.447-3.448 1 1 0 0 0-1.79-.894 5.7 5.7 0 0 1-1.105 1.514V4a1 1 0 0 0-1-1\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function HideFooterFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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