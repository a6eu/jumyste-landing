'use client'
import { Logo } from '@/components/logo'
import Link from 'next/link'
import { PrimaryButton } from './primary-button'
import { SetStateAction, useState } from 'react'
import { AlignRight, X } from 'lucide-react'
import { useScreenDetector } from '@/hooks/use-screen-detector'
import LanguageSwitcher from '@/components/language-switcher'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { isTablet } = useScreenDetector()
    const handleBurgerClick = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>
            <header className='bg-[#DAD2FF]'>
                <div className='flex font-medium text-primary items-center justify-between px-4 py-5 md:py-[36px] max-w-screen-xl mx-auto'>
                    <Logo />
                    {!isTablet ? (
                        <>
                            <nav className='flex justify-between items-center *:uppercase max-w-screen-sm w-full mx-5'>
                                <Link href='#partners'>наши партнёры</Link>
                                <Link href='#about'>О нас</Link>
                                <Link href='#faq'>FAQ</Link>
                                <Link href='#download'>скачать</Link>
                            </nav>
                            <div className='flex justify-between items-center w-full max-w-72'>
                                <LanguageSwitcher />
                                <PrimaryButton
                                    onClick={() =>
                                        (window.location.href = 'https://jumyste.click/auth')
                                    }
                                    text='Войти'
                                />
                            </div>
                        </>
                    ) : (
                        <AlignRight color='#493d9e' onClick={handleBurgerClick} size={64} />
                    )}
                </div>
            </header>
            {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
        </>
    )
}

const MobileMenu = ({ setShowMenu }: { setShowMenu: (value: SetStateAction<boolean>) => void }) => {
    const handleXClick = () => {
        setShowMenu(false)
    }
    return (
        <nav className='z-50 font-antipasto font-demibold gap-5 w-[100vw] flex flex-col bg-white h-[100vh] fixed lg:hidden text-primary text-3xl top-0 p-5'>
            <div className='flex self-end'>
                <X onClick={handleXClick} size={64} color='#493d9e' />
            </div>
            <Link href='#parnters'>наши партнёры</Link>
            <Link href='#about'>О нас</Link>
            <Link href='#faq'>FAQ</Link>
            <Link href='#download'>Скачать</Link>
        </nav>
    )
}

export { Header }
