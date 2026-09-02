// social media svgs
import XIcon from "@/assets/svgs/x.svg";
import VimeoIcon from "@/assets/svgs/vimeo.svg";
import FacebookIcon from "@/assets/svgs/facebook.svg";
import LinkedInIcon from "@/assets/svgs/linkedin.svg";
import InstagramIcon from "@/assets/svgs/instagram.svg";


// NavBar Data
export const navbarData = [
    {
        url: "/",
        text: "Home",
    },
    {
        url: "about",
        text: "About",
    },
    {
        url: "/services",
        text: "Services",
        items: [
            {
                url: "/services/customer-elearning-development",
                text: "Custom elearning"
            },
            {
                url: "/services/rapid-elearning",
                text: "Rapid elearning"
            },
            {
                url: "/services/mobile-elearning",
                text: "Mobile elearning"
            },
            {
                url: "/services/explainer-videos",
                text: "Explainer videos"
            },
            {
                url: "/services/simulation-and-game-based-learning",
                text: "Simulation and Game based learning"
            },
            {
                url: "/services/translation-and-localization",
                text: "Translation and Localization"
            },
            {
                url: "/services/classroom-and-face-to-face-learning-to-elearning",
                text: "Classroom and Face to Face elearning"
            },
            {
                url: "/services/lms-development-and-management",
                text: "LMS development and management"
            },
            {
                url: "/services/flash-to-html5-conversion",
                text: "Flash to HTML5 conversion"
            },
            {
                url: "/services/ar-vr-and-360-learning-experience",
                text: "AR, VR & 360° Learning Experience"
            },
            {
                url: "/services/elarning-and-training-consultancy",
                text: "eLearning and Training Consultancy"
            },
            {
                url: "/services/outsources-learning-and-development",
                text: "Outsource learning and development"
            },
        ]
    },
    {
        url: "portfolio",
        text: "Portfolio",
    },
    {
        url: "https://morestudios.in/blogs",
        text: "Blog",
    },
    
     {
        url: "/contact",
        text: "Contact",
     },
    
]

// NOTE: `socialMedia` and `services` below are not currently consumed by
// layouts/footer.tsx (it renders its own inline placeholder social icons
// and capability list instead) — `contact` IS wired up now (see footer.tsx).
// `socialMedia.url` values below point to MoreStudios accounts (a different
// client's project this data was copied from) — replace with MoreLearning's
// real social URLs before wiring this array up to the live footer.
export const footer = {
    socialMedia: [
    {
      icon: FacebookIcon,
      altText: "Facebook Logo",
      url: "https://www.facebook.com/people/MoreStudios/61551484257691/",
    },
    {
      icon: InstagramIcon,
      altText: "Instagram Logo",
      url: "https://www.instagram.com/morestudios8/",
    },
    {
      icon: VimeoIcon,
      altText: "Vimeo Logo",
      url: "https://vimeo.com/user257512452",
    },
    {
      icon: XIcon,
      altText: "X Logo",
      url: "https://x.com/morestudio8",
    },
    {
      icon: LinkedInIcon,
      altText: "LinkedIn Logo",
      url: "https://www.linkedin.com/company/morestudios",
    },
  ],
   services: [
            {
                url: "/services/customer-elearning-development",
                text: "Custom elearning development"
            },
            {
                url: "/services/rapid-elearning",
                text: "Rapid elearning"
            },
            {
                url: "/services/mobile-elearning",
                text: "Mobile elearning"
            },
            {
                url: "/services/explainer-videos",
                text: "Explainer videos"
            },
            {
                url: "/services/simulation-and-game-based-learning",
                text: "Simulation and Game based learning"
            },
            {
                url: "/services/translation-and-localization",
                text: "Translation and Localization"
            },
            {
                url: "/services/classroom-and-face-to-face-learning-to-elearning",
                text: "Classroom and Face to Face training to elearning"
            },
            {
                url: "/services/lms-development-and-management",
                text: "LMS development and management"
            },
            {
                url: "/services/flash-to-html5-conversion",
                text: "Flash to HTML5 conversion"
            },
            {
                url: "/services/ar-vr-and-360-learning-experience",
                text: "AR, VR & 360° Learning Experience"
            },
            {
                url: "/services/elarning-and-training-consultancy",
                text: "eLearning and Training Consultancy"
            },
            {
                url: "/services/outsources-learning-and-development",
                text: "Outsource learning and development"
            },
        ],
    ourPages:[
        {
            url:"/about",
            text:"About"
        },
        {
            url:"/services",
            text:"Services"
        },
        {
            url:"/contact",
            text:"Contact"
        },
        {
            url:"/blog",
            text:"Blog"
        },
        {
            url:"/portfolio",
            text:"Portfolio"
        },
    ],
    contact:[
        {
            text:"contact@morelearningsolutions.com",
            type:"mail"
        },
        {
            text:"+919773547193",
            type:"telephone"
        },
        {
            text:"125, 1st Floor, Tribhuvan Complex, Ishwar Nagar, New Delhi, 110065",
            type:"address"
        },
    ]
        
}