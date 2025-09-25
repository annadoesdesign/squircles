import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.178.328a.75.75 0 0 1 .77.062l1.79 1.278a46.9 46.9 0 0 1 9.36 8.863.75.75 0 0 1-1.172.938q-.264-.33-.534-.655c.083.935.12 1.992.12 3.186 0 7.923-1.506 9.818-8.817 9.985q-.123.004-.249.006a53 53 0 0 1-1.87 0l-.249-.006C4.02 23.817 2.512 21.922 2.512 14c0-1.194.037-2.25.12-3.185a45 45 0 0 0-.534.654.75.75 0 0 1-1.172-.938 46.9 46.9 0 0 1 9.36-8.863L12.076.39zm.946 15.381a2.44 2.44 0 0 0-1.073-.034l-.151.034c-.97.252-1.652 1.052-1.736 1.983-.085.95-.152 1.964-.152 2.77 0 .584.037 1.275.089 1.969a37 37 0 0 0 2.41.069q.35 0 .678-.005.938-.015 1.733-.064c.031-.416.058-.831.073-1.222l.017-.747c0-.806-.068-1.82-.152-2.77-.079-.873-.682-1.63-1.557-1.93zm-1.966-12.82a45.4 45.4 0 0 0-6.652 5.81 8 8 0 0 0-.138.54c-.252 1.169-.356 2.708-.356 4.761s.104 3.592.356 4.762c.249 1.152.62 1.843 1.08 2.302s1.15.831 2.302 1.08q.39.083.837.144a28 28 0 0 1-.075-1.826c0-.873.072-1.94.158-2.903.143-1.597 1.302-2.9 2.853-3.302a3.94 3.94 0 0 1 1.978 0c1.551.403 2.71 1.705 2.853 3.302.086.962.158 2.03.158 2.903 0 .556-.032 1.19-.076 1.826q.447-.062.838-.144c1.152-.249 1.842-.62 2.302-1.08s.83-1.15 1.08-2.302c.252-1.17.356-2.709.356-4.762s-.104-3.592-.357-4.762a8 8 0 0 0-.137-.539 45.4 45.4 0 0 0-6.653-5.81l-1.353-.968z\" clip-rule=\"evenodd\"/>",
} as const;

export default function Home_2Light(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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