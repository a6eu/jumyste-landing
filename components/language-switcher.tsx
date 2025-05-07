'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import clsx from 'clsx'
import { useParams, useRouter } from 'next/navigation'

const languages = [
    { code: 'kz', label: 'KZ', flag: '/assets/images/flags/Kazakhstan.png' },
    { code: 'en', label: 'EN', flag: '/assets/images/flags/British.png' },
    { code: 'ru', label: 'RU', flag: '/assets/images/flags/Russia.png' },
]

const LanguageSwitcher = () => {
    const router = useRouter()
    const params = useParams()

    const currentLang = typeof params.locale === 'string' ? params.locale : 'ru'
    const [isOpen, setIsOpen] = useState(false)

    const selected = languages.find(l => l.code === currentLang)

    const handleSelect = (code: string) => {
        setIsOpen(false)
        router.push('/' + code)
    }

    return (
        <div className='relative w-[100px] mx-2 text-lg cursor-pointer'>
            <div
                onClick={() => setIsOpen(prev => !prev)}
                className='flex items-center justify-center gap-2.5 bg-white rounded-lg py-3 px-4 shadow-md'
            >
                {selected && (
                    <>
                        <Image src={selected.flag} width={20} height={20} alt={selected.label} />
                        {selected.label}
                    </>
                )}
                <ChevronDown size={18} />
            </div>

            {isOpen && (
                <div className='absolute top-10 left-0 w-full flex flex-col bg-white py-2 rounded-b-lg shadow-md z-10'>
                    {languages.map(({ code, label, flag }) => (
                        <div
                            key={code}
                            onClick={() => handleSelect(code)}
                            className={clsx(
                                'flex items-center justify-center gap-2.5 py-2 hover:bg-gray-100',
                                code === currentLang && 'bg-gray-200 font-medium'
                            )}
                        >
                            <Image src={flag} width={20} height={20} alt={label} /> {label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSwitcher
