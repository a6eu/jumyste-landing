'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Faq = () => {
    const { t } = useTranslation()
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const faqItems = t('faq1.items', { returnObjects: true }) as Array<{
        question: string
        answer: string
    }>

    return (
        <div id='faq' className='px-4 sm:px-8 lg:px-16 xl:px-20 py-10 max-w-5xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-primary font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                    {t('faq1.title')}
                </h1>
                <p className='mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-light'>
                    {t('faq1.description')}
                </p>
            </div>

            <div className='flex flex-col items-center mt-8 sm:mt-10'>
                <div
                    onClick={() => handleClick(0)}
                    className='border-b-2 border-gray-300 w-full max-w-4xl p-5 sm:p-6 cursor-pointer transform duration-300'
                >
                    <div className='flex justify-between items-start gap-4'>
                        <div className='flex items-start gap-4'>
                            <Image
                                src='/assets/svg/question-cube.svg'
                                width={40}
                                height={40}
                                alt=''
                                className='sm:w-12 sm:h-12'
                            />
                            <div className='flex flex-col'>
                                <h3 className='text-primaryBlocks text-lg sm:text-xl md:text-2xl'>
                                    {faqItems[0]?.question}
                                </h3>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openIndex === 0
                                            ? 'max-h-[300px] opacity-100 mt-2'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className='text-sm sm:text-base md:text-lg font-light'>
                                        {faqItems[0]?.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src='/assets/svg/chevron-down.svg'
                            className={`mt-1 transform transition-transform duration-300 ${
                                openIndex === 0 ? 'rotate-180' : 'rotate-0'
                            }`}
                            width={24}
                            height={10}
                            alt=''
                        />
                    </div>
                </div>

                <div
                    onClick={() => handleClick(1)}
                    className='border-b-2 border-gray-300 w-full max-w-4xl p-5 sm:p-6 cursor-pointer transform duration-300'
                >
                    <div className='flex justify-between items-start gap-4'>
                        <div className='flex items-start gap-4'>
                            <Image
                                src='/assets/svg/question-cube.svg'
                                width={40}
                                height={40}
                                alt=''
                                className='sm:w-12 sm:h-12'
                            />
                            <div className='flex flex-col'>
                                <h3 className='text-primaryBlocks text-lg sm:text-xl md:text-2xl'>
                                    {faqItems[1]?.question}
                                </h3>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openIndex === 1
                                            ? 'max-h-[300px] opacity-100 mt-2'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className='text-sm sm:text-base md:text-lg font-light'>
                                        {faqItems[1]?.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src='/assets/svg/chevron-down.svg'
                            className={`mt-1 transform transition-transform duration-300 ${
                                openIndex === 1 ? 'rotate-180' : 'rotate-0'
                            }`}
                            width={24}
                            height={10}
                            alt=''
                        />
                    </div>
                </div>

                <div
                    onClick={() => handleClick(2)}
                    className='border-b-2 border-gray-300 w-full max-w-4xl p-5 sm:p-6 cursor-pointer transform duration-300'
                >
                    <div className='flex justify-between items-start gap-4'>
                        <div className='flex items-start gap-4'>
                            <Image
                                src='/assets/svg/question-cube.svg'
                                width={40}
                                height={40}
                                alt=''
                                className='sm:w-12 sm:h-12'
                            />
                            <div className='flex flex-col'>
                                <h3 className='text-primaryBlocks text-lg sm:text-xl md:text-2xl'>
                                    {faqItems[2]?.question}
                                </h3>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openIndex === 2
                                            ? 'max-h-[300px] opacity-100 mt-2'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className='text-sm sm:text-base md:text-lg font-light'>
                                        {faqItems[2]?.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src='/assets/svg/chevron-down.svg'
                            className={`mt-1 transform transition-transform duration-300 ${
                                openIndex === 2 ? 'rotate-180' : 'rotate-0'
                            }`}
                            width={24}
                            height={10}
                            alt=''
                        />
                    </div>
                </div>

                <div
                    onClick={() => handleClick(3)}
                    className='border-b-2 border-gray-300 w-full max-w-4xl p-5 sm:p-6 cursor-pointer transform duration-300'
                >
                    <div className='flex justify-between items-start gap-4'>
                        <div className='flex items-start gap-4'>
                            <Image
                                src='/assets/svg/question-cube.svg'
                                width={40}
                                height={40}
                                alt=''
                                className='sm:w-12 sm:h-12'
                            />
                            <div className='flex flex-col'>
                                <h3 className='text-primaryBlocks text-lg sm:text-xl md:text-2xl'>
                                    {faqItems[3]?.question}
                                </h3>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openIndex === 3
                                            ? 'max-h-[300px] opacity-100 mt-2'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className='text-sm sm:text-base md:text-lg font-light'>
                                        {faqItems[3]?.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src='/assets/svg/chevron-down.svg'
                            className={`mt-1 transform transition-transform duration-300 ${
                                openIndex === 3 ? 'rotate-180' : 'rotate-0'
                            }`}
                            width={24}
                            height={10}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Faq }
