import Image from 'next/image'
import HeroImage from '@/public/images/hero.jpg'
import { FaDownload } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className='relative '>
            <Image
                src={HeroImage}
                className=' max-h-64 sm:max-h-[37.5 rem] lg:max-h-[49.875rem] object-cover '
            />
            <article className='bg-very-light-grey max-w-[32.125rem] sm:absolute bottom-0 left-0  sm:pt-14   sm:pr-14'>
                <h1 className='max-sm:mt-6 text-greyish-dark-blue font-ibarra text-[2.5rem] font-bold leading-[2.625rem] tracking-tight '>Hey, I’m Destiny Adebayo  and I love building beautiful user interfaces</h1>
                <button className='bg-dark-blue hover:bg-cyan  text-cyan hover:text-white flex mt-8 sm:mt-12'>
                    <div className='bg-black/20 p-4'>
                        <FaDownload />
                    </div>
                    <p className=' uppercase text-white text-center text-xs font-normal tracking-[0.125rem] w-[9.5rem] py-4 '>resume</p>
                </button>
            </article>
        </section>
    )
}

export default Hero