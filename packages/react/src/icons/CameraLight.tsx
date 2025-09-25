import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.255 9.51c3.525.108 4.257 1.084 4.257 4.99l-.01.743c-.107 3.525-1.084 4.257-4.99 4.257l-.743-.01c-3.29-.1-4.146-.957-4.246-4.247l-.01-.743c0-4.167.833-5 5-5zM12.512 11c-1.012 0-1.717.052-2.222.161-.489.106-.684.242-.78.337s-.231.29-.337.78c-.109.505-.16 1.21-.16 2.222s.051 1.717.16 2.223c.106.488.242.684.337.779s.291.232.78.337c.505.109 1.21.161 2.222.161s1.718-.052 2.223-.161c.488-.105.684-.242.78-.337s.23-.29.336-.78c.109-.505.161-1.21.161-2.222s-.052-1.717-.16-2.223c-.106-.488-.242-.684-.338-.779-.095-.095-.29-.231-.78-.337-.504-.109-1.21-.161-2.222-.161\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.5 1c4.164 0 5.95.68 6.63 3.495q.901.198 1.62.493a.75.75 0 0 1 1.5.012v.867c1.76 1.457 2.262 3.958 2.262 8.133 0 8.333-2 10-12 10s-12-1.667-12-10c0-6.003 1.038-8.546 5.356-9.499C6.548 1.681 8.332 1 12.499 1m0 1.5c-2.073 0-3.246.183-3.957.536-.554.275-.952.715-1.217 1.817A1.5 1.5 0 0 1 6.19 5.966C4.31 6.38 3.426 7.062 2.896 8.06c-.61 1.148-.884 2.95-.884 5.939 0 4.207.552 6.008 1.71 6.973.6.5 1.505.898 2.962 1.16 1.46.262 3.353.367 5.828.367s4.369-.105 5.828-.367c1.457-.262 2.363-.66 2.962-1.16 1.086-.905 1.639-2.544 1.703-6.212l.007-.761c0-2.995-.274-4.798-.887-5.946-.532-.999-1.422-1.68-3.315-2.093a1.5 1.5 0 0 1-1.138-1.113c-.265-1.099-.663-1.538-1.217-1.813-.711-.352-1.884-.535-3.955-.535\" clip-rule=\"evenodd\"/>",
} as const;

export default function CameraLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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