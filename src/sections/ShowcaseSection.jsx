import { useRef} from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const Project1Ref = useRef(null);
    const Project2Ref = useRef(null);
    const Project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [Project1Ref.current, Project2Ref.current, Project3Ref.current];
        
        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y:50, opacity: 0
            },
            {
                y:0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                }
            }

        )
    })
        gsap.fromTo(
            sectionRef.current, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1.5 }
        )
    },[]);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/*LEFT*/}
                <div className='first-project-wrapper' ref={Project1Ref}>
                    <div className='image-wrapper bg-[#ffefdb] pt-8 pb-8'>
                        <img src='/images/suburbia-skate.png' alt='Ryde' />
                    </div>
                    <div className='text-content'>
                        <h2>Escape the cul-de-sac. <span>Own the streets.</span></h2>
                        <p className='text-white-50 md:text-xl'>Suburbia Skate builds boards inspired by street culture, crafted for control, balance, and the freedom to skate your own line.</p>
                    </div>
                </div>
                {/*RIGHT*/}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={Project2Ref}>
                        <div className='flex items-center justify-center image-wrapper bg-[#ffefdb] pt-5 pb-5'>
                            <img src='/images/fizzi.png' alt='Library Managemenmt Platform' />
                        </div>  
                        <h2>Fizzi - Good for Your Gut. Great for Your Taste.</h2>
                    </div>

                    <div className='project' ref={Project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb] pt-5 pb-5'>
                            <img src='/images/nextgen.png' alt='YC Directory' />
                        </div>
                        <h2>NextGen Arena – A Competitive Gaming Platform</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection