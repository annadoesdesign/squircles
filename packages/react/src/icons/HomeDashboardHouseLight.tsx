import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c3.795 0 8.742 5.185 10.907 7.684.727.84 1.093 1.919 1.093 3.03V16c0 5.9-1.387 6.824-7.628 6.97a82 82 0 0 1-2.05.025 557 557 0 0 1-5.292-.004 112 112 0 0 1-1.413-.022C1.898 22.822.512 21.896.512 16v-5.285c0-1.043.322-2.056.962-2.871l.132-.16C3.77 5.184 8.717 0 12.512 0m0 13.5c-2.023 0-2.511.35-2.79.795-.201.322-.397.872-.528 1.843-.13.96-.182 2.213-.182 3.862q0 .802.018 1.486c1.024.013 2.177.014 3.482.014s2.457 0 3.482-.014q.018-.685.018-1.486c0-1.649-.052-2.902-.181-3.862-.131-.971-.327-1.52-.529-1.843-.26-.418-.706-.751-2.428-.791zm0-12c-.623 0-1.402.218-2.32.686-.906.46-1.858 1.12-2.799 1.883C5.51 5.6 3.797 7.445 2.74 8.666c-.47.543-.728 1.264-.728 2.049V16c0 1.74.13 2.851.386 3.589.224.644.532.977 1.028 1.223.596.294 1.535.493 3.09.593q.478.03 1.013.048A59 59 0 0 1 7.512 20c0-6.667.834-8 5-8s5 1.333 5 8q0 .774-.018 1.453a35 35 0 0 0 1.015-.048c1.555-.1 2.493-.299 3.09-.594.495-.245.803-.578 1.027-1.222.257-.738.386-1.848.386-3.589v-5.285c0-.785-.257-1.506-.727-2.049-1.058-1.22-2.77-3.068-4.654-4.597-.941-.764-1.892-1.422-2.799-1.883-.918-.468-1.697-.686-2.32-.686\" clip-rule=\"evenodd\"/>",
} as const;

export default function HomeDashboardHouseLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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