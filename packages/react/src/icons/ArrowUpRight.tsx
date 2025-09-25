import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M125.905 43.15c-5.774 1.157-9.522 6.775-8.367 12.55 1.156 5.775 6.776 9.52 12.551 8.368 16.448-3.29 33.18-4.192 49.844-2.836L45.796 195.118c-4.168 4.161-4.174 10.916-.015 15.085 4.162 4.169 10.916 4.175 15.085.015L195.172 76.162c1.398 16.54.377 33.058-2.961 49.748-1.155 5.777 2.591 11.396 8.368 12.551 5.775 1.154 11.396-2.591 12.551-8.367 5.246-26.23 5.397-52.32-.015-78.636a10.67 10.67 0 0 0-8.412-8.323c-26.028-5.057-52.68-5.21-78.798.014\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M125.905 43.15c-5.774 1.157-9.522 6.775-8.367 12.55 1.156 5.775 6.776 9.52 12.551 8.368 16.448-3.29 33.18-4.192 49.844-2.836L45.796 195.118c-4.168 4.161-4.174 10.916-.015 15.085 4.162 4.169 10.916 4.175 15.085.015L195.172 76.162c1.398 16.54.377 33.058-2.961 49.748-1.155 5.777 2.591 11.396 8.368 12.551 5.775 1.154 11.396-2.591 12.551-8.367 5.246-26.23 5.397-52.32-.015-78.636a10.67 10.67 0 0 0-8.412-8.323c-26.028-5.057-52.68-5.21-78.798.014\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M126.428 45.766a8.003 8.003 0 0 0-6.275 9.413 8.005 8.005 0 0 0 9.413 6.276c18.567-3.714 37.482-4.434 56.252-2.335L47.682 197.005c-3.127 3.122-3.129 8.194-.008 11.322 3.12 3.123 8.18 3.124 11.307.007L197.25 70.315c2.191 18.68 1.34 37.301-2.424 56.12a8 8 0 0 0 15.689 3.137c5.179-25.894 5.322-51.622-.014-77.575a8 8 0 0 0-6.306-6.246c-25.702-4.993-52.004-5.139-77.767.015\"/>",
} as const;

export default function ArrowUpRight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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