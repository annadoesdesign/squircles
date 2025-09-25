import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M.551 9.857a84.5 84.5 0 0 1 23.922 0q.04 1.005.04 2.144c0 10-2 12-12 12s-12-2-12-12q0-1.14.038-2.144M6.788.397a17.3 17.3 0 0 1-.065 6.45l-.072.357q-2.99.203-5.964.614c.48-4.644 2.06-6.662 6.1-7.421M18.236.397c4.041.76 5.62 2.777 6.1 7.42a87 87 0 0 0-5.963-.613l-.072-.357a17.3 17.3 0 0 1-.065-6.45M12.512 0c1.398 0 2.639.042 3.74.136-.4 2.3-.38 4.655.06 6.953a87 87 0 0 0-7.6 0c.44-2.298.459-4.654.059-6.953A44 44 0 0 1 12.512 0\"/>",
  regular: "",
  light: "",
} as const;

export default function HeaderFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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