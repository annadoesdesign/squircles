import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.512 12a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M15.512 12a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.893.006c2.29.07 3.486.81 4.083 3.282 4.504.774 5.536 3.325 5.536 10.212l-.005.8c-.105 8.058-1.922 9.7-9.995 9.7l-.761-.005c-7.675-.11-9.239-2.018-9.239-10.495 0-6.885 1.032-9.435 5.532-10.21C8.674.682 9.972 0 12.512 0zm7.537 10.7a27.46 27.46 0 0 0-15.837 0 41 41 0 0 0-.08 2.794c0 2.15.104 3.738.349 4.93.241 1.175.59 1.82.973 2.222.376.394.962.743 2.04.988 1.107.25 2.596.36 4.637.36 2.042 0 3.53-.11 4.637-.36 1.078-.245 1.665-.594 2.04-.988.384-.402.732-1.047.974-2.222.244-1.192.35-2.78.35-4.93 0-1.062-.028-1.986-.083-2.794M12.512 5c-2.041 0-3.53.11-4.637.36-1.078.245-1.664.594-2.04.988-.38.4-.728 1.04-.97 2.2a29.46 29.46 0 0 1 15.293 0c-.242-1.16-.588-1.8-.969-2.2-.375-.394-.962-.743-2.04-.988-1.107-.25-2.595-.36-4.637-.36m0-3c-.936 0-1.416.11-1.681.236-.18.086-.364.22-.561.654q-.037.08-.072.17Q11.258 3 12.512 3l.762.005q.82.012 1.55.054a3 3 0 0 0-.07-.17c-.197-.433-.38-.567-.56-.653-.265-.125-.746-.236-1.682-.236\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function BookBagBackPackStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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