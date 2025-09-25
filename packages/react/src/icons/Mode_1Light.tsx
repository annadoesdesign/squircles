import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M128 226.666a8 8 0 0 1 8 8v10.667a8 8 0 1 1-16 0v-10.667a8 8 0 0 1 8-8M46.917 197.77a8 8 0 1 1 11.313 11.313l-7.542 7.541a8 8 0 0 1-11.313 0 8 8 0 0 1 0-11.312zM197.771 197.77a8 8 0 0 1 11.313 0l7.541 7.542a8 8 0 0 1-11.312 11.312l-7.542-7.541a8 8 0 0 1 0-11.313\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M132.157 53.416c42.481 1.794 70.51 31.183 70.51 74.583l-.083 3.844c-1.795 39.451-31.184 70.823-74.584 70.823l-4.156-.083c-41.111-1.737-68.69-29.316-70.427-70.427l-.083-4.157c0-44.8 29.866-74.666 74.666-74.666zM128 69.333c-18.764 0-33.16 6.181-42.823 15.843C75.515 94.84 69.334 109.235 69.334 128s6.181 33.161 15.843 42.823c9.663 9.662 24.059 15.844 42.823 15.844 35.463 0 58.667-25.756 58.667-58.667 0-18.764-6.182-33.16-15.844-42.823-9.662-9.662-24.059-15.843-42.823-15.843\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M21.334 119.999a8 8 0 0 1 0 16H10.667a8 8 0 0 1 0-16zM245.334 119.999a8 8 0 0 1 0 16h-10.667a8 8 0 1 1 0-16zM39.375 39.374a8 8 0 0 1 11.313 0l7.541 7.542a8 8 0 0 1 0 11.313 8 8 0 0 1-11.312 0l-7.542-7.542a8 8 0 0 1 0-11.313M205.313 39.374a8 8 0 0 1 11.312 11.313l-7.541 7.541a8 8 0 1 1-11.313-11.312zM128 2.666a8 8 0 0 1 8 8v10.667a8 8 0 0 1-16 0V10.666a8 8 0 0 1 8-8\"/>",
} as const;

export default function Mode_1Light(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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