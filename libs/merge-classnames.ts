import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"

//Utility function to conditionally combine class names
export default function mergeClassNames (...classes: ClassValue[]) {
    return twMerge(clsx(classes));
}