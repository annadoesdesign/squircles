import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c2.67 0 6.918 1.584 7.823 8.976q.88.356 1.734.775l.574.282c.547.27.934.782 1.042 1.382.548 3.037.605 6.142.169 9.196l-.146 1.015a1 1 0 0 1-1.437.753l-2.306-1.152q-.262-.134-.521-.27C18.366 23.351 16.303 24 12.512 24s-5.856-.648-6.933-3.045q-.258.138-.52.272l-2.306 1.152a1 1 0 0 1-1.437-.753l-.145-1.015a28.8 28.8 0 0 1 .17-9.196c.108-.6.494-1.113 1.041-1.382l.574-.282q.854-.419 1.732-.775C5.593 1.584 9.843 0 12.512 0M3.84 11.545h-.002l-.537.265a26.8 26.8 0 0 0-.198 8.158l1.062-.53q.412-.208.819-.43c-.35-1.722-.472-4.004-.472-7.008q0-.398.012-.78-.344.157-.684.325M20.512 12c0 3.004-.123 5.286-.473 7.009q.407.22.82.428l1.062.53c.35-2.712.284-5.463-.198-8.157l-.536-.264-.002-.001q-.341-.168-.685-.324.01.381.012.779m-8-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function RocketShipFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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