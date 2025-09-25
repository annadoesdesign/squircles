import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 8c1.914 0 2.653.586 2.896 3.104 2.518.242 3.104.982 3.104 2.896s-.586 2.653-3.104 2.895C15.165 19.414 14.426 20 12.512 20s-2.654-.586-2.896-3.105c-2.518-.242-3.104-.981-3.104-2.895s.586-2.654 3.104-2.896C9.858 8.586 10.598 8 12.512 8m0 1.5c-.873 0-.998.152-1.007.161-.063.065-.279.372-.396 1.586a1.5 1.5 0 0 1-1.35 1.35c-1.214.117-1.521.333-1.586.396-.008.009-.16.134-.16 1.007 0 .87.15.997.16 1.006.063.063.37.279 1.586.396.715.07 1.281.635 1.35 1.35.117 1.214.333 1.522.396 1.587.009.009.134.161 1.007.161.871 0 .997-.151 1.006-.16.063-.064.28-.37.397-1.588l.018-.133a1.5 1.5 0 0 1 1.331-1.217c1.217-.117 1.524-.333 1.588-.396.01-.009.16-.135.16-1.006 0-.873-.152-.998-.16-1.007-.066-.063-.373-.28-1.588-.396a1.5 1.5 0 0 1-1.35-1.35c-.117-1.216-.333-1.523-.396-1.587-.009-.01-.136-.16-1.006-.16\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.045.005c3.836.075 5.49 1.023 6.123 4.498a13 13 0 0 0-.487-.098c4.718.872 5.831 3.378 5.831 9.595l-.006.762C24.38 22.436 22.2 24 12.512 24l-.914-.005C2.686 23.893.641 22.188.518 14.762L.512 14c0-6.22 1.115-8.726 5.84-9.597q-.255.046-.497.1C6.516.87 8.295 0 12.512 0zM12.512 5.5c-2.475 0-4.368.105-5.828.367-1.457.262-2.362.66-2.962 1.16-1.158.965-1.71 2.766-1.71 6.973s.552 6.008 1.71 6.973c.6.5 1.505.898 2.962 1.16 1.46.262 3.353.367 5.828.367s4.369-.105 5.828-.367c1.457-.262 2.363-.66 2.962-1.16 1.158-.965 1.71-2.766 1.71-6.973s-.552-6.008-1.71-6.973c-.6-.5-1.505-.898-2.962-1.16-1.46-.262-3.352-.367-5.828-.367M7.444 4.24C8.848 4.067 10.52 4 12.512 4s3.663.068 5.067.24c-.168-.698-.375-1.173-.608-1.505-.548-.782-1.555-1.235-4.459-1.235s-3.91.453-4.459 1.235c-.232.333-.441.806-.61 1.504\" clip-rule=\"evenodd\"/>",
} as const;

export default function MedicalCaseLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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