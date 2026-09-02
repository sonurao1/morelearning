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


// SiteLogo defaults. NOTE: earlier this pointed to
// "/morestudios-logo-white.svg" — a leftover from a different client
// project. I tried renaming it to a MoreLearning-named file, but that file
// doesn't exist in the real public/ folder (this zip export doesn't
// include public/), so it broke the logo everywhere (header, footer, the
// purple card in the Integrated Team section) instead of fixing it.
// Reverted back to the original working filename — don't rename this
// again without confirming the actual file in public/ first.
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