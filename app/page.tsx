'use client'

import { Header } from '@/components/ui/header'
import { Main } from '@/components/main'
import { About } from '@/components/about'
import { AiProcess } from '@/components/ai-process'
import { Reviews } from '@/components/reviews'
import { Faq } from '@/components/faq'
import { Download } from '@/components/download'
import { Footer } from '@/components/ui/footer'

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <AiProcess />
            <Reviews />
            <Faq />
            <Download />
            <Footer />
        </>
    )
}
