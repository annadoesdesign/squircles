import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M21.454 8.259c.502 0 .927.376.965.878.065.853.093 1.804.093 2.863 0 8.333-1.666 10-10 10-3.412 0-5.705-.28-7.224-1.183q.183.64.481 1.238l.12.238a1 1 0 0 1-1.789.895l-.119-.239a9.34 9.34 0 0 1-.987-4.178c0-.397.225-.76.58-.938l.183-.093a9.5 9.5 0 0 1 4.238-1 1.001 1.001 0 0 1-.001 2.001 7.5 7.5 0 0 0-1.871.239c.373.262.91.497 1.733.674 1.116.241 2.613.346 4.656.346 2.044 0 3.54-.105 4.657-.346 1.093-.236 1.684-.573 2.054-.943s.708-.96.944-2.055c.24-1.116.345-2.612.345-4.656 0-.995-.025-1.861-.079-2.616-.042-.598.422-1.125 1.02-1.125M19.065.364a1 1 0 0 1 1.342.449l.118.237a9.35 9.35 0 0 1 .988 4.179c0 .397-.225.76-.58.938l-.184.092a9.5 9.5 0 0 1-4.237 1 1 1 0 0 1 0-2c.758 0 1.509-.117 2.228-.342-.363-.22-.86-.418-1.571-.571C16.052 4.105 14.556 4 12.512 4s-3.54.105-4.656.346c-1.094.236-1.685.573-2.055.943s-.707.96-.943 2.055C4.618 8.46 4.512 9.957 4.512 12q0 .636.015 1.202a1.024 1.024 0 0 1-1.015 1.057.98.98 0 0 1-.984-.947A50 50 0 0 1 2.512 12c0-8.333 1.667-10 10-10 2.979 0 5.104.214 6.608.868a7 7 0 0 0-.383-.924l-.12-.238a1 1 0 0 1 .448-1.342\"/>",
  regular: "",
  light: "",
} as const;

export default function ArrowRepeatFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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