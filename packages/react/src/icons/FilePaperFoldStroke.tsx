import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.512 16a1 1 0 1 1 0 2h-10a1 1 0 1 1 0-2zM17.512 12a1 1 0 1 1 0 2h-10a1 1 0 1 1 0-2zM11.512 8a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.213.005q.34.004.664.016.09.002.18.014l.028.005q.07.01.138.025l.08.022a2 2 0 0 1 .166.053q.026.008.052.018V.16c.248.101.476.252.667.447l6.683 6.82c.162.166.293.358.387.565l.001.001c.096.21.154.438.168.672q.021.356.036.729.002.039.003.079.011.253.019.515h-.002q.03.947.03 2.012c0 10-1.668 12-10 12-8.334 0-10-2-10-12s1.666-12 10-12h.006zM12.513 2c-4.222 0-5.79.57-6.59 1.53-.423.508-.798 1.32-1.051 2.73-.255 1.415-.36 3.272-.36 5.74s.105 4.325.36 5.74c.253 1.41.628 2.222 1.051 2.73.8.96 2.368 1.53 6.59 1.53 4.22 0 5.788-.57 6.588-1.53.423-.508.798-1.32 1.052-2.73.254-1.415.36-3.272.36-5.74q-.001-1.078-.031-2.014c-1.378-.037-2.529-.156-3.485-.401-1.223-.314-2.131-.833-2.797-1.648a4.7 4.7 0 0 1-.45-.656c-.407-.713-.693-1.6-.886-2.695A22 22 0 0 1 12.585 2zm2.147.926a17 17 0 0 0 .174 1.312c.197 1.12.475 1.807.78 2.253q.066.098.134.18c.328.401.82.734 1.706.966.541.142 1.23.245 2.119.304z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function FilePaperFoldStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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