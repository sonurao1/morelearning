"use client"
import { ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

//Data & Hooks
import { navbarData } from "@/data/layout.data"
import { useActiveLink } from "@/hooks/use-active-link"

//Components
import Link from "next/link"
import LinkButton from "@/components/ui/link-button"
import SiteLogo from "@/components/site-logos"

export default function Header(){
const { isActive } = useActiveLink();
const [isOpen, setIsOpen] = useState(false);
const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

//Refs for scroll tracking, header element and the accent line under it
const lastScrollTop = useRef(0);
const headerRef = useRef<HTMLElement>(null);
const lineRef = useRef<HTMLDivElement>(null);

//Handle header visibility based on scroll direction — background stays fully
//transparent at every scroll position, only a thin accent hairline appears
//once scrolled, for a bit of separation without ever filling with color.
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop <= 25) {
          // Always show at the very top
          headerRef.current.classList.add("top-0", "md:top-0");
          headerRef.current.classList.remove("-top-20", "md:-top-25");
          lineRef.current?.classList.remove("opacity-100");
          lineRef.current?.classList.add("opacity-0");
        } else if (scrollTop < lastScrollTop.current) {
          // Scrolling up — show, still transparent
          headerRef.current.classList.remove("-top-20", "md:-top-25");
          headerRef.current.classList.add("top-0", "md:top-0", "backdrop-blur-lg");
          lineRef.current?.classList.remove("opacity-0");
          lineRef.current?.classList.add("opacity-100");
        } else {
          // Scrolling down — hide, and close the mobile menu so it doesn't linger off-screen
          headerRef.current.classList.remove("top-0", "md:top-0");
          headerRef.current.classList.add("-top-20", "md:-top-25");
          setIsOpen(false);
        }

        lastScrollTop.current = scrollTop;
      }
    };

    handleScroll()
    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll) };
  }, []);

  return (
    <>
    {/* Navbar */}
    <header
    ref = {headerRef}
    className="w-full h-20 px-5 fixed z-50 flex items-center justify-center transition-all duration-500 md:h-25 lg:px-8"
    >
      <nav className="container h-full flex items-center justify-between" >
        {/* Site Logo */}
        <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
          <SiteLogo width={132}  height={38} />
        </Link>

        {/* Menu for screen > 1024px */}
        <ul className="hidden items-center gap-8 capitalize font-medium lg:flex xl:gap-10">
         {navbarData.map(({url, text, items}) => {

            // Dropdown Menu — its own accent (technology teal) so it reads as a distinct control
             if(items){
                return (
                    <li key={url} className="group relative">
                     <Link
                       href={url}
                       className="flex items-center gap-1 rounded-md py-2 text-technology transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-technology/70"
                     >
                       {text}
                       <ChevronDown
                         size={18}
                         strokeWidth={1.5}
                         className="shrink-0 translate-y-0.5 transition-transform motion-reduce:transition-none group-focus-within:rotate-180 group-hover:rotate-180"
                        />
                     </Link>
                     <div className="absolute top-full left-1/4 -translate-x-1/4 p-2 pointer-events-none opacity-0 scale-95 origin-top transition-all duration-200 motion-reduce:transition-none group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:scale-100 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:scale-100" >
                       <ul className="nav-dropdown w-200 p-6 relative grid grid-cols-3 gap-6 text-left  backdrop-blur-lg  border border-white/10 rounded-xl shadow-2xl shadow-black/40 text-[14px]" >
                        {
                            items.map(({url, text}, idx) => {
                              return  (
                                <li key={url}>
                                  <a
                                    href={url}
                                    className={`border block py-3 px-4 rounded-lg text-white/65 transition-colors duration-200 hover:bg-gradient-to-r hover:from-primary-action/15 hover:to-digital/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-action/70
                                        ${isActive(url) ? "bg-digital/15 text-white" : "bg-transparent"}`}
                                  >
                                    {text}
                                  </a>
                                </li>
                              )
                            })
                        }
                       </ul>
                     </div>
                   </li>
                )
             }

             //Link — muted by default, brightens on hover/active with a gradient underline that grows in
             return (
                <li key={url} className="group relative py-2">
                  <Link
                     href={url}
                     className={`relative rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-action/70
                        ${isActive(url) ? "text-white" : "text-white/55 hover:text-white"}`}
                  >
                    {text}
                  </Link>
                  <span
                    className={`pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary-action to-digital transition-transform duration-300 motion-reduce:transition-none group-hover:scale-x-100
                      ${isActive(url) ? "scale-x-100" : ""}`}
                  />
                </li>
             );

         })}
        </ul>

        <div className="flex items-center gap-4">
          {/* CTA — desktop only, with a soft gradient glow that blooms on hover */}
          <div className="group/cta relative hidden lg:block">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary-action to-digital opacity-0 blur-lg transition-opacity duration-300 motion-reduce:transition-none group-hover/cta:opacity-60" />
            <LinkButton href="tel:+919650691250" className="bg-gradient-to-r from-primary-action to-digital">
              Connect now
            </LinkButton>
          </div>

          {/* Burger Menu Button — mobile / tablet only */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] p-2 text-white transition-colors hover:border-primary-action/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-action/70 lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Gradient hairline that fades in once the header goes glassy on scroll */}
      <div
        ref={lineRef}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-digital/50 to-transparent opacity-0 transition-opacity duration-500 motion-reduce:transition-none"
      />
    </header>

    {/* Backdrop — dims the page and closes the menu on outside tap */}
    <div
      onClick={() => setIsOpen(false)}
      aria-hidden="true"
      className={`fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none lg:hidden
        ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
    />

    {/* Mobile menu panel */}
    <div
      id="mobile-nav-panel"
      className={`fixed inset-x-0 top-20 z-40 overflow-hidden border-b border-white/10 bg-primary/95 backdrop-blur-xl transition-all duration-300 motion-reduce:transition-none lg:hidden
        ${isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <ul className="container flex flex-col gap-1 py-4 capitalize font-medium">
        {navbarData.map(({ url, text, items }, idx) => {

          const rowAnim = `transition-all duration-300 motion-reduce:transition-none ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`;
          const rowDelay = { transitionDelay: isOpen ? `${idx * 40}ms` : "0ms" };

          // Dropdown group — simple accordion on mobile, teal to match the desktop trigger
          if (items) {
            const isGroupOpen = openMobileGroup === url;
            return (
              <li key={url} style={rowDelay} className={`border-b border-white/5 last:border-none ${rowAnim}`}>
                <button
                  type="button"
                  onClick={() => setOpenMobileGroup(isGroupOpen ? null : url)}
                  aria-expanded={isGroupOpen}
                  className="flex w-full items-center justify-between rounded-md px-2 py-3 text-technology transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-technology/70"
                >
                  {text}
                  <ChevronDown
                    size={18}
                    strokeWidth={1.5}
                    className={`shrink-0 transition-transform motion-reduce:transition-none ${isGroupOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-200 motion-reduce:transition-none ${isGroupOpen ? "max-h-60" : "max-h-0"}`}>
                  <ul className="flex flex-col gap-1 py-1 pl-4">
                    {items.map(({ url, text }) => (
                      <li key={url}>
                        <a
                          href={url}
                          onClick={() => setIsOpen(false)}
                          className={`block rounded-lg px-2 py-2.5 text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-action/70
                            ${isActive(url) ? "text-white" : ""}`}
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          }

          // Leaf link
          return (
            <li key={url} style={rowDelay} className={`border-b border-white/5 last:border-none ${rowAnim}`}>
              <Link
                href={url}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-2 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-action/70
                  ${isActive(url) ? "text-white" : "text-white/55 hover:text-white"}`}
              >
                {text}
              </Link>
            </li>
          );
        })}

        <li
          style={{ transitionDelay: isOpen ? `${navbarData.length * 40}ms` : "0ms" }}
          className={`pt-3 transition-all duration-300 motion-reduce:transition-none ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
        >
          <LinkButton href="tel:+919650691250" className="w-full justify-center">
            Connect now
          </LinkButton>
        </li>
      </ul>
    </div>
    </>
  )

}