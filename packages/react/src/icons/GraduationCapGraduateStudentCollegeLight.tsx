import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c1.833 0 12 3.37 12 7 0 .797-1.33 2.063-3.115 3.355l.022-.014c.064.935.093 1.984.093 3.159l-.005.8c-.095 8.057-1.73 9.7-8.995 9.7l-.685-.005c-6.684-.107-8.218-1.898-8.31-9.695l-.005-.8c0-1.175.028-2.224.093-3.16l.05.036a21 21 0 0 1-1.643-1.302V17.5a.75.75 0 0 1-1.5 0V7c0-3.63 10.167-7 12-7m-7.46 11.332q-.041.984-.04 2.168c0 2.162.094 3.803.326 5.06.232 1.25.58 2.004 1 2.495.818.953 2.377 1.445 6.174 1.445s5.357-.492 6.174-1.445c.42-.49.769-1.244 1-2.495.232-1.257.326-2.898.326-5.06q0-1.183-.04-2.167C17.01 13.265 13.514 15 12.511 15s-4.499-1.736-7.46-3.668m7.444-9.831-.046.003a3 3 0 0 0-.159.02q-.197.028-.5.093c-.404.089-.91.223-1.486.4-1.152.354-2.529.865-3.845 1.48-1.329.622-2.525 1.319-3.365 2.025-.774.652-1.017 1.118-1.07 1.37q.033.06.121.175c.195.256.516.588.968.98.898.782 2.153 1.665 3.504 2.506a42 42 0 0 0 3.891 2.153c.579.276 1.078.489 1.468.629.329.118.493.151.535.161.043-.01.207-.043.535-.161.39-.14.89-.353 1.468-.629a42 42 0 0 0 3.892-2.153c1.35-.84 2.605-1.724 3.504-2.505.452-.393.772-.725.967-.98.06-.078.097-.136.12-.175-.053-.253-.295-.72-1.069-1.37-.84-.707-2.036-1.404-3.365-2.026a31 31 0 0 0-3.845-1.48 19 19 0 0 0-1.485-.4 7 7 0 0 0-.501-.094 3 3 0 0 0-.158-.02l-.046-.002-.013-.001h-.008z\" clip-rule=\"evenodd\"/>",
} as const;

export default function GraduationCapGraduateStudentCollegeLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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