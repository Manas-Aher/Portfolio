import React, { useRef } from 'react'

const GlowCard = ({ card, children, index , buildWith }) => {

    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {             // e event of the actual mouse means move event
        const card = cardRefs.current[index];
        if(!card) return;


        // Get the mouse position relative to card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;


        // Calc the angle from the center of the card 
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        angle = (angle + 360) % 360;
        
        
        card.style.setProperty('--start', angle + 60)
    }

  return (
    <div ref={(el) => (cardRefs.current[index] = el)} onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl p-10'>
        <p className="mb-4 max-w-xl text-base text-[#839CB5]">
            {card.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className="text-sm uppercase tracking-widest text-[#839CB5]/70">
            Built with
        </span>

        {buildWith?.map((tech) => (
            <span
            key={tech}
            className="
                rounded-full
                border border-[#839CB5]/30
                px-3 py-1
                text-sm
                text-[#839CB5]
            "
            >
            {tech}
            </span>
        ))}
        </div>
        {children}
    </div>
  )
}

export default GlowCard