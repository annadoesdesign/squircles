import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.512 0c6.667 0 8 1.333 8 8 0 2.422-.178 4.139-.721 5.345.074.418.186.817.375 1.163l.284.52c.175.32-.035.705-.42.769-1.24.206-2.987.3-4.516.06-.855.101-1.848.143-3.002.143 0 6.667-1.333 8-8 8-1.153 0-2.147-.042-3.002-.143-1.529.24-3.276.146-4.515-.06-.385-.064-.595-.45-.42-.77l.284-.52c.189-.345.3-.744.375-1.162C.69 20.139.512 18.422.512 16c0-6.667 1.334-8 8-8 0-6.667 1.334-8 8-8m-8 9.5c-1.637 0-2.842.083-3.746.278-.887.192-1.38.468-1.693.782-.314.315-.591.807-.782 1.694-.195.904-.279 2.11-.279 3.746 0 2.417.19 3.843.59 4.729a1.5 1.5 0 0 1 .108.878 6 6 0 0 1-.21.853c.898.063 1.893.054 2.779-.085l.203-.018q.102 0 .203.011c.775.091 1.705.132 2.827.132 1.637 0 2.843-.083 3.746-.278.887-.192 1.38-.469 1.694-.783s.59-.806.782-1.693c.195-.904.278-2.11.278-3.746s-.083-2.842-.278-3.746c-.191-.887-.468-1.38-.782-1.694s-.807-.59-1.694-.782c-.903-.195-2.109-.278-3.746-.278m8-8c-1.637 0-2.842.083-3.746.278-.887.192-1.38.468-1.693.783-.314.314-.591.806-.783 1.693-.194.904-.278 2.11-.278 3.746v.028l-.05-.002c4.945.194 6.32 1.553 6.52 6.473l.03.001c1.122 0 2.053-.04 2.827-.132q.102-.013.204-.01l.203.017c.885.139 1.88.148 2.778.085a6 6 0 0 1-.21-.853 1.5 1.5 0 0 1 .11-.878c.398-.886.588-2.312.588-4.729 0-1.637-.083-2.842-.278-3.746-.191-.887-.468-1.38-.782-1.693-.314-.315-.807-.591-1.694-.783-.903-.195-2.109-.278-3.746-.278\" clip-rule=\"evenodd\"/>",
} as const;

export default function ChatBubbleTwoLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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