import Image from 'next/image'

const AiProcess = () => {
    return (
        <div
            id='ai-process'
            className='bg-secondaryLight/60 w-full min-h-[520px] text-center py-7 px-4 overflow-hidden'
        >
            <div className='text-2xl lg:text-3xl font-light'>
                Нанимайте быстрее и проще с ИИ!
                <p className='font-semibold text-primary text-3xl lg:text-5xl'>
                    Как работает на ИИ-рекрутер?
                </p>
            </div>
            <div className='flex gap-14 flex-col *:flex-shrink lg:flex-row items-center lg:items-baseline lg:justify-between max-w-[1297px] mx-auto mt-16'>
                <div className='w-[328px] flex flex-col gap-3 items-center text-center'>
                    <div className='bg-primaryBlocks size-24 rounded-full flex justify-center items-center'>
                        <Image src={'/assets/svg/ai-1.svg'} width={50} height={50} alt='' />
                    </div>
                    <div>
                        <div className='text-primary font-semibold text-2xl text-pretty'>
                            Анализ <br /> и подбор кандидатов
                        </div>
                        <p className='text-black text-xl font-light'>
                            ИИ сканирует резюме, анализирует опыт, навыки и квалификацию кандидатов
                        </p>
                    </div>
                </div>
                <Image
                    className='self-center rotate-90 lg:rotate-0 shrink'
                    src={'/assets/svg/curved-arrow.svg'}
                    alt=''
                    width={120}
                    height={81}
                />
                <div className='w-[328px] flex flex-col gap-3 items-center text-center'>
                    <div className='bg-primaryBlocks size-24 rounded-full flex justify-center items-center'>
                        <Image src={'/assets/svg/ai-2.svg'} width={50} height={50} alt='' />
                    </div>
                    <div>
                        <div className='text-primary font-semibold text-2xl text-pretty'>
                            Оценка и ранжирование
                        </div>
                        <br />
                        <p className='text-black text-xl font-light'>
                            После отбора ИИ оценивает каждого кандидата по уровню соответствия
                            ваканси
                        </p>
                    </div>
                </div>
                <Image
                    className='self-center rotate-90 lg:rotate-0 shrink'
                    src={'/assets/svg/curved-arrow.svg'}
                    alt=''
                    width={120}
                    height={81}
                />
                <div className='w-[328px] flex flex-col gap-3 items-center text-center'>
                    <div className='bg-primaryBlocks size-24 rounded-full flex justify-center items-center'>
                        <Image src={'/assets/svg/ai-3.svg'} width={50} height={50} alt='' />
                    </div>
                    <div>
                        <div className='text-primary font-semibold text-2xl text-pretty'>
                            Автоматизированная коммуникация
                        </div>
                        <p className='text-black text-xl font-light'>
                            ИИ помогает в коммуникации: <br />
                            отправляет уведомления, приглашения на собеседования и тестовые задания
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AiProcess }
