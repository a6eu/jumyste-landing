'use client'

import Image from 'next/image'
import { PrimaryButton } from './ui/primary-button'
import { redirect } from 'next/navigation'
import { useTranslation } from 'react-i18next'

const Main = () => {
    const { t } = useTranslation()

    return (
        <div id='main'>
            <div className='px-4 py-28 flex flex-col gap-10 lg:flex-row items-center justify-between max-w-[1350px] lg:pl-[100px] mx-auto overflow-x-hidden'>
                <div className='text-primary flex flex-col gap-8 items-start'>
                    <div className='flex flex-col gap-2.5 max-w-screen-sm'>
                        <div className='text-3xl md:text-4xl lg:text-6xl font-semibold'>
                            {t('main.title')}
                        </div>
                        <p> {t('main.description')}</p>
                    </div>
                    <PrimaryButton onClick={() => redirect('#download')} text={t('main.button')} />
                </div>
                <div className='relative h-fit w-[400px] md:min-w-[560px]'>
                    <div className='bg-white items-center flex w-fit rounded-xl py-3 px-1.5 absolute top-0 md:top-20'>
                        <Image
                            width={40}
                            height={40}
                            src={'/assets/svg/document-and-person.svg'}
                            alt=''
                        />
                        <div>
                            <div className='text-black/45'>Каждый день</div>
                            <p>
                                <span className='font-gilroy font-light'>+1000</span> вакансий
                            </p>
                        </div>
                    </div>
                    <div className='bg-white items-center flex w-fit rounded-xl py-2.5 px-2.5 absolute top-44 left-8'>
                        <Image width={40} height={40} src={'/assets/svg/golden-star.svg'} alt='' />
                    </div>
                    <div className='bg-white items-center flex w-fit rounded-xl py-2.5 px-2.5 absolute top-0 lg:top-10 right-10 lg:right-28 element'>
                        <div className='bg-primaryBlocks/50 rounded-xl font-semibold text-sm text-primary p-1.5'>
                            Откликнуться
                        </div>
                    </div>
                    <div className='bg-white items-center flex w-fit rounded-xl py-3 px-1.5 absolute top-28 right-0'>
                        <Image width={40} height={40} src={'/assets/svg/google.svg'} alt='' />
                        <div>
                            <div className='text-black/45'>Software Engineer</div>
                            <p>Google</p>
                        </div>
                    </div>
                    <div className='bg-white items-center flex w-fit rounded-xl py-2.5 px-2.5 absolute top-56 right-32'>
                        <Image width={50} height={50} src={'/assets/svg/bag.svg'} alt='' />
                    </div>
                    <Image
                        src='/assets/images/main-section-image.png'
                        width={381}
                        height={381}
                        className='rounded-full size-[280px] md:size-[381px] ml-14 mb-10 z-20'
                        alt=''
                    />
                </div>
            </div>
        </div>
    )
}

export { Main }
