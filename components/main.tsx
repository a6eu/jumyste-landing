'use client'
import Image from 'next/image'
import { PrimaryButton } from './ui/primary-button'

const Main = () => {
    return (
        <div id="main">
            <div className="px-4 py-28 flex flex-col gap-10 lg:flex-row items-center justify-between max-w-[1350px] lg:pl-[100px] mx-auto overflow-x-hidden">
                <div className="text-primary flex flex-col gap-8 items-start">
                    <div className="flex flex-col gap-2.5 max-w-screen-sm">
                        <div className="text-3xl md:text-4xl lg:text-6xl font-semibold">
                            Найди работу мечты вместе с Jumyste!
                        </div>
                        <p>
                            Мы объединяем талантливых людей с лучшими
                            компаниями. Будь среди них!
                        </p>
                    </div>
                    <PrimaryButton
                        onClick={() => (window.location.href = '#download')}
                        text="Найти работу"
                    />
                </div>
                <div className="relative h-fit w-[400px] md:min-w-[560px]">
                    <div className="bg-white items-center flex w-fit rounded-xl py-3 px-1.5 absolute top-20">
                        <Image
                            width={40}
                            height={40}
                            src={'/assets/svg/document-and-person.svg'}
                            alt=""
                        />
                        <div>
                            <div className="text-black/45">Каждый день</div>
                            <p>
                                <span className="font-gilroy font-light">
                                    +1000
                                </span>{' '}
                                вакансий
                            </p>
                        </div>
                    </div>
                    <div className="bg-white items-center flex w-fit rounded-xl py-2.5 px-2.5 absolute top-44 left-8">
                        <Image
                            width={40}
                            height={40}
                            src={'/assets/svg/golden-star.svg'}
                            alt=""
                        />
                    </div>
                    <div className="bg-white items-center flex w-fit rounded-xl py-2.5 px-2.5 absolute top-10 right-28 element">
                        <div className="bg-primaryBlocks/50 rounded-xl font-semibold text-sm text-primary p-1.5">
                            Откликнуться
                        </div>
                    </div>
                    <div className="bg-white items-center flex w-fit rounded-xl py-3 px-1.5 absolute top-28 right-0">
                        <Image
                            width={40}
                            height={40}
                            src={'/assets/svg/google.svg'}
                            alt=""
                        />
                        <div>
                            <div className="text-black/45">
                                Software Engineer
                            </div>
                            <p>Google</p>
                        </div>
                    </div>
                    <div className="bg-white items-center flex w-fit rounded-xl py-2.5 px-2.5 absolute top-56 right-32">
                        <Image
                            width={50}
                            height={50}
                            src={'/assets/svg/bag.svg'}
                            alt=""
                        />
                    </div>
                    <div className="bg-primaryBlocks rounded-full size-[280px] md:size-[381px] ml-14 mb-10 z-20" />
                </div>
            </div>
        </div>
    )
}

export { Main }
