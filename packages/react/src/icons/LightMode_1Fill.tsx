import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 21a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M4.734 18.364a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414zM18.877 18.364a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.415 1.414l-.706-.707a1 1 0 0 1 0-1.414M12.512 5c4.2 0 7 2.8 7 7 0 3.866-2.8 7-7 7s-7-2.8-7-7 2.8-7 7-7M2.512 11a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM23.512 11a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.027 3.515a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414M19.584 3.515a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 1 1-1.415-1.414zM12.512 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1\"/>",
  regular: "",
  light: "",
} as const;

export default function LightMode_1Fill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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