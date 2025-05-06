import Image from 'next/image'

const Download = () => {
    return (
        <div id="download">
            <div className="max-w-[1127px] py-20 w-full flex flex-col-reverse gap-14 md:flex-row items-center justify-between px-4 mx-auto">
                <div>
                    <div className="text-primary text-2xl md:text-3xl font-semibold flex flex-col">
                        <h1>
                            Скачайте наше приложение <br />
                        </h1>
                        <span className="text-primaryBlocks mt-[-10px]">
                            и найдите работу мечты!
                        </span>
                    </div>

                    <p className="mt-6 leading-tight text-lg md:text-xl">
                        Ищите вакансии, откликайтесь на предложения и общайтесь{' '}
                        <br /> с работодателями - всё в одном удобном
                        приложении. <br /> Быстрый поиск, умный подбор и
                        прозрачные отзывы <br /> сотрудников помогут вам сделать
                        правильный выбор!
                    </p>
                    <div className="flex gap-5 max-w-[417px] w-full justify-center md:justify-between mt-10 *:flex-shrink-0">
                        <Image
                            width={180}
                            height={50}
                            src="/assets/badges/app-store.svg"
                            alt=""
                        />
                        {/* <Image
                            width={180}
                            height={40}
                            src="/assets/badges/google-play.png"
                            alt=""
                        /> */}
                    </div>
                </div>
                <Image
                    src="/assets/images/iphone-mockup.png"
                    alt=""
                    width={436}
                    height={416}
                />
            </div>
        </div>
    )
}

export { Download }
