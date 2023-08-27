import Image from "next/image"
import Button from "./Button"
import Profile from '@/public/images/profile.jpg'

const About = () => {
    return (
        <section className="py-20 sm:py-24 lg:py-[9.375rem] space-y-24 lg:space-y-[9.375rem]">
            <div className="sm:flex gap-x-16 lg:gap-x-28 items-center" >
                <Image

                    src={Profile}
                    className="py-8 sm:py-0 sm:w-2/5 lg:max-w-1/2 lg object-cover object-right" />

                <div>
                    <hr className="bg-grayish-dark-blue/20 h-px " />
                    <article className="text-grayish-dark-blue py-8 sm:py-[3.125rem]">
                        <h2 className=" font-ibarra text-[2.5rem] font-bold leading-[2.625rem] tracing-[-0.2231rem] mb-7">About Me</h2>
                        <p className="font-normal leading-[1.875rem] opacity-80 mb-6">I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
                        <Button route='/portfolio' text='go to portfolio' />
                    </article>
                    <hr className="bg-grayish-dark-blue/20 h-px" />
                </div>
            </div>
            <div className="text-center space-y-10 sm:space-y-0 sm:flex sm:gap-8  items-center ">
                <h3 className=" font-ibarra text-[2.5rem] font-bold leading-[2.625rem] tracking-[-0.02231rem] sm:max-w-[21.875rem] ">Interested in doing a project together?</h3>
                <hr className="bg-grayish-dark-blue/20 h-px max-sm:hidden w-full " />
                <Button route='/contact' text='contact&nbsp;me' />

            </div>
        </section>
    )
}

export default About