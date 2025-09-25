import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.602 0c2 0 8 0 10 2 1.805 1.804 2.315 6.051 1.296 7.599.391.712.614 1.53.614 2.401v6c0 .8-.313 1.527-.823 2.064-.283.658-.646 1.245-1.087 1.686-2 2-8 2-10 2s-8 0-10-2C1.541 20.688.876 18.781.71 17.076A3 3 0 0 1 .512 16v-3.162c0-.662.107-1.321.317-1.95l.388-1.167C.106 8.288.747 3.854 2.602 2c2-2 8-2 10-2m9.415 10.353c-4.052.525-14.745.53-18.907.012l-.384 1.156a4.2 4.2 0 0 0-.214 1.317V16a1 1 0 1 0 2 0v-2a1 1 0 1 1 2 0v4a1 1 0 0 0 2 .023V14.5a2.5 2.5 0 0 1 5 0V16a1 1 0 1 0 2 0v-2.5a2.5 2.5 0 0 1 5 0V18a1 1 0 1 0 2 0v-6c0-.609-.183-1.174-.495-1.648\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function BurgerCheeseFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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