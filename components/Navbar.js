"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from '@/public/images/logo.svg'
import Hamburger from '@/public/icons/hamburger.svg'
import CloseIcon from '@/public/icons/close.svg'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from "react"

const Navbar = () => {

    const currentRoute = usePathname()
    const [mobileNav, setMobileNav] = useState(false)
    const menuWidth = mobileNav ? 18 : 24
    const menuHeight = mobileNav ? 19 : 13

    const handleClick = () => {
        setMobileNav(prev => !prev)
    }



    return (
        <header className="bg-very-light-grey  sticky top-0 px-8 py-8 sm:px-10 sm:py-14 shadow-lg z-10">

            {/* Mobile Nav */}
            <nav className="sm:hidden  flex justify-between items-center">

                <Link href="/">
                    <Image
                        src={Logo}
                        width={61}
                        height={32}
                        alt="Portfolio Logo"
                        priority={true}
                    />
                </Link>
                <button onClick={handleClick}>
                    <Image
                        src={mobileNav
                            ? CloseIcon
                            : Hamburger}
                        width={menuWidth}
                        height={menuHeight}
                        alt="Mobile Menu" />
                </button>

                {mobileNav
                    ? <div className="absolute right-8 top-[5.5rem] z-10 w-3/5 bg-grayish-dark-blue uppercase py-10  ">
                        <ul className="text-white text-center text-xs font-normal tracking-[.125rem] flex flex-col gap-8">
                            <li>
                                <Link href='/'>home</Link>
                            </li>
                            <li>
                                <Link href='/portfolio'>portfolio</Link>
                            </li>
                            <li>
                                <Link href='/contact'>contact me</Link>
                            </li>
                        </ul>
                    </div>
                    : ''}


            </nav>

            {/* Tab and Desktop Nav */}
            <nav className="max-sm:hidden wrapper flex justify-between items-center">
                <Link href="/">
                    <Image
                        src={Logo}
                        width={61}
                        height={32}
                        alt="Portfolio Logo"
                        priority={true}
                    />
                </Link>
                <ul className="flex uppercase gap-[2.62rem] text-xs font-normal tracking-[.123rem] ">
                    <li>
                        <Link href="/" className={currentRoute === '/'
                            ? 'text-cyan hover:text-cyan'
                            : 'hover:text-cyan'}>home
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className={currentRoute === '/portfolio'
                            ? 'text-cyan hover:text-cyan'
                            : 'hover:text-cyan'}>portfolio</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={currentRoute === '/contact'
                            ? 'text-cyan hover:text-cyan'
                            : 'hover:text-cyan'}>contact me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar