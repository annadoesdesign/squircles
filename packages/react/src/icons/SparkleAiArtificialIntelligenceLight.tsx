import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.678 18.584a.827.827 0 0 1 1.169 0c.109.109.194.24.249.384l.3.778a.2.2 0 0 0 .12.12l.778.299c.144.055.275.14.384.25a.827.827 0 0 1 0 1.169c-.109.109-.24.194-.384.249l-.778.3a.2.2 0 0 0-.12.12l-.3.778c-.055.144-.14.275-.25.384a.827.827 0 0 1-1.168 0 1.1 1.1 0 0 1-.25-.384l-.299-.778a.2.2 0 0 0-.12-.12l-.778-.3a1.1 1.1 0 0 1-.384-.25.827.827 0 0 1 0-1.168c.109-.11.24-.195.384-.25l.777-.299a.21.21 0 0 0 .121-.12l.299-.778c.055-.144.14-.275.25-.384\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M8.588 2.612a3.78 3.78 0 0 1 5.348 0A4.8 4.8 0 0 1 15.02 4.28l1.097 2.853a.02.02 0 0 0 .011.01l2.853 1.098c.625.24 1.194.61 1.668 1.084a3.78 3.78 0 0 1 0 5.348 4.8 4.8 0 0 1-1.668 1.084l-2.853 1.097a.02.02 0 0 0-.01.011l-1.098 2.853a4.8 4.8 0 0 1-1.084 1.668 3.78 3.78 0 0 1-5.348 0 4.8 4.8 0 0 1-1.084-1.668l-1.097-2.853a.02.02 0 0 0-.011-.01l-2.853-1.098a4.8 4.8 0 0 1-1.668-1.084 3.78 3.78 0 0 1 0-5.348 4.8 4.8 0 0 1 1.668-1.084l2.853-1.098a.02.02 0 0 0 .01-.01L7.505 4.28c.24-.625.61-1.194 1.084-1.668m4.287 1.06a2.28 2.28 0 0 0-3.226 0c-.326.326-.58.717-.745 1.146L7.807 7.672a1.52 1.52 0 0 1-.872.872L4.08 9.64c-.43.166-.82.42-1.145.746-.891.89-.89 2.335 0 3.226.325.326.716.58 1.145.745l2.854 1.097c.4.154.718.471.872.872l1.097 2.854c.165.43.42.82.745 1.145.89.891 2.335.891 3.226 0 .326-.325.58-.716.745-1.145l1.097-2.854c.154-.4.471-.718.872-.872l2.854-1.097c.43-.165.82-.42 1.145-.745a2.28 2.28 0 0 0 0-3.226 3.3 3.3 0 0 0-1.145-.746l-2.854-1.096a1.52 1.52 0 0 1-.872-.872L13.62 4.818c-.165-.43-.42-.82-.745-1.145\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20.678.584a.827.827 0 0 1 1.169 0c.109.109.194.24.249.384l.3.778a.2.2 0 0 0 .12.12l.778.299c.144.055.275.14.384.25a.827.827 0 0 1 0 1.169c-.109.109-.24.193-.384.249l-.778.3a.2.2 0 0 0-.12.12l-.3.778c-.055.144-.14.275-.25.384a.827.827 0 0 1-1.168 0 1.1 1.1 0 0 1-.25-.384l-.299-.778a.2.2 0 0 0-.12-.12l-.778-.3a1.1 1.1 0 0 1-.384-.25.827.827 0 0 1 0-1.168c.109-.11.24-.195.384-.25l.777-.299a.21.21 0 0 0 .121-.12l.299-.778c.055-.144.14-.275.25-.384\"/>",
} as const;

export default function SparkleAiArtificialIntelligenceLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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