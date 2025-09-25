import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M22.512 22a1 1 0 1 1 0 2h-20a1 1 0 0 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M19.01 1.014c.924.083 2.165.388 3.133 1.355.968.968 1.273 2.21 1.355 3.134.127 1.411-.62 2.593-1.426 3.4l-7.642 7.64a7.06 7.06 0 0 1-3.83 1.972l-2.748.458a2.01 2.01 0 0 1-2.312-2.312l.458-2.749a7.06 7.06 0 0 1 1.971-3.83l7.64-7.641c.808-.807 1.99-1.553 3.4-1.427M9.382 11.496a5.06 5.06 0 0 0-1.412 2.745l-.458 2.748v.003l.002.005.004.002h.005l2.748-.458a5.06 5.06 0 0 0 2.744-1.412l5.606-5.605-3.633-3.633zm9.449-8.49c-.574-.051-1.205.247-1.807.849l-.622.622 3.633 3.633.622-.622c.602-.602.9-1.233.848-1.807-.061-.688-.274-1.395-.777-1.897-.503-.503-1.21-.716-1.898-.778\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function PenEditStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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