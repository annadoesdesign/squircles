import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 10q.104 0 .201.02l.028.006.022.006q.04.01.08.025l.017.005q.042.016.082.036l.018.007a7.7 7.7 0 0 1 3.447 3.448 1 1 0 0 1-1.79.894 5.7 5.7 0 0 0-1.105-1.515V18a1 1 0 1 1-2 0v-5.068a5.7 5.7 0 0 0-1.105 1.515 1 1 0 0 1-1.79-.894 7.7 7.7 0 0 1 3.448-3.448l.017-.007a1 1 0 0 1 .082-.036l.016-.005a1 1 0 0 1 .332-.057\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m9.83 7.988a99.5 99.5 0 0 0-19.66 0c-.117 1.11-.17 2.43-.17 4.012 0 2.46.126 4.29.424 5.672.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.382.298 3.212.424 5.672.424s4.29-.126 5.672-.424c1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.298-1.382.424-3.212.424-5.672 0-1.582-.053-2.903-.17-4.012M12.512 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24-.465.466-.86 1.153-1.15 2.282 6.31-.592 12.661-.592 18.97 0-.288-1.128-.682-1.816-1.148-2.282-.516-.516-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function HideHeaderStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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