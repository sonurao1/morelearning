import { Mail, MoveRight } from "lucide-react";
import LinkButton from "@/components/ui/link-button";
import KineticGrid from "@/components/Kinetics-BG";

export default function CTA() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <KineticGrid className="absolute inset-0" globalColor="default">
        <div className="container mx-auto h-full flex flex-col items-center justify-center gap-6 p-8 text-center">
          <p className="flex gap-2 items-center uppercase border border-white/20 text-white/80 text-sm py-2 px-4 rounded-full">
            <Mail size={16} /> let's talk
          </p>

          <h2 className="text-4xl sm:text-5xl text-center max-w-2xl leading-tight text-white">
            Ready to Transform How Your Enterprise Learns?
          </h2>

          <p className="max-w-xl text-center text-white/60">
            Tell us about your learning, enablement or communication challenge — our team will put together the right mix of strategy, content and technology to solve it.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <LinkButton className="flex items-center gap-3" href="#">
              let's build your learning Experience
              <MoveRight />
            </LinkButton>

            <LinkButton
              className="flex items-center gap-3 bg-transparent border border-white/30 text-white hover:border-white/60"
              href="#"
            >
              View Our Work
              <MoveRight />
            </LinkButton>
          </div>
        </div>
      </KineticGrid>
    </section>
  );
}