import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M4.512 17c1.258 0 1.756.19 1.925 1h17.075a1 1 0 1 1 0 2H6.437c-.169.81-.667 1-1.925 1s-1.756-.19-1.925-1H1.512a1 1 0 1 1 0-2h1.075c.17-.81.667-1 1.925-1M20.512 10c1.258 0 1.756.19 1.925 1h1.075a1 1 0 1 1 0 2h-1.075c-.169.81-.667 1-1.925 1s-1.756-.19-1.925-1H1.512a1 1 0 1 1 0-2h17.075c.17-.81.667-1 1.925-1M4.512 3c1.258 0 1.756.19 1.925 1h17.075a1 1 0 1 1 0 2H6.437c-.169.81-.667 1-1.925 1s-1.756-.19-1.925-1H1.512a1 1 0 0 1 0-2h1.075c.17-.81.667-1 1.925-1\"/>",
  regular: "",
  light: "",
} as const;

export default function FilterFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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