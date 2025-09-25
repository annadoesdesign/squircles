import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.512 15a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM15.512 15a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2c10 0 12 1.667 12 10l-.006.762C24.38 20.436 22.2 22 12.512 22l-.914-.005C2.686 21.893.641 20.188.518 12.762L.512 12c0-8.333 2-10 12-10m9.944 7.953a109.8 109.8 0 0 0-19.89 0A34 34 0 0 0 2.513 12c0 4.221.57 5.788 1.53 6.589.508.423 1.32.798 2.73 1.052 1.415.254 3.273.359 5.74.359s4.325-.105 5.74-.36c1.411-.253 2.222-.628 2.73-1.051.96-.8 1.53-2.368 1.53-6.589 0-.766-.019-1.444-.056-2.047M12.512 4c-2.467 0-4.325.105-5.74.36-1.41.253-2.222.628-2.73 1.051-.554.462-.976 1.18-1.236 2.514a112 112 0 0 1 19.411 0c-.26-1.335-.68-2.052-1.235-2.514-.508-.423-1.319-.798-2.73-1.052C16.837 4.105 14.98 4 12.512 4\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function CreditcardStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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