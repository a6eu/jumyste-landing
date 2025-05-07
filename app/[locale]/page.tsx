'use client'

import { Header } from '@/components/ui/header'
import { useEffect } from 'react'
import i18n from '@/lib/i18n'
import { I18nextProvider } from 'react-i18next'
import { useParams } from 'next/navigation'
import { Main } from '@/components/main'
import { About } from '@/components/about'
import { AiProcess } from '@/components/ai-process'
import { Reviews } from '@/components/reviews'
import { Faq } from '@/components/faq'
import { Download } from '@/components/download'
import { Footer } from '@/components/ui/footer'

export default function Home() {
    const { locale } = useParams()

    useEffect(() => {
        if (locale) {
            i18n.changeLanguage(locale as string)
        }
    }, [locale])

    return (
        <div className='h-[2000px]'>
            <I18nextProvider i18n={i18n}>
                <Header />
                <Main />
                <About />
                <AiProcess />
                <Reviews />
                <Faq />
                <Download />
                <Footer />
            </I18nextProvider>
        </div>
    )
}
