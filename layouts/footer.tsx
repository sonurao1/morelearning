
import SiteLogo from "@/components/site-logos"
import Link from "next/link"
import LinkButton from "@/components/ui/link-button"
import { MoveUpRight } from "lucide-react"

export default function Footer(){
    return (
        <>
        <section className="p-8 w-full flex items-center justify-center">
         {/* Content Container  */}
         <div className="container border p-6 flex flex-col ">
            {/* Content-Container - 1 */}
            <div className="grid grid-cols-4 gap-2">
                <div className="border flex flex-col gap-6">
                    <Link href="#">
                        <SiteLogo width={100} height={100} />
                    </Link>
                    <p>Your enterprise enablement partner for interactive learning, visual communication, AI-powered experiences and immersive technology.</p>
                    <a className="flex items-center gap-3 bg-transparent border-none text-[0.875rem] text-digital" href="#">
              let's build your learning Experience
              <MoveUpRight className="w-[1rem]" />
            </a>
                 </div>
                <div className="border flex flex-col gap-6">
                    {/* Explore
                    Solutions
                    Who We Are
                    Industries
                    Our Work
                    Testimonials */}
                    <h1>Explore</h1>
                    <ul>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Our Work</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                </div>
                <div className="border flex flex-col gap-6">

                    {/* 
                    Capabilities
                Learning & Workforce Enablement
                Sales & Customer Enablement
                Visual Communication
                Immersive & Interactive Experiences
             */}
              <h1>Capabilities</h1>
                    <ul>
                        <li><a href="#">Learning & Workforce Enablement</a></li>
                        <li><a href="#">Sales & Customer Enablement</a></li>
                        <li><a href="#">Visual Communication</a></li>
                        <li><a href="#">Immersive & Interactive Experiences</a></li>
                    </ul>
                </div>
                <div className="border"></div>

            </div>
         </div>
        </section>
        </>
    )
}