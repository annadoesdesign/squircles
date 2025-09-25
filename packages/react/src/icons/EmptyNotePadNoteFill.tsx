import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512-.003c2.312 0 4.23.114 5.797.452 1.578.34 2.866.921 3.848 1.903S23.72 4.622 24.06 6.2c.338 1.566.452 3.485.452 5.797a53 53 0 0 1-.035 1.994h.02l-.063.868-.014.18c-1.407.058-2.637.183-3.705.414-1.578.34-2.866.921-3.847 1.903-.982.981-1.563 2.27-1.904 3.848-.176.818-.291 1.733-.361 2.75l-.179.008-.896.038v-.013q-.495.009-1.016.01c-2.311 0-4.23-.115-5.797-.453-1.578-.34-2.866-.921-3.847-1.903-.982-.981-1.563-2.27-1.904-3.847-.338-1.567-.452-3.486-.452-5.797 0-2.312.114-4.23.452-5.797.34-1.578.922-2.866 1.904-3.848S5.138.79 6.715.45c1.567-.338 3.486-.452 5.797-.452\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M24.181 17.145a17 17 0 0 1-.086.466l-.052.249q-.026.12-.054.235a13 13 0 0 1-.128.482l-.056.181q-.04.131-.082.258-.028.08-.057.16-.049.137-.101.27-.032.076-.066.152-.052.127-.109.25-.027.058-.056.114-.064.136-.133.265-.04.072-.08.14-.054.098-.11.192c-.612.987-1.422 1.696-2.427 2.206l-.058.031a8 8 0 0 1-.321.15l-.069.03q-.162.069-.33.132l-.093.035a9 9 0 0 1-.782.246l-.095.026q-.187.05-.381.093l-.075.018q-.823.183-1.757.286h-.004c.065-.825.163-1.55.3-2.187.29-1.343.74-2.232 1.363-2.855.622-.622 1.511-1.072 2.855-1.362.853-.184 1.862-.299 3.059-.358z\"/>",
  regular: "",
  light: "",
} as const;

export default function EmptyNotePadNoteFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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