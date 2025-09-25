import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.512 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12 0 7.245-1.05 10.288-5.431 11.416q-.138.035-.279.067l-.257.059a15 15 0 0 1-.507.099q-.157.026-.318.05l-.227.035a21 21 0 0 1-.627.078l-.35.037q-.176.016-.356.03-.243.02-.495.037-.234.016-.475.03l-.396.017q-.131.006-.265.01a46 46 0 0 1-1.22.03q-.387.003-.792.004l-.005.001v-.001a66 66 0 0 1-1.31-.014l-.26-.005a48 48 0 0 1-1.186-.047q-.192-.011-.38-.024-.165-.01-.327-.021a28 28 0 0 1-1.289-.13q-.137-.018-.271-.04a17 17 0 0 1-.599-.096 15 15 0 0 1-.572-.115 12 12 0 0 1-.309-.074q-.127-.031-.25-.064l-.018-.006a9 9 0 0 1-.815-.265l-.076-.029a8 8 0 0 1-.36-.151l-.027-.013a7 7 0 0 1-.695-.369l-.032-.02a6 6 0 0 1-.31-.204l-.018-.015a5.3 5.3 0 0 1-.846-.76l-.018-.02a5.4 5.4 0 0 1-.45-.587q-.014-.02-.026-.04c-.424-.648-.742-1.421-.978-2.341q-.026-.105-.05-.213a16 16 0 0 1-.313-1.814l-.018-.146.001-.002C.57 15.121.512 13.673.512 12c0-10 2-12 12-12M8.541 15.084c-1.51-.292-3.157.153-5.693 2.13q.034.198.073.384l.045.202c.127.556.278 1.012.45 1.392.285.633.634 1.066 1.04 1.39l.057.043q.088.067.179.128c.488.325 1.15.601 2.094.81l.158.033q.384.079.814.141.605.088 1.327.146a43 43 0 0 0 3.426.116h.116a48 48 0 0 0 2.652-.071 23 23 0 0 0 2.068-.203l.05-.008a71 71 0 0 0-.9-.92c-3.706-3.705-6.037-5.342-7.956-5.713M12.512 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12c0 1.092.027 2.06.08 2.919 5.205-3.61 8.731-2.123 15.319 4.465q.913.913 1.695 1.755c.546-.233.941-.502 1.242-.803.516-.516.947-1.304 1.24-2.664.298-1.382.424-3.212.424-5.672s-.126-4.29-.424-5.672c-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function MediaImageStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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