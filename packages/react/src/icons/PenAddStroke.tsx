import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M19.01 6.014c.924.082 2.165.387 3.133 1.355s1.273 2.209 1.355 3.134c.127 1.41-.62 2.592-1.426 3.4l-7.642 7.64a7.06 7.06 0 0 1-3.83 1.972l-2.748.458A2.01 2.01 0 0 1 5.54 21.66l.458-2.748a7.06 7.06 0 0 1 1.971-3.83l7.64-7.642c.808-.807 1.99-1.552 3.4-1.426M9.382 16.496a5.06 5.06 0 0 0-1.412 2.744l-.458 2.748v.004l.002.005.004.002h.005l2.748-.458a5.06 5.06 0 0 0 2.744-1.412l5.606-5.606-3.633-3.632zm9.449-8.49c-.574-.051-1.205.246-1.807.848l-.622.623 3.633 3.632.622-.622c.602-.602.9-1.232.848-1.806-.061-.689-.274-1.395-.777-1.898s-1.209-.716-1.898-.777\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.512 0a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0V6h-3a1 1 0 0 1 0-2h3V1a1 1 0 0 1 1-1\"/>",
  light: "",
} as const;

export default function PenAddStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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