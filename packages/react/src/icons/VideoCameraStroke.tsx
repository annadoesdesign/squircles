import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M9.512 1c5.38 0 7.672.944 8.538 4.861q0-.006-.002-.011l.464-.188c5-2.112 6 1.056 6 6.338l-.012.965c-.129 4.692-1.3 7.353-5.988 5.373q-.237-.1-.464-.19C17.181 22.058 14.888 23 9.512 23c-7.5 0-9-1.833-9-11s1.5-11 9-11m0 2c-3.798 0-5.108.527-5.764 1.33-.356.434-.688 1.15-.915 2.432-.226 1.285-.32 2.978-.32 5.238s.094 3.953.32 5.238c.227 1.283.559 1.998.915 2.433C4.404 20.473 5.714 21 9.512 21s5.108-.527 5.765-1.33c.356-.434.688-1.15.914-2.432.227-1.285.321-2.978.321-5.238s-.094-3.953-.321-5.238c-.226-1.283-.558-1.998-.914-2.433C14.62 3.527 13.31 3 9.512 3m11.841 4.008c-.323-.034-.964.032-2.062.496q-.493.207-.938.38c.112 1.173.16 2.535.16 4.116s-.048 2.943-.16 4.116l.938.38c1.099.465 1.739.53 2.062.496.22-.023.311-.083.424-.236.172-.235.381-.71.53-1.577.144-.846.205-1.907.205-3.179s-.061-2.333-.206-3.179c-.148-.867-.357-1.342-.53-1.577-.112-.153-.203-.213-.423-.236\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function VideoCameraStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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