import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M5.525 13c.135 4.652 1.335 5.852 5.988 5.986v5.006C2.702 23.858.655 21.81.52 13zM19.513 13h4.99c-.133 8.81-2.18 10.857-10.99 10.992v-5.006c4.652-.134 5.851-1.334 5.985-5.988z\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M12.513 7c1.418 0 2.415.074 3.133.229.695.15.989.347 1.14.498s.348.446.498 1.14c.155.719.229 1.715.229 3.133 0 1.419-.074 2.415-.229 3.133-.15.696-.346.99-.498 1.14-.151.152-.445.349-1.14.499-.629.136-1.47.208-2.622.225l-.511.003-.513-.003c-1.15-.017-1.992-.09-2.62-.225-.695-.15-.99-.347-1.14-.498-.152-.151-.349-.446-.499-1.14-.155-.719-.228-1.715-.228-3.133 0-1.419.073-2.415.228-3.133.15-.696.347-.99.498-1.141s.445-.348 1.14-.498C10.099 7.074 11.095 7 12.514 7\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M11.513 5.013c-4.653.134-5.853 1.335-5.988 5.988H.521C.655 2.189 2.7.14 11.513.007zM13.513.007C22.323.142 24.37 2.19 24.503 11h-5.005c-.134-4.652-1.334-5.853-5.985-5.987z\"/>",
  regular: "",
  light: "",
} as const;

export default function HelpSosFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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