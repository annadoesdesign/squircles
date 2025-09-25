import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.982 6.47a.75.75 0 1 1 1.06 1.06 10.7 10.7 0 0 0-2.375 3.604L6.32 12l.346.866a10.7 10.7 0 0 0 2.375 3.604.75.75 0 1 1-1.06 1.06 12.2 12.2 0 0 1-2.708-4.106l-.458-1.146a.75.75 0 0 1 0-.556l.458-1.146A12.2 12.2 0 0 1 7.982 6.47M14.115 6.364a.75.75 0 1 1 .795 1.272 8.9 8.9 0 0 0-3.257 3.602c1.019-.018 1.925-.054 2.786-.066 1.125-.016 2.15.011 3.005.224.886.222 1.64.659 2.144 1.477.482.783.674 1.822.674 3.128a.75.75 0 0 1-1.5-.001c0-1.194-.183-1.906-.451-2.342-.246-.4-.617-.652-1.23-.806-.646-.16-1.496-.196-2.62-.18-.802.011-1.765.049-2.819.067a8.9 8.9 0 0 0 3.268 3.625.75.75 0 1 1-.795 1.272 10.37 10.37 0 0 1-4.134-4.944l-.158-.396-.004-.01-.003-.008q-.011-.032-.02-.066A.8.8 0 0 1 9.762 12c0-.073.014-.144.033-.21q.01-.035.02-.068l.166-.414a10.37 10.37 0 0 1 4.134-4.944\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12m0 1.5c-2.47 0-4.342.125-5.777.435-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912-.31 1.435-.435 3.307-.435 5.777s.125 4.342.435 5.777c.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435s4.343-.125 5.778-.435c1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.31-1.435.434-3.307.434-5.777s-.125-4.342-.434-5.777c-.306-1.418-.77-2.307-1.376-2.912-.606-.606-1.494-1.07-2.912-1.376-1.435-.31-3.308-.435-5.778-.435\" clip-rule=\"evenodd\"/>",
} as const;

export default function ReplyallEmailLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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