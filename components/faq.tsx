'use client'
import Image from 'next/image'
import { useState } from 'react'

const faqItems = [
    {
        question: 'Как работает ваш сервис?',
        answer: 'Наш сервис использует искусственный интеллект для подбора лучших кандидатов и вакансий. Просто создайте профиль, добавьте информацию о себе или своей компании, и система подберет вам подходящие варианты.',
    },
    {
        question: 'Как искать работу?',
        answer: 'Вы можете искать работу с помощью удобного фильтра вакансий, а также получать рекомендации на основе ваших навыков и опыта.',
    },
    {
        question: 'Как оставить отзыв?',
        answer: 'Просто перейдите в профиль компании и оставьте свой отзыв. Все отзывы проходят модерацию.',
    },
    {
        question: 'Как связаться с работодателем?',
        answer: 'Вы можете отправить сообщение работодателю прямо на платформе после подачи заявки на вакансию.',
    },
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div
            id="faq"
            className="px-4 sm:px-8 lg:px-16 xl:px-20 py-10 max-w-5xl mx-auto"
        >
            {/* Title Section */}
            <div className="text-center">
                <h1 className="text-primary font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Часто задаваемые вопросы
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-light">
                    В этом разделе вы найдете информацию о том, как{' '}
                    <br className="hidden md:block" />
                    работает наш сервис, как искать работу, оставлять отзывы и
                    многое другое. Мы постарались ответить на{' '}
                    <br className="hidden md:block" />
                    всё, что может вас заинтересовать.
                </p>
            </div>

            {/* FAQ List */}
            <div className="flex flex-col items-center mt-8 sm:mt-10">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className="border-b-2 border-gray-300 w-full max-w-4xl p-5 sm:p-6 cursor-pointer transform duration-300"
                    >
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/assets/svg/question-cube.svg"
                                    width={40}
                                    height={40}
                                    alt=""
                                    className="sm:w-12 sm:h-12"
                                />
                                <div className="flex flex-col">
                                    <h3 className="text-primaryBlocks text-lg sm:text-xl md:text-2xl">
                                        {item.question}
                                    </h3>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                            openIndex === index ?
                                                'max-h-[300px] opacity-100 mt-2'
                                            :   'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <p className="text-sm sm:text-base md:text-lg font-light">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src="/assets/svg/chevron-down.svg"
                                className={`mt-1 transform transition-transform duration-300 ${
                                    openIndex === index ? 'rotate-180' : (
                                        'rotate-0'
                                    )
                                }`}
                                width={24}
                                height={10}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Faq }
