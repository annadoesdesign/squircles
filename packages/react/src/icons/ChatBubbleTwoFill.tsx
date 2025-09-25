import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M8.512 8c6.667 0 8 1.333 8 8s-1.333 8-8 8c-1.153 0-2.147-.042-3.002-.143-1.529.24-3.276.146-4.515-.06-.385-.064-.595-.45-.42-.77l.284-.52c.189-.345.3-.744.375-1.162C.69 20.139.512 18.422.512 16c0-6.667 1.334-8 8-8\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M16.512 0c6.667 0 8 1.333 8 8 0 2.422-.178 4.139-.721 5.345.074.418.186.817.375 1.163l.284.52c.175.32-.035.704-.42.769-1.24.206-2.987.3-4.516.06-.315.038-.65.063-1.003.085C18.503 7.677 16.833 6.007 8.566 6c.302-4.942 2.008-6 7.946-6\"/>",
  regular: "",
  light: "",
} as const;

export default function ChatBubbleTwoFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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