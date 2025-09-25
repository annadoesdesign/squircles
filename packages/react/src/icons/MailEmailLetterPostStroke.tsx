import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 1c10 0 12 1.833 12 11s-2 11-12 11-12-1.833-12-11 2-11 12-11m2.933 12.293c-.923.43-1.912.707-2.933.707s-2.01-.277-2.933-.707a109 109 0 0 0-4.16 4.087c-.651.673-1.195 1.247-1.575 1.653l-.063.068q.157.2.333.362c.51.467 1.307.871 2.692 1.145 1.399.277 3.242.392 5.706.392s4.308-.115 5.706-.392c1.386-.274 2.183-.678 2.693-1.145q.174-.162.332-.362l-.063-.068c-.38-.406-.923-.98-1.575-1.653a109 109 0 0 0-4.16-4.087M2.854 7.221C2.63 8.357 2.512 9.89 2.512 12c0 2.312.142 3.934.41 5.097a114.606 114.606 0 0 1 4.863-4.863c-1.059-.753-2.031-1.661-2.866-2.55a30 30 0 0 1-2.065-2.463m19.315 0a30 30 0 0 1-2.064 2.464c-.835.888-1.807 1.796-2.866 2.548a115 115 0 0 1 4.863 4.864c.267-1.163.41-2.785.41-5.097 0-2.109-.119-3.643-.343-4.78M12.512 3c-2.464 0-4.307.115-5.706.392-1.385.274-2.182.678-2.692 1.145a3 3 0 0 0-.404.456 28.772 28.772 0 0 0 2.667 3.322c.908.966 1.939 1.903 3.015 2.593 1.084.694 2.141 1.092 3.12 1.092s2.037-.398 3.12-1.092c1.077-.69 2.108-1.627 3.015-2.593a29 29 0 0 0 2.666-3.322 3 3 0 0 0-.402-.456c-.51-.467-1.308-.871-2.693-1.145C16.82 3.115 14.976 3 12.512 3\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function MailEmailLetterPostStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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