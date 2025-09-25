import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.928 18.584a.827.827 0 0 1 1.169 0c.109.109.194.24.249.384l.3.778a.2.2 0 0 0 .12.12l.778.299c.144.055.275.14.384.25a.827.827 0 0 1 0 1.169c-.109.109-.24.194-.384.249l-.778.3a.2.2 0 0 0-.12.12l-.3.778c-.055.144-.14.275-.25.384a.827.827 0 0 1-1.168 0 1.1 1.1 0 0 1-.25-.384l-.299-.778a.2.2 0 0 0-.121-.12l-.777-.3a1.1 1.1 0 0 1-.384-.25.827.827 0 0 1 0-1.168c.109-.11.24-.195.384-.25l.777-.299a.21.21 0 0 0 .121-.12l.299-.778c.055-.144.14-.275.25-.384\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M8.661 2.435a4.03 4.03 0 0 1 5.702 0 5 5 0 0 1 1.14 1.755l1.06 2.756 2.758 1.062a5 5 0 0 1 1.754 1.14 4.03 4.03 0 0 1 0 5.702 5 5 0 0 1-1.755 1.14l-2.756 1.06-1.06 2.758a5 5 0 0 1-1.141 1.754 4.03 4.03 0 0 1-5.702 0 5 5 0 0 1-1.14-1.755l-1.062-2.756-2.756-1.06a5 5 0 0 1-1.755-1.141 4.03 4.03 0 0 1 0-5.702 5 5 0 0 1 1.755-1.14L6.46 6.946 7.521 4.19a5 5 0 0 1 1.14-1.755M12.95 3.85a2.03 2.03 0 0 0-2.874 0c-.3.301-.535.662-.688 1.06L8.29 7.761a1.77 1.77 0 0 1-1.015 1.015L4.42 9.874a3 3 0 0 0-1.058.688 2.03 2.03 0 0 0 0 2.873c.3.301.661.536 1.058.689l2.854 1.097c.408.157.742.46.94.845l.075.17 1.097 2.854c.153.397.388.758.688 1.058.794.794 2.08.794 2.874 0 .3-.3.535-.661.688-1.058l1.097-2.854a1.77 1.77 0 0 1 1.015-1.015l2.854-1.097a3 3 0 0 0 1.058-.689 2.03 2.03 0 0 0 0-2.873c-.3-.3-.661-.535-1.058-.688l-2.854-1.097a1.77 1.77 0 0 1-1.015-1.015l-1.097-2.854a3 3 0 0 0-.689-1.059\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.928.584a.827.827 0 0 1 1.169 0c.109.109.194.24.249.384l.3.778a.2.2 0 0 0 .12.12l.778.299c.144.055.275.14.384.25a.827.827 0 0 1 0 1.169c-.109.109-.24.193-.384.249l-.778.3a.2.2 0 0 0-.12.12l-.3.778c-.055.144-.14.275-.25.384a.827.827 0 0 1-1.168 0 1.1 1.1 0 0 1-.25-.384l-.299-.778a.2.2 0 0 0-.121-.12l-.777-.3a1.1 1.1 0 0 1-.384-.25.827.827 0 0 1 0-1.168c.109-.11.24-.195.384-.25l.777-.299a.2.2 0 0 0 .121-.12l.299-.778c.055-.144.14-.275.25-.384\"/>",
  light: "",
} as const;

export default function SparkleAiArtificialIntelligenceStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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