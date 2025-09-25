import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.285 16.694c.784 0 1.496.138 2.239.342.382.105.746.22 1.159.346.397.121.836.252 1.289.36.922.218 1.98.361 3.169.165.072-.012.144-.03.216-.044C19.86 22.876 17.985 24 12.512 24c-5.429 0-7.319-1.106-7.834-6.017.9.057 1.75-.07 2.5-.234.823-.18 1.977-.526 2.68-.702.846-.212 1.631-.353 2.426-.353\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M14.737.168c2.312.328 4.176 1.116 5.632 2.17q.787.575 1.42 1.24c.7.734 1.257 1.54 1.681 2.373a9.8 9.8 0 0 1 .857 2.439c.177.863.224 1.714.15 2.508a7.4 7.4 0 0 1-.178 1.069c-.248.989-.709 1.837-1.36 2.437q-.168.157-.355.29c-.752.537-1.436.875-2.076 1.074-2.755.854-4.702-.928-7.843-1.066l-.38-.008c-2.992 0-5.44 1.548-7.74 1.27q.112.014.226.021a4.1 4.1 0 0 1-1.831-.565A3.5 3.5 0 0 0 .59 9.026l.002-.007q.053-.429.146-.862a10 10 0 0 1 2.16-4.42C4.156 2.267 5.96 1.061 8.428.445l.116-.029a3 3 0 0 0 .197.732 3 3 0 0 0 5.543 0c.133-.322.204-.665.22-1.012zM19.512 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M1.012 11a1.5 1.5 0 0 1 .386 2.947c-.456-.751-.754-1.751-.85-2.874A1.5 1.5 0 0 1 1.011 11M12.51.003a1 1 0 0 1-.29.704 1 1 0 0 1-1.704-.621A18 18 0 0 1 12.284 0q.114 0 .226.003\"/>",
  regular: "",
  light: "",
} as const;

export default function MushroomFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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