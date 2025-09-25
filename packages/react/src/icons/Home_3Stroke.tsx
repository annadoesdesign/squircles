import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.067.104a1 1 0 0 1 1.026.082l1.79 1.279a47.1 47.1 0 0 1 9.41 8.91 1 1 0 0 1-1.562 1.25q-.15-.188-.303-.373c.058.824.084 1.737.084 2.748 0 7.991-1.533 9.85-9.007 9.99a.876.876 0 0 0 .856-.806c.066-.785.15-1.983.15-2.876 0-.753-.06-1.72-.117-2.476a1.87 1.87 0 0 0-1.258-1.616 1.9 1.9 0 0 0-1.248 0 1.87 1.87 0 0 0-1.258 1.616 36 36 0 0 0-.118 2.476c0 .767.062 1.757.12 2.519.044.566-.383 1.056-.934 1.077l-.112-.002c-5.813-.45-7.074-2.654-7.074-9.902 0-1.01.025-1.924.083-2.747q-.152.184-.302.372a1.001 1.001 0 0 1-1.562-1.25 47.1 47.1 0 0 1 9.41-8.91L11.93.186zm-.763 2.988A45 45 0 0 0 5.126 8.41c-.098.262-.19.57-.268.933-.241 1.116-.346 2.612-.346 4.656 0 3.67.358 5.427 1.005 6.366.426.62 1.177 1.134 3.042 1.41a35 35 0 0 1-.035-.802l-.012-.666c0-.834.066-1.866.124-2.628l.033-.29a3.87 3.87 0 0 1 2.564-3.064l.314-.095a3.9 3.9 0 0 1 1.93 0l.313.095.265.103a3.86 3.86 0 0 1 2.333 3.25c.043.573.092 1.296.113 1.973l.01.656c0 .453-.02.968-.048 1.468 1.611-.237 2.394-.65 2.854-1.167.343-.386.659-1 .878-2.09.22-1.104.317-2.562.317-4.52 0-2.043-.105-3.539-.346-4.655a7 7 0 0 0-.27-.934 45 45 0 0 0-6.176-5.318l-1.208-.864z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function Home_3Stroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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