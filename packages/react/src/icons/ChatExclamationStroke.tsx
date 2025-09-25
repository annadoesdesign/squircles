import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12.512 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12c-2.673 0-4.773-.146-6.418-.547a9.45 9.45 0 0 1-4.892.388c-.55-.103-.85-.716-.6-1.227l.405-.83q.375-.77.676-1.571C.796 18.396.513 15.765.513 12c0-10 2-12 12-12m0 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12c0 3.769.304 5.976.968 7.336a2 2 0 0 1 .074 1.582q-.204.541-.442 1.078c.79-.02 1.57-.164 2.313-.428l.14-.044c.327-.09.672-.095 1.003-.014 1.406.342 3.312.49 5.944.49 2.46 0 4.29-.126 5.672-.424 1.36-.293 2.148-.724 2.664-1.24s.947-1.304 1.24-2.664c.299-1.382.424-3.212.424-5.672s-.125-4.29-.424-5.672c-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function ChatExclamationStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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