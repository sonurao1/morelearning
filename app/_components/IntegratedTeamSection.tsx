import Link from "next/link"
import SiteLogo from "@/components/site-logos"

import { CircleX, CircleCheck, Zap, Shapes, Puzzle, Sparkles } from "lucide-react"

export default function IntegratedTeamSection(){
   return (
    <>
     <section className="w-full  bg-white flex p-6 items-center justify-center">
      {/* Content container */}
      <div className="container  h-[90%] flex flex-col gap-6 py-6">
        {/* Content 1 */}
        <div className=" **:text-center flex flex-col items-center justify-center gap-4">
           <p className="text-primary-action font-bold">What Makes MoreLearning Different</p>
           <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary w-[90%] md:w-[70%] lg:w-[50%] mx-auto font-extrabold">One Integrated Team. Every Discipline. No Compromise.</h1>
        </div>

         {/* Content 2 */}
         <div className="grid grid-cols-1 md:grid-cols-2 flex flex-col gap-6 ">
              <div className="p-6 flex flex-col justify-center gap-6 border h-80 rounded-2xl shadow-lg shadow-digital/20">
                <h1 className="font-bold text-secondary-text/70">Most companies specialize in one area.</h1>
                <ul className="flex flex-col gap-4 text-secondary-text/50">
                <li className="flex gap-2"><CircleX strokeWidth={0.75} /> <p>Some build eLearning.</p></li>
                <li className="flex gap-2"><CircleX strokeWidth={0.75} /> <p>Some create presentations.</p></li>
                <li className="flex gap-2"><CircleX strokeWidth={0.75} /> <p>Some produce videos.</p></li>
                <li className="flex gap-2"><CircleX strokeWidth={0.75} /> <p>Some develop 3D experiences.</p></li>
                </ul>
              </div>

              <div className="p-6 gap-6 border h-80 bg-digital flex flex-col justify-center gap-6  rounded-2xl">
                       <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
                       <SiteLogo width={100}  height={38} />
                       </Link>

                       <p >We bring all these disciplines together under one integrated team, allowing enterprises to create consistent, engaging, and scalable learning and communication experiences without coordinating multiple vendors.</p>
                    <p className="flex gap-2 items-center"><CircleCheck strokeWidth={0.75} /> <span>Every discipline, one accountable team</span></p>
              </div>
         </div>

         {/* Content 3 */}
         <div className=" p-6 flex flex-col gap-6 items-center justify-center">
            <h1 className="text-center text-secondary-text/50 w-[60%]">This integrated approach enables faster execution, stronger brand consistency, reduced project complexity, and significantly better learner engagement.</h1>
            <ul className="flex flex-wrap gap-4 justify-center items-center  w-[50%] mx-auto">
                <li className="bg-white text-primary/70 py-2 px-4 rounded-full text-[0.875rem] shadow-md shadow-digital/50 hover:shadow-lg font-bold flex items-center gap-2 hover:-translate-y-2 transition-transform duration-300"> <Zap color="var(--color-digital)" className="drop-shadow-lg drop-shadow-digital/50" strokeWidth={0.875} /> Faster Execution</li>
                <li className="bg-white text-primary/70 py-2 px-4 rounded-full text-[0.875rem] shadow-md shadow-digital/50 hover:shadow-lg font-bold flex items-center gap-2 hover:-translate-y-2 transition-transform duration-300"> <Shapes color="var(--color-digital)" className="drop-shadow-lg drop-shadow-digital/50" strokeWidth={0.875} /> Stronger Brand Consistency</li>
                <li className="bg-white text-primary/70 py-2 px-4 rounded-full text-[0.875rem] shadow-md shadow-digital/50 hover:shadow-lg font-bold flex items-center gap-2 hover:-translate-y-2 transition-transform duration-300"> <Puzzle color="var(--color-digital)" className="drop-shadow-lg drop-shadow-digital/50" strokeWidth={0.875} /> Reduced Project Complexity</li>
                <li className="bg-white text-primary/70 py-2 px-4 rounded-full text-[0.875rem] shadow-md shadow-digital/50 hover:shadow-lg font-bold flex items-center gap-2 hover:-translate-y-2 transition-transform duration-300"> <Sparkles color="var(--color-digital)" className="drop-shadow-lg drop-shadow-digital/50" strokeWidth={0.875} /> Better Learner Engagement</li>
            </ul>
         </div>

      </div>
     </section>
    </>
   )
}