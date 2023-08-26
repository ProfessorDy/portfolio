
import Link from "next/link"
import Image from "next/image"
import Logo from '@/public/images/logo-light.svg'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className="bg-grayish-dark-blue w-full py-14 sm:py-6 sm:px-10    ">
            <div className="wrapper flex max-sm:flex-col justify-between  items-center gap-10">
                <nav className="flex gap-10 sm:gap-12 max-sm:flex-row items-center ">
                    <Link href='/'>
                        <Image src={Logo} width={76.44} height={32} alt="Portfolio Logo" className="mr-0" />
                    </Link>
                    <div>
                        <ul className="uppercase text-white text-center text-xs font-normal tracing-[.125rem] flex max-sm:flex-col gap-8 sm:gap-[2.62rem ]">
                            <li>
                                <Link href='/' className="hover:text-cyan">home</Link>
                            </li>
                            <li>
                                <Link href='./portfolio' className="hover:text-cyan">portfolio</Link>
                            </li>
                            <li>
                                <Link href='./contact' className="hover:text-cyan">contact me</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="flex gap-4">
                    <a href='https://github.com/ProfessorDy' target="_blank">
                        <BsGithub color="white" size='1.5em' />
                    </a>
                    <a href="https://twitter.com/devsthiny" target="_blank">
                        <BsTwitter color="white" size='1.5em' />
                    </a>
                    <a href="https://www.linkedin.com/in/destiny-adebayo/" target="_blank">
                        <BsLinkedin color="white" size='1.5em' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer