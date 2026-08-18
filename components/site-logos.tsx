import Link from "next/link";
import Image from "next/image"
import mergeClassNames from "@/libs/merge-classnames"

//Alias for Next.js Image component props
type ImageProps = React.ComponentPropsWithRef<typeof Image>;

// SiteLogo propps with optional src and alt overrides
type SiteLogoProps = Omit<ImageProps, "src" | "alt"> & {
    src?: ImageProps["src"]
    alt?: ImageProps["alt"]
};


export default function SiteLogo({
    src = "/morestudios-logo-white.svg",
    alt = "Morestudios logo",
    priority = true,
    className,
    ...props
}: SiteLogoProps) {
    return (
            <Image 
            {...props}
            src={src}
            alt={alt}
            priority = {priority}
            className={mergeClassNames("object-contain object-center", className)}
            />
    )
}