'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const logos = [
    '/assets/svg/kaspi.svg',
    '/assets/svg/jusan.svg',
    '/assets/svg/beeline.svg',
    '/assets/svg/magnum.svg',
    '/assets/svg/freedom.svg',
]

const About = () => {
    const { t } = useTranslation()

    return (
        <div
            id='partners'
            className='px-4 mt-40 lg:mt-10 pb-20 max-w-[1270px] mx-auto text-center text-xl sm:text-2xl lg:text-3xl font-light flex flex-col gap-52'
        >
            <div>
                <div>
                    {t('info.title')} <br />
                    {t('info.description')}
                </div>
                <div className='flex flex-wrap justify-center gap-4 md:gap-10 mt-4'>
                    {logos.map((logo, index) => (
                        <div key={index} className='h-auto max-w-[100px]'>
                            <Image
                                src={logo}
                                alt='Logo'
                                width={100}
                                height={100}
                                className='w-full h-auto object-contain'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div id='about' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
                <Block heading={t('info.block1')} />
                <Block
                    vacancyCount={1000}
                    heading={t('info.block2')}
                    src='/assets/svg/block-2.svg'
                />
                <Block
                    vacancyCount={300}
                    heading={t('info.block3')}
                    src='/assets/svg/block-3.svg'
                />
                <Block
                    vacancyCount={800}
                    heading={t('info.block4')}
                    src='/assets/svg/block-4.svg'
                />
                <Block vacancyCount={500} src='/assets/svg/block-5.svg' />
                <Block
                    vacancyCount={200}
                    heading={t('info.block5')}
                    src='/assets/svg/block-6.svg'
                />
                <Block
                    vacancyCount={2000}
                    heading={t('info.block6')}
                    src='/assets/svg/block-7.svg'
                />
                <Block
                    vacancyCount={1000}
                    heading={t('info.block7')}
                    src='/assets/svg/block-8.svg'
                />
            </div>
        </div>
    )
}

export { About }

type BlockProps = {
    src?: string
    heading?: string
    vacancyCount?: number
}

const Block = ({
    src = '/assets/svg/block-1.svg',
    heading = 'Аккаунтинг',
    vacancyCount = 500,
}: BlockProps) => {
    const [isWhite, setIsWhite] = useState(true)

    return (
        <div
            onMouseEnter={() => setIsWhite(false)}
            onMouseLeave={() => setIsWhite(true)}
            className={`rounded-3x border transition-all duration-100 ${
                !isWhite
                    ? 'bg-primaryBlocks text-white border-transparent'
                    : 'bg-transparent text-black border-[#A3A2A2]'
            } p-4 w-full h-64 rounded-3xl text-white flex flex-col`}
        >
            <div
                className={`${
                    isWhite ? 'bg-white' : 'bg-white/45'
                } flex w-20 h-16 justify-center items-center rounded-[15px] shrink-0`}
            >
                <Image
                    src={src}
                    width={45}
                    height={45}
                    objectFit='cover'
                    alt=''
                    className='fill-white stroke-white'
                />
            </div>
            <div className={`font-medium text-2xl text-start mt-7 ${isWhite ? 'text-black' : ''}`}>
                {heading}
            </div>
            <div className='flex items-end h-full w-full'>
                <div
                    className={`w-full flex items-center justify-between text-lg ${isWhite ? 'text-black' : ''}`}
                >
                    <div>
                        <span className='font-gilroy'>{vacancyCount}+</span> вакансий
                    </div>
                    <ArrowRight color={!isWhite ? '#FFFF' : 'black'} size={25} />
                </div>
            </div>
        </div>
    )
}
