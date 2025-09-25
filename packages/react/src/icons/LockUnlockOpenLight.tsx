import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 13c2.5 0 3 .5 3 3 0 2.344-.44 2.93-2.555 2.994l-.445.006c-2.344 0-2.93-.44-2.994-2.555L9.512 16c0-2.344.44-2.93 2.555-2.994zm0 1.5c-.595 0-.967.031-1.207.083a1 1 0 0 0-.162.047c-.012.03-.03.08-.048.163-.052.24-.083.612-.083 1.207s.031.967.083 1.207c.018.081.036.132.048.162.03.012.08.03.162.048.24.052.612.083 1.207.083s.967-.031 1.207-.083q.121-.029.163-.048c.012-.03.03-.081.047-.162.052-.24.083-.612.083-1.207s-.031-.967-.083-1.207a1 1 0 0 0-.047-.163 1 1 0 0 0-.163-.047c-.24-.052-.612-.083-1.207-.083\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c4 0 8 1.5 8 9v.138a.7.7 0 0 1-.045.233c1.597 1.146 2.045 3.17 2.045 6.629 0 6.667-1.666 8-10 8s-10-1.333-10-8 1.667-8 10-8c2.904 0 4.998.162 6.494.655-.059-3.267-.956-4.941-1.981-5.839-1.098-.96-2.659-1.316-4.513-1.316S9.098 1.856 8 2.816c-.61.533-1.172 1.341-1.541 2.593A.81.81 0 0 1 5.696 6c-.478 0-.84-.437-.711-.897C6.155.948 9.333 0 12.512 0m0 9.5c-2.06 0-3.624.084-4.823.291-1.198.207-1.91.517-2.364.88-.846.676-1.313 1.965-1.313 5.329s.467 4.653 1.313 5.33c.454.362 1.166.672 2.364.879 1.2.207 2.763.291 4.823.291s3.624-.084 4.823-.291c1.198-.207 1.91-.517 2.365-.88.845-.676 1.312-1.965 1.312-5.329s-.467-4.653-1.312-5.33c-.454-.362-1.166-.672-2.365-.879S14.572 9.5 12.512 9.5\" clip-rule=\"evenodd\"/>",
} as const;

export default function LockUnlockOpenLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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