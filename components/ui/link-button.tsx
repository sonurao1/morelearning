import Link from "next/link";
import mergeClassNames from "@/libs/merge-classnames";

export default function LinkButton({
  className,
  href,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      href={href}
      className={mergeClassNames(
        "inline-flex w-fit py-3 px-6 capitalize font-bold cursor-pointer bg-digital text-white rounded-md transition-transform hover:scale-90 active:scale-100",
        className
      )}
    >
      {children}
    </Link>
  );
}