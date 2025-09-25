import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18.512 9.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.384 0c6.24 0 8.324 1.097 8.849 6.025 2.59 1.113 3.28 3.318 3.28 7.475 0 4.643-.861 6.848-4.27 7.818-.77 2.115-3.239 2.682-7.73 2.682l-.597-.004c-4.114-.05-6.397-.659-7.134-2.677-3.41-.97-4.27-3.175-4.27-7.819 0-4.007.64-6.201 3.007-7.35C4.022 1.114 6.092 0 12.384 0M6.76 15.75c-.22.558-.41 1.223-.555 2.02-.464 2.534-.015 3.367.529 3.783.36.275.956.529 1.947.702.984.172 2.243.245 3.832.245 1.59 0 2.848-.073 3.832-.245.991-.173 1.588-.427 1.947-.702.544-.416.994-1.25.53-3.783a11 11 0 0 0-.556-2.02zm5.753-9.25c-2.48 0-4.388.089-5.867.314-1.484.227-2.41.575-3.016 1.003-1.08.765-1.617 2.15-1.617 5.683s.538 4.918 1.617 5.683c.24.169.53.322.884.463q-.006-.746.133-1.66l.082-.486a13 13 0 0 1 .462-1.825.748.748 0 0 1 .322-1.425h14a.747.747 0 0 1 .321 1.425q.277.817.463 1.825.222 1.209.214 2.146c.355-.141.646-.294.885-.463 1.08-.765 1.617-2.15 1.617-5.683s-.538-4.918-1.617-5.683c-.605-.428-1.531-.776-3.016-1.003C16.9 6.59 14.992 6.5 12.512 6.5m-.128-5c-1.843 0-3.209.1-4.237.334-1.007.23-1.595.566-1.986.978-.398.42-.731 1.066-.955 2.165q-.06.292-.107.619C6.864 5.152 9.267 5 12.512 5c3.084 0 5.407.135 7.145.53a11 11 0 0 0-.094-.553c-.224-1.099-.557-1.744-.955-2.165-.391-.413-.98-.749-1.986-.978-1.029-.234-2.395-.334-4.238-.334\" clip-rule=\"evenodd\"/>",
} as const;

export default function PrinterPrintLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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