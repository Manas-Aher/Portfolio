import AnimatedCounter from "../components/AnimatedCounter"
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { words } from "../constants"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { navLinks } from '../constants'

const Hero = () => {

    useGSAP(() => {
        gsap.fromTo(".hero-text h1", 
            {
                y:50,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                stagger: 0.5,
                duration: 1,
                ease: 'power2.inOut'
            }
        )
    })

  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='hero-layout flex flex-col md:flex-row'>
            {/* Left: Hero Content */}
            <header className='flex flex-col justify-center w-full md:w-[55%] md:px-20 px-5 md:h-auto'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>
                            Shaping
                            <span className='slide'>
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                        <span>{word.text}</span>
                                    </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                        Hi, I’m Manas — a dedicated and detail-driven web developer with a strong focus on building user-friendly, visually appealing, and performance-optimized websites.    
                    </p>
                    <Button 
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="See my Work"
                        href={navLinks[1].link}
                    />
                </div>
            </header>

            {/* Right: 3D Model */}
            <div className="w-full md:pr-20 pr-5 md:pt-20 pt-5 md:pb-20 pb-10 md:w-[45%] " >
                <img src="/images/Manas1.jpg" className="md:mb-30 mb-0 md:mt-20 mt-0 rounded-lg " />
            </div>
        </div>
    </section>

  )
}

export default Hero