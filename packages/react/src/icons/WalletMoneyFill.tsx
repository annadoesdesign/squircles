import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c8.91 0 11.466 1.588 11.918 9.007Q23.987 9 23.512 9c-7.5 0-9 .833-9 5l.005.38c.089 3.59 1.525 4.506 7.658 4.61l1.337.01q.28-.002.55-.005C23.051 23.05 20.064 24 12.512 24c-10 0-12-1.667-12-10q.001-.488.01-.944Q.514 12.543.513 12c0-10 2-12 12-12m0 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24-.416.416-.774 1.01-1.051 1.936C4.916 4.363 7.842 4 12.512 4s7.595.364 9.387 1.6c-.278-.926-.635-1.52-1.05-1.936-.517-.516-1.305-.947-2.665-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M24.504 11.007a65 65 0 0 1-.003 2.043q.01.46.011.95c0 1.113-.038 2.106-.124 2.993q-.42.006-.876.007c-1.854 0-3.258-.052-4.332-.18-1.091-.131-1.684-.325-2.009-.506-.247-.137-.354-.269-.443-.499-.123-.316-.216-.854-.216-1.815s.093-1.499.216-1.815c.09-.23.196-.362.443-.5.325-.18.918-.374 2.01-.504 1.073-.129 2.477-.181 4.331-.181q.52 0 .992.007M19.512 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function WalletMoneyFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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