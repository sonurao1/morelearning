"use client"
import { usePathname } from "next/navigation"


//Custom hook for determining the active route in the application
export function useActiveLink(){
    const pathname = usePathname();

    //returning true if the current pathname exactly matches the given URL
    const isActive = (targetPath: string) => pathname === targetPath;

    //Returning true if the current pathname contains the specified prefix
    const isActiveGroup = (prefix: string) => pathname.includes(prefix);

    return { pathname, isActive, isActiveGroup}
}