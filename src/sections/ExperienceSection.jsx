import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
          
          toggleActions: 'play reverse play reverse',
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "90% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",

          toggleActions: 'play reverse play reverse',
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="experience"
      className="flex-center section-padding xl:px-0 scroll-mt-10"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Projects built with modern technologies"
          sub="💼 Academic & Personal Projects"
          className='md:mt-20 m-0'
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-50 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} buildWith={card.buildWith}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo flex items-center justify-center"> 
                        <img src={card.logoPath} alt="logo" width={50} height={50} />
                      </div>
                      <div>
                        <h1 className="font-semibold text-5xl">{card.title}</h1>
                        <p className="text-[#839CB5] italic mt-10 text-[22px]">
                          GitHub Project Repository & Live Site
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5">
                          <li>
                            <a
                              href={card.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2 text-[15px] text-white-50 hover:text-white transition-colors duration-300"
                            >
                              <span className="relative">
                                View Repository
                                <span
                                  className="
                                    pointer-events-none
                                    absolute -bottom-1 left-0 h-[1px] w-full
                                    bg-[#839CB5]/50
                                    transition-colors duration-300
                                    group-hover:bg-white
                                  "
                                />
                              </span>

                              <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">
                                ↗
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href={card.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2 text-[15px] text-white-50 hover:text-white transition-colors duration-300"
                            >
                              <span className="relative">
                                Live Site
                                <span
                                  className="
                                    pointer-events-none 
                                    absolute -bottom-1 left-0 h-[1px] w-full
                                    bg-[#839CB5]/50
                                    transition-colors duration-300
                                    group-hover:bg-white
                                  "
                                />
                              </span>

                              <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">
                                ↗
                              </span>
                            </a>
                          </li>
                        </ul>
                        <h3 className="text-xl font-semibold text-white mt-8">
                          What I Learned ?
                        </h3>

                        <ul className="mt-4 list-disc ms-5 space-y-2 text-white-50">
                          {card.keypoints.map((points) => (
                            <li key={points}>{points}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;