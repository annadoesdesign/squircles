import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 13c2.5 0 3 .5 3 3 0 2.344-.44 2.93-2.555 2.994l-.445.006c-2.344 0-2.93-.44-2.994-2.555L9.512 16c0-2.344.44-2.93 2.555-2.994zm0 1.5c-.595 0-.967.031-1.207.083a1 1 0 0 0-.162.047c-.012.03-.03.08-.048.163-.052.24-.083.612-.083 1.207s.031.967.083 1.207c.018.081.036.132.048.162.03.012.08.03.162.048.24.052.612.083 1.207.083s.967-.031 1.207-.083q.121-.029.163-.048c.012-.03.03-.081.047-.162.052-.24.083-.612.083-1.207s-.031-.967-.083-1.207a1 1 0 0 0-.047-.163 1 1 0 0 0-.163-.047c-.24-.052-.612-.083-1.207-.083\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c4 0 8 1.5 8 9q0 .204-.003.401c1.563 1.152 2.003 3.17 2.003 6.599 0 6.667-1.666 8-10 8s-10-1.333-10-8c0-4.14.644-6.223 3.127-7.207q-.639.252-1.125.608L4.512 9c0-7.5 4-9 8-9m0 9.5c-2.06 0-3.624.084-4.823.291-1.198.207-1.91.517-2.364.88-.846.676-1.313 1.965-1.313 5.329s.467 4.653 1.313 5.33c.454.362 1.166.672 2.364.879 1.2.207 2.763.291 4.823.291s3.624-.084 4.823-.291c1.198-.207 1.91-.517 2.365-.88.845-.676 1.312-1.965 1.312-5.329s-.467-4.653-1.312-5.33c-.454-.362-1.166-.672-2.365-.879S14.572 9.5 12.512 9.5m0-8c-1.854 0-3.414.356-4.512 1.316-1.026.898-1.924 2.572-1.983 5.84q-.05.017-.1.035C7.419 8.171 9.542 8 12.512 8c3.095 0 5.27.185 6.782.758a7 7 0 0 0-.288-.103c-.059-3.267-.956-4.941-1.981-5.839-1.098-.96-2.658-1.316-4.513-1.316\" clip-rule=\"evenodd\"/>",
} as const;

export default function LockSecuritySafeLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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