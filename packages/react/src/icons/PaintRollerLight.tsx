import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M11.512-.004c6.9 0 8.72.564 8.968 3.25h2.032a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.616.738l-10.384 1.888v1.41c1.853.188 2.25 1.253 2.25 4.964 0 4.167-.5 5-3 5s-3-.833-3-5c0-3.711.397-4.776 2.25-4.965v-2.035a.75.75 0 0 1 .616-.738l10.384-1.889V4.746H20.48c-.247 2.686-2.068 3.25-8.968 3.25-7.5 0-9-.667-9-4s1.5-4 9-4m0 15.5c-.57 0-.863.052-1.015.106-.091.033-.105.052-.136.103-.065.108-.17.367-.244.944-.074.567-.105 1.322-.105 2.347s.031 1.78.105 2.347c.074.577.18.836.244.944.03.052.044.07.136.103.152.055.445.106 1.015.106s.863-.051 1.016-.106c.09-.033.105-.051.136-.103.064-.108.169-.367.244-.944.073-.566.104-1.322.104-2.347s-.031-1.78-.104-2.347c-.075-.577-.18-.836-.244-.944-.031-.051-.045-.07-.136-.103-.153-.054-.446-.106-1.016-.106m0-14c-1.862 0-3.304.042-4.427.15-1.137.109-1.84.277-2.276.471-.384.171-.515.338-.596.503-.11.228-.2.625-.2 1.376s.09 1.148.2 1.376c.08.165.212.332.596.503.437.194 1.139.363 2.276.472 1.123.107 2.565.15 4.427.15s3.305-.043 4.427-.15c1.138-.11 1.84-.278 2.276-.472.385-.17.516-.338.596-.503.11-.228.201-.625.201-1.376s-.09-1.148-.201-1.376c-.08-.165-.211-.332-.596-.503-.436-.194-1.138-.362-2.276-.471-1.122-.108-2.565-.15-4.427-.15\" clip-rule=\"evenodd\"/>",
} as const;

export default function PaintRollerLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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