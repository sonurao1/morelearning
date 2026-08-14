import { Manrope, Berkshire_Swash } from "next/font/google";
import { TextAlignJustify, ArrowRight } from "lucide-react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "500",
});

const manropeWeight = Manrope({
  subsets: ["latin"],
  weight: "700",
});

const felipaWeight = Berkshire_Swash({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className={`${manrope.className} min-h-screen bg-black`}>

      {/* =====================================================
          HERO
      ====================================================== */}
      <main className="relative h-screen w-full overflow-hidden px-4 text-white">

        {/* Video Background */}
        <video
          src="/videos/HeroBG.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-1 bg-black/40" />

        {/* =====================================================
            NAVBAR
        ====================================================== */}
        <div className="fixed left-1/2 top-5 z-50 h-10 w-full -translate-x-1/2 px-6">

          <nav
            className="
              mx-auto
              flex
              h-full
              max-w-[1450px]
              items-center
              justify-between
              rounded-full
              border-l-2
              border-r-2
              border-blue-500
              bg-black/20
              px-6
              py-8
              backdrop-blur-sm
              md:justify-evenly
            "
          >

            {/* Logo */}
            <h1 className="whitespace-nowrap text-lg md:text-xl">
              <span className="text-[#1054E8]">More</span>
              Learning
            </h1>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-1 lg:gap-6 md:flex">

              <li>
                <a
                  href="#"
                  className="
                    inline-block
                    rounded-full
                    border-l-2
                    border-r-2
                    border-transparent
                    px-2
                    py-0.5
                    text-[clamp(0.9rem,0.9vw,3rem)]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:text-blue-500
                  "
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    inline-block
                    rounded-full
                    border-l-2
                    border-r-2
                    border-transparent
                    px-2
                    py-0.5
                    text-[clamp(0.9rem,0.9vw,3rem)]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:text-blue-500
                  "
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    inline-block
                    rounded-full
                    border-l-2
                    border-r-2
                    border-transparent
                    px-2
                    py-0.5
                    text-[clamp(0.9rem,0.9vw,3rem)]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:text-blue-500
                  "
                >
                  Our Work
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    inline-block
                    rounded-full
                    border-l-2
                    border-r-2
                    border-transparent
                    px-2
                    py-0.5
                    text-[clamp(0.9rem,0.9vw,3rem)]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:text-blue-500
                  "
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    inline-block
                    rounded-full
                    border-l-2
                    border-r-2
                    border-transparent
                    px-2
                    py-0.5
                    text-[clamp(0.9rem,0.9vw,3rem)]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:text-blue-500
                  "
                >
                  Contact
                </a>
              </li>

            </ul>

            {/* Connect Button */}
            <a
              href="#"
              className="
                hidden
                rounded-full
                bg-blue-500
                px-4
                py-2
                text-[clamp(0.9rem,0.9vw,3rem)]
                transition-colors
                duration-300
                hover:bg-blue-400
                md:block
              "
            >
              Connect Now
            </a>

            {/* Mobile Menu */}
            <button
              type="button"
              className="block md:hidden"
              aria-label="Open menu"
            >
              <TextAlignJustify size={25} />
            </button>

          </nav>
        </div>

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-10
            flex
            h-full
            w-full
            flex-col
            justify-center
            gap-6
          "
        >

          {/* Heading */}
          <h1
            className={`
              ${manropeWeight.className}
              mx-auto
              w-full
              max-w-[1450px]
              px-4
              text-white
              text-[clamp(2rem,4vw,4rem)]
              leading-[1.1]
            `}
          >
            Transform Enterprise <br />

            Knowledge Into{" "}

            <span
              className={`
                ${felipaWeight.className}
                text-[#1054E8]
                italic
                underline
                decoration-blue-300
                decoration-2
                underline-offset-4
              `}
            >
              Experiences
            </span>

            <br />

            People Understand, <br />

            Remember & Act On.
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              w-full
              max-w-[1450px]
              px-4
              text-[0.8rem]
              leading-relaxed
              text-gray-300/80
              lg:text-[1rem]
            "
          >
            MoreLearning helps global enterprises enable employees, customers,
            <br className="hidden md:block" />

            dealers and sales teams through interactive learning, visual
            <br className="hidden md:block" />

            communication, AI-powered experiences, simulations, presentations,
            <br className="hidden md:block" />

            videos, 3D and immersive technologies.
          </p>

          {/* =====================================================
              BUTTONS
          ====================================================== */}
          <div
            className="
              relative
              mx-auto
              flex
              w-full
              max-w-[1450px]
              flex-col
              gap-4
              px-4
              capitalize
              md:flex-row
            "
          >

            {/* -------------------------------------------------
                BUTTON 1
            -------------------------------------------------- */}
            <a
              href="#"
              className="
                flex
                w-fit
                items-center
                gap-2
                bg-blue-800
                p-4
                text-sm
                text-white
                transition-all
                duration-300
                hover:bg-blue-700
                lg:text-base
              "
            >
              let's build your learning experience

              <ArrowRight
                size={20}
                className="shrink-0"
              />
            </a>


            {/* -------------------------------------------------
                BUTTON 2
            -------------------------------------------------- */}
     <div className="relative z-[1] w-fit group">

  {/* TOP LEFT */}
  <span className="absolute -left-1 -top-1 z-0 h-4 w-4 border-l-1 border-t-1 group-hover:w-6 group-hover:h-6  group-hover:-left-2 group-hover:-top-2 transition-all duration-300" />

  {/* TOP RIGHT */}
  <span className="absolute -right-1 -top-1 z-0 h-4 w-4 border-r-1 border-t-1 group-hover:w-6 group-hover:h-6  group-hover:-right-2 group-hover:-top-2 transition-all duration-300" />

  {/* BOTTOM LEFT */}
  <span className="absolute -bottom-1 -left-1 z-0 h-4 w-4 border-l-1 border-b-1 group-hover:w-6 group-hover:h-6  group-hover:-left-2 group-hover:-bottom-2 transition-all duration-300" />

  {/* BOTTOM RIGHT */}
  <span className="absolute -bottom-1 -right-1 z-0 h-4 w-4 border-r-1 border-b-1 group-hover:w-6 group-hover:h-6  group-hover:-right-2 group-hover:-bottom-2 transition-all duration-300" />

  {/* BLACK BUTTON */}
  <a
    href="#"
    className="
      relative
      z-[1]
      flex
      w-fit
      items-center
      gap-2
      bg-black
      p-4
      text-white
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      view our work
      <ArrowRight size={20} />
    </span>
  </a>

</div>


          </div>

        </div>

      </main>


      {/* =====================================================
          OTHER CONTENT
      ====================================================== */}
      <section className="min-h-[200vh] bg-black px-6 py-20 text-white">

        <div className="mx-auto max-w-[1450px]">

          <p className="leading-8 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eaque neque incidunt possimus architecto deleniti animi dolor,
            harum esse adipisci accusantium amet quia totam, tempore nisi
            consequatur eos qui itaque voluptatibus excepturi.

            Dolorem, fugit deleniti veniam animi corrupti doloremque,
            molestiae aperiam placeat recusandae voluptatum temporibus
            distinctio quo aliquid, neque totam.

            Nulla ab delectus amet, vel earum, velit dolorem temporibus
            facilis architecto explicabo unde eius minima veniam
            voluptatibus quas esse non ipsam laborum totam at laboriosam
            debitis.

            Tempora nobis ratione ad impedit esse asperiores vitae dolore?
            Enim, temporibus. Quibusdam suscipit ex odio vitae, nam
            voluptatem nobis doloremque distinctio similique pariatur ipsam
            sint consequuntur, rem error eligendi a autem quos magni.

            Aliquam, quisquam aliquid. Minima sapiente amet voluptatem fuga
            corporis aut veniam culpa, sequi quasi suscipit ratione harum
            doloribus ab voluptates voluptatibus vitae distinctio totam iure
            voluptate soluta nemo neque dignissimos itaque.

            Modi totam, voluptatem minima suscipit debitis harum facilis
            facere enim impedit. Excepturi et magni a minima, dolor,
            perspiciatis, in totam optio placeat odit dignissimos veniam
            consequatur vero consectetur molestias exercitationem
            aspernatur voluptatibus ad.

            Ea dicta, est itaque rem et sit expedita explicabo exercitationem
            tempore voluptate voluptas fuga esse fugit debitis ipsum quod
            recusandae.

            Nihil veniam odio ratione sapiente dignissimos. Obcaecati
            aperiam impedit deleniti natus veritatis, eveniet harum earum
            iste molestias.

            Consequuntur ut ipsum rerum, soluta iste voluptatibus omnis
            earum esse, molestias cupiditate, iusto accusantium dignissimos
            nemo ratione perspiciatis nisi laboriosam officiis nobis hic
            maxime sed.

            Odio similique autem, eius error nisi eos quae incidunt, ipsa
            qui consectetur enim expedita aspernatur soluta natus, nulla
            perspiciatis.

            Ex unde reprehenderit est saepe qui natus officia. Assumenda
            reiciendis eaque velit. Eveniet quisquam blanditiis voluptatum
            placeat perferendis.

            Vero inventore laudantium nemo unde hic harum molestias
            blanditiis repellat. Consequatur, est dolore rem eveniet sed
            vel molestias aut.
          </p>

        </div>

      </section>

    </div>
  );
}
