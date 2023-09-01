import Image from "next/image"
import Button from "./Button"
import Profile from '@/public/images/avatar.png'

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
                        <div className="font-normal leading-[1.5rem] opacity-80 mb-6 space-y-3">
                            <p>Hello, I'm a junior front-end developer based in Nigeria, passionate about crafting exceptional web experiences. My focus is on creating accessible HTML, implementing modern CSS practices, and writing clean, efficient JavaScript code. While React is my forte, I'm always eager to embrace new tools and technologies.
                            </p>
                            <p>
                                Beyond the world of coding, I find joy in gaming, exploring captivating TV shows, and taking in the beauty of the outdoors. Gaming offers me immersive adventures, and I'm always up for a strategic challenge. When it comes to TV shows, I'm a dedicated binge-watcher, seeking out gripping narratives and captivating storytelling.
                            </p>
                            <p>
                                Nature calls to me, and you'll often find me outside, whether it's a refreshing walk or simply breathing in the fresh air. Nigeria's natural beauty is a constant source of inspiration.
                            </p>
                            <p>
                                Although I'm currently rooted in Nigeria, I'm enthusiastic about remote work opportunities and have a track record of thriving in remote team settings. In a globalized world, I believe that talent knows no borders, and I'm excited to contribute my skills to exciting projects, no matter where they may be.
                            </p>
                            <p>
                                I invite you to explore my work, and I'm eager to connect with fellow tech enthusiasts who share a passion for coding, gaming, TV shows, and the great outdoors."
                            </p>
                        </div>
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