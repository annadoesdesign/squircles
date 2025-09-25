import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c2.79 0 7.307 1.73 7.926 10.016q.827.34 1.63.735l.574.282c.547.27.934.783 1.042 1.383.548 3.036.605 6.141.169 9.195l-.145 1.016-.025.123a1 1 0 0 1-1.296.679l-.116-.05-2.306-1.152a30 30 0 0 1-.942-.495C17.858 23.496 15.856 24 12.513 24c-3.334 0-5.334-.5-6.5-2.25L6 21.732q-.467.256-.942.495L2.753 23.38l-.116.049a1 1 0 0 1-1.296-.679l-.025-.123-.145-1.016a28.8 28.8 0 0 1 .17-9.195c.108-.6.494-1.114 1.041-1.383l.574-.282a27 27 0 0 1 1.63-.735C5.204 1.73 9.721 0 12.511 0m0 2a4.95 4.95 0 0 0-3.659 1.611C7.682 4.873 6.513 7.316 6.513 12c0 2.475.083 4.36.291 5.81.21 1.46.526 2.31.872 2.83.548.822 1.545 1.36 4.836 1.36s4.288-.538 4.836-1.36c.347-.52.662-1.37.872-2.83.209-1.45.292-3.335.292-5.81 0-4.684-1.17-7.127-2.34-8.389A4.95 4.95 0 0 0 12.511 2m-8 10.227q-.338.153-.673.318l-.538.265a26.8 26.8 0 0 0-.198 8.158l1.062-.53q.521-.263 1.032-.546l.017.057c-.527-1.805-.702-4.362-.702-7.949zm15.996.687c-.028 3.077-.212 5.334-.681 6.978l.513.278q.259.136.52.267l1.061.53a26.8 26.8 0 0 0-.198-8.157l-.538-.265a25 25 0 0 0-.674-.32zm.004-.914-.008-.523v-.02q.006.267.008.543\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function RocketShipStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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