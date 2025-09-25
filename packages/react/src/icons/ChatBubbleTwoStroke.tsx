import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.512 0c6.667 0 8 1.333 8 8 0 2.422-.178 4.139-.721 5.345.074.418.186.817.375 1.163l.284.52c.175.32-.035.705-.42.769-1.24.206-2.987.3-4.516.06-.855.101-1.848.143-3.002.143 0 6.667-1.333 8-8 8-1.153 0-2.147-.042-3.002-.143-1.529.24-3.276.146-4.515-.06-.385-.064-.595-.45-.42-.77l.284-.52c.189-.345.3-.744.375-1.162C.69 20.139.512 18.422.512 16c0-6.667 1.334-8 8-8 0-6.667 1.334-8 8-8m-8 10c-1.627 0-2.79.084-3.64.268-.829.178-1.221.422-1.446.646s-.468.617-.646 1.445c-.184.851-.268 2.014-.268 3.641 0 2.416.194 3.744.545 4.523.166.367.216.776.146 1.172q-.027.144-.062.297c.692.02 1.41-.009 2.06-.11l.135-.017q.204-.018.408.006C6.492 21.96 7.4 22 8.512 22c1.627 0 2.79-.084 3.64-.268.83-.178 1.222-.422 1.446-.646s.468-.617.647-1.445c.183-.851.267-2.014.267-3.641s-.084-2.79-.267-3.64c-.179-.829-.422-1.222-.647-1.446-.224-.224-.617-.468-1.445-.646-.851-.184-2.014-.268-3.64-.268m8-8c-1.627 0-2.79.084-3.64.268-.829.178-1.221.422-1.446.646s-.468.617-.646 1.445c-.184.851-.268 2.014-.268 3.641v.054l-.067-.004c4.389.255 5.746 1.592 6.012 5.949l.055.001c1.112 0 2.02-.04 2.769-.129a2 2 0 0 1 .407-.006l.136.017c.65.101 1.368.13 2.06.11q-.035-.152-.062-.297a2 2 0 0 1 .145-1.172c.351-.779.545-2.107.545-4.523 0-1.627-.084-2.79-.267-3.64-.179-.829-.422-1.222-.647-1.446-.224-.224-.617-.468-1.445-.646-.851-.184-2.014-.268-3.64-.268\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function ChatBubbleTwoStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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