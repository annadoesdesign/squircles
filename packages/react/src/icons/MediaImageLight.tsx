import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.512 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12 0 7.245-1.05 10.288-5.431 11.416q-.138.035-.279.067l-.257.059a15 15 0 0 1-.507.099q-.157.026-.318.05l-.227.035a21 21 0 0 1-.627.078l-.35.037q-.176.016-.356.03-.243.02-.495.037-.234.016-.475.03l-.396.017q-.131.006-.265.01a46 46 0 0 1-1.22.03q-.387.003-.792.004l-.005.001v-.001a66 66 0 0 1-1.31-.014l-.26-.005a48 48 0 0 1-1.186-.047q-.192-.011-.38-.024-.165-.01-.327-.021a28 28 0 0 1-1.289-.13q-.137-.018-.271-.04a17 17 0 0 1-.599-.096 15 15 0 0 1-.572-.115 12 12 0 0 1-.309-.074q-.127-.031-.25-.064l-.018-.006a9 9 0 0 1-.815-.265l-.076-.029a8 8 0 0 1-.36-.151l-.027-.013a7 7 0 0 1-.695-.369l-.032-.02a6 6 0 0 1-.31-.204l-.018-.015a5.3 5.3 0 0 1-.846-.76l-.018-.02a5.4 5.4 0 0 1-.45-.587q-.014-.02-.026-.04c-.424-.648-.742-1.421-.978-2.341q-.026-.105-.05-.213a16 16 0 0 1-.313-1.814l-.018-.146.001-.002C.57 15.121.512 13.673.512 12c0-10 2-12 12-12M8.635 14.593c-1.768-.342-3.618.244-6.328 2.41.088.562.197 1.055.324 1.491q.078.262.163.496c.142.384.303.716.484 1.005l.017.027q.192.3.414.543l.069.076q.061.063.125.122a4 4 0 0 0 .496.396c.554.373 1.282.672 2.276.892l.162.034q.555.114 1.199.194.419.053.882.092a43 43 0 0 0 3.593.128c2.58 0 4.474-.143 5.882-.46a66 66 0 0 0-1.543-1.595c-3.698-3.698-6.127-5.448-8.215-5.851M12.512 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777 0 1.23.032 2.31.1 3.264 5.473-4.04 9.01-2.668 15.799 4.12a63 63 0 0 1 2.05 2.144c.517-.239.92-.517 1.24-.838.606-.606 1.07-1.495 1.377-2.913.31-1.435.434-3.307.434-5.777s-.125-4.342-.434-5.777c-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function MediaImageLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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