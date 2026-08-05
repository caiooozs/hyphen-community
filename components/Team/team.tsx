"use client"


import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Team = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section id="team" ref={sectionRef}>
        <div>
            <h1>

            </h1>
        </div>
        </section>
    )
}