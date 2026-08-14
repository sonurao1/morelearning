import Link from "next/link"
import mergeClassNames from "@/libs/merge-classnames"

export default function LinkButton({
    className,
    children,
    ...props
}: React.ComponentProps<typeof Link>){
    <Link
     {...props}
     className = {mergeClassNames(
        "py-3 px-6 capitalize font-bold cursor-pointer bg-black rounded-md transition-transform hover:scale-90 active:scale-100",
        className,
     )}
    >

        {children}
    </Link>
}