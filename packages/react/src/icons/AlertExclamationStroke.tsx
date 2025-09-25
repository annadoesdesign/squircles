import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 16c.834 0 1 .167 1 1s-.166 1-1 1c-.833 0-1-.167-1-1s.167-1 1-1M12.512 6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 1c8.304 0 14.587 15.583 10.94 19.25l-.178.169c-3.858 3.441-17.665 3.441-21.523 0l-.18-.169C-2.074 16.583 4.209 1 12.513 1m0 2c-1.427 0-2.923.67-4.393 1.983-1.466 1.31-2.774 3.148-3.766 5.154-.992 2.007-1.612 4.069-1.789 5.765-.19 1.831.178 2.689.426 2.938.51.513 1.657 1.093 3.487 1.526 1.757.416 3.877.634 6.035.634s4.279-.218 6.035-.634c1.83-.433 2.977-1.013 3.488-1.526.247-.25.616-1.107.425-2.938-.176-1.696-.796-3.758-1.789-5.765-.991-2.006-2.3-3.844-3.765-5.154C15.436 3.67 13.94 3 12.512 3\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function AlertExclamationStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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