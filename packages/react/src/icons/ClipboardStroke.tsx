import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16.512 14a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM16.512 10a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.552.009c4.448.077 5.72.719 5.927 3.134l.22.132c2.225 1.423 2.813 4.28 2.813 9.725l-.005.838C22.402 22.279 20.585 24 12.512 24l-.761-.006C4.076 23.878 2.512 21.88 2.512 13c0-5.62.627-8.484 3.032-9.858C5.768.549 7.22 0 12.512 0zM5.67 5.655c-.317.444-.6 1.102-.804 2.144-.249 1.267-.354 2.945-.354 5.201s.105 3.934.354 5.201c.246 1.254.604 1.954 1 2.39.797.876 2.4 1.409 6.646 1.409s5.85-.533 6.646-1.408c.396-.437.755-1.137 1-2.39.25-1.268.354-2.946.354-5.202s-.105-3.934-.353-5.201c-.205-1.042-.489-1.7-.806-2.144l.004-.02C18.892 7.565 17.228 8 12.512 8l-1.04-.008c-3.951-.068-5.395-.583-5.814-2.39zM12.512 2c-1.436 0-2.504.042-3.31.142-.821.1-1.21.244-1.385.344-.098.056-.12.083-.16.189-.072.19-.145.57-.145 1.325 0 .756.073 1.134.145 1.325.04.106.062.133.16.189.175.1.564.243 1.386.344.805.1 1.873.142 3.31.142 1.436 0 2.504-.042 3.309-.142.822-.1 1.21-.244 1.386-.344.097-.056.12-.083.16-.189.072-.19.144-.57.144-1.325 0-.756-.072-1.134-.144-1.325-.04-.106-.063-.133-.16-.189-.175-.1-.564-.243-1.386-.344-.805-.1-1.873-.142-3.31-.142M5.521 4.467l.002.044A12 12 0 0 1 5.513 4z\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function ClipboardStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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