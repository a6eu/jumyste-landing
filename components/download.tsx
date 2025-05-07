'use client'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const Download = () => {
    const { t } = useTranslation()

    return (
        <div id='download'>
            <div className='max-w-[1127px] py-20 w-full flex flex-col-reverse gap-14 md:flex-row items-center justify-between px-4 mx-auto'>
                <div>
                    <div className='text-primary text-2xl md:text-3xl font-semibold flex flex-col'>
                        <h1>
                            {t('download1.title')} <br />
                        </h1>
                        <span className='text-primaryBlocks mt-[-10px]'>
                            {t('download1.subtitle')}
                        </span>
                    </div>

                    <p className='mt-6 leading-tight text-lg md:text-xl'>
                        {t('download1.description')}
                    </p>
                    <div className='flex gap-5 max-w-[417px] w-full justify-center md:justify-between mt-10 *:flex-shrink-0'>
                        <Image
                            width={180}
                            height={50}
                            src='/assets/badges/app-store.svg'
                            alt={t('download1.appStore')}
                        />
                    </div>
                </div>
                <Image
                    src='/assets/images/iphone-mockup.png'
                    alt='Phone Mockup'
                    width={436}
                    height={416}
                />
            </div>
        </div>
    )
}

export { Download }
