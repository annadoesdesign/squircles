import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.762 7.078c-1.148.125-1.473.374-1.619.552-.124.151-.304.475-.436 1.215-.134.744-.195 1.754-.195 3.155l.012.98c.023.91.082 1.617.183 2.175.132.74.311 1.063.435 1.214.196.24.719.609 3.145.628a2 2 0 0 1 1.471.662c1.35 1.5 2.945 2.273 4.189 2.335q.03-.03.072-.08c.213-.274.479-.795.728-1.618.232-.768.413-1.686.543-2.69l1.745 1.745C14.503 20.04 13.529 22 12.109 22c-1.993 0-4.172-1.15-5.838-3.003C1.48 18.96.512 17.738.512 12c0-4.125.5-5.916 2.56-6.611zM2.805 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 1 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414M20.754 6.343c.39-.39 1.025-.39 1.415 0a8 8 0 0 1 1.734 8.719 8 8 0 0 1-1.734 2.595 1 1 0 0 1-.897.275l-.793-.793a1 1 0 0 1 .275-.897 6 6 0 0 0 0-8.484 1 1 0 0 1 0-1.415\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.926 9.172a1 1 0 0 1 1.414 0 4 4 0 0 1 0 5.656 1 1 0 0 1-.897.274l-.792-.792a1 1 0 0 1 .275-.896 2 2 0 0 0 0-2.828 1 1 0 0 1 0-1.414M12.109 2c2.294 0 3.426 5.113 3.4 10.169l-2.057-2.058c-.105-1.675-.346-3.219-.705-4.407-.25-.823-.515-1.344-.728-1.617q-.043-.052-.072-.082c-.952.048-2.109.51-3.204 1.397l-1.42-1.42C8.798 2.738 10.513 2 12.109 2\"/>",
  light: "",
} as const;

export default function SoundOffMuteStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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