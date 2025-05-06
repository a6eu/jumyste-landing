import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const LanguageSwitcher = () => {
    const [lang, setLang] = useState('ru')
    return (
        <div className='relative w-[100px] mx-2 shadow-md font-thin text-2xl cursor-pointer'>
            <div className='flex items-center justify-center gap-2.5 bg-white rounded-t-lg py-3 px-4'>
                <ChevronDown /> {lang.toUpperCase()}
            </div>
            <div className='w-full flex flex-col bg-white space-y-2 py-3 absolute top-10 rounded-b-lg shadow-md'>
                <div
                    onClick={() => setLang('KZ')}
                    className='flex items-center justify-center gap-2.5'
                >
                    <Image
                        width={25}
                        height={25}
                        src='/assets/images/flags/Kazakhstan.png'
                        alt=''
                    />{' '}
                    KZ
                </div>
                <div
                    onClick={() => setLang('EN')}
                    className='flex items-center justify-center gap-2.5'
                >
                    <Image width={25} height={25} src='/assets/images/flags/British.png' alt='' />{' '}
                    EN
                </div>
                <div
                    onClick={() => setLang('RU')}
                    className='flex items-center justify-center gap-2.5'
                >
                    <Image width={25} height={25} src='/assets/images/flags/Russia.png' alt='' /> RU
                </div>
            </div>
        </div>
    )
}

export default LanguageSwitcher
