import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const About = () => {
    return (
        <section className="py-20 sm:py-24 lg:py-[9.375rem]">
            <div>
                <Image />
                <article className="text-grayish-dark-blue">
                    <h2 className=" font-ibarra text-[2.5rem] font-bold leading-[2.625rem] tracing-[-0.2231rem]">About Me</h2>
                    <p className="font-normal leading-[1.875rem opacity-80">I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
                    <Button route='/portfolio' text='go to portfolio' />
                </article>
            </div>
            <div>
                <h3>Interested in doing a project together?</h3>
                <Link href='/contact'>contact me</Link>

            </div>
        </section>
    )
}

export default About