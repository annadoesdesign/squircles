import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 8c1.914 0 2.653.586 2.896 3.104 2.518.242 3.104.982 3.104 2.896s-.586 2.653-3.104 2.895C15.165 19.414 14.426 20 12.512 20s-2.654-.586-2.896-3.105c-2.518-.242-3.104-.981-3.104-2.895s.586-2.654 3.104-2.896C9.858 8.586 10.598 8 12.512 8m0 2c-.373 0-.57.03-.663.052q-.02.044-.046.125c-.07.215-.143.564-.196 1.119a2 2 0 0 1-1.799 1.799c-.555.053-.904.126-1.119.196a1 1 0 0 0-.125.046c-.021.092-.052.29-.052.663 0 .37.03.567.051.66q.043.02.126.048c.162.053.398.107.74.153l.38.043.175.026a2 2 0 0 1 1.623 1.774c.053.555.126.904.196 1.12q.027.08.046.123c.092.021.29.053.663.053.37 0 .567-.03.66-.052q.02-.044.048-.125c.07-.215.143-.564.196-1.119l.026-.177a2 2 0 0 1 1.774-1.623c.555-.053.904-.126 1.12-.196q.081-.028.124-.048a3 3 0 0 0 .052-.66c0-.373-.031-.57-.053-.663a1 1 0 0 0-.124-.046c-.215-.07-.564-.143-1.119-.196a2 2 0 0 1-1.8-1.8c-.053-.554-.126-.903-.196-1.118a1 1 0 0 0-.048-.126 3 3 0 0 0-.66-.051\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.045.005c3.836.075 5.49 1.023 6.123 4.498a14 14 0 0 0-.52-.105c4.746.867 5.864 3.37 5.864 9.602l-.006.762C24.38 22.436 22.2 24 12.512 24l-.914-.005C2.686 23.893.641 22.188.518 14.762L.512 14c0-6.235 1.12-8.738 5.872-9.604q-.272.05-.529.107C6.516.87 8.295 0 12.512 0zM12.512 6c-2.467 0-4.325.105-5.74.36-1.41.253-2.222.628-2.73 1.051-.96.8-1.53 2.368-1.53 6.589s.57 5.788 1.53 6.589c.508.423 1.32.798 2.73 1.052 1.415.254 3.273.359 5.74.359s4.325-.105 5.74-.36c1.411-.253 2.222-.628 2.73-1.051.96-.8 1.53-2.368 1.53-6.589s-.57-5.788-1.53-6.589c-.508-.423-1.319-.798-2.73-1.052C16.837 6.105 14.98 6 12.512 6m0-4c-2.899 0-3.658.464-4.049 1.021-.17.243-.34.605-.489 1.16l-.07.007C9.21 4.055 10.734 4 12.512 4c1.772 0 3.293.054 4.596.187l-.059-.006c-.148-.555-.318-.917-.488-1.16C16.171 2.464 15.411 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function MedicalCaseStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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