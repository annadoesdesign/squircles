import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.79.401A.75.75 0 0 1 9.696 1.6c-.916.69-1.927 1.611-3.092 2.776-1.51 1.51-2.604 2.757-3.32 3.867-.712 1.103-1.02 2.026-1.02 2.9s.308 1.797 1.02 2.9c.716 1.11 1.81 2.358 3.32 3.867 1.51 1.51 2.757 2.604 3.867 3.32 1.103.712 2.027 1.021 2.9 1.021.874 0 1.798-.31 2.9-1.02 1.11-.716 2.358-1.811 3.867-3.32 1.165-1.165 2.086-2.177 2.777-3.093a.75.75 0 0 1 1.197.905c-.751.995-1.727 2.062-2.913 3.248-1.53 1.53-2.868 2.716-4.114 3.52-1.254.809-2.459 1.26-3.713 1.26s-2.46-.45-3.714-1.26c-1.247-.804-2.584-1.99-4.115-3.52-1.53-1.53-2.716-2.868-3.52-4.114-.809-1.254-1.26-2.46-1.26-3.714s.451-2.46 1.26-3.713c.804-1.247 1.99-2.584 3.52-4.114C6.728 2.129 7.795 1.153 8.791.4\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.39 1.26a19 19 0 0 1 5.858-.06l.387.06.012.003q.02.004.04.01l.063.016.023.009.042.017a.7.7 0 0 1 .19.12l.013.012.024.023.03.032.012.014a.8.8 0 0 1 .115.186 1 1 0 0 1 .04.123l.01.038q.002.008.003.014a19 19 0 0 1 0 6.246.75.75 0 0 1-1.48-.246c.235-1.409.294-2.839.182-4.259l-6.911 6.912a.745.745 0 0 1-1.113-.056.75.75 0 0 1-.154-.617.75.75 0 0 1 .206-.387l6.911-6.912a17.5 17.5 0 0 0-4.258.182.751.751 0 0 1-.246-1.48\"/>",
} as const;

export default function ComponentGoLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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