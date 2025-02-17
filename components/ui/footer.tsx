'use client'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-[#443694] text-white py-10 px-6 md:px-16">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Быстрые Ссылки
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#main" className="hover:underline">
                                Главная Страница
                            </Link>
                        </li>
                        <li>
                            <Link href="#partners" className="hover:underline">
                                Наши Партнеры
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className="hover:underline">
                                О Нас
                            </Link>
                        </li>
                        <li>
                            <Link href="#faq" className="hover:underline">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Условия Использования
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:underline">
                                Политика Конфиденциальности
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">
                                Пользовательское Соглашение
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Свяжитесь С Нами:
                    </h3>
                    <p className="text-gray-300">
                        support<span className="font-gilroy">@</span>
                        jumyste.kz
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-10">
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 77 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.00001 38.8535C8.97995 44.832 11.491 49.9892 15.5332 54.3252C20.8161 60.1084 27.3933 63 35.2648 63C43.1363 63 49.7136 60.1084 54.9964 54.3252C60.3322 48.6016 63 41.4472 63 32.8618V8H38.1962V20.6014L50.6967 20.3415V32.8618C50.6967 38.1238 49.1192 40.6238 46.1441 45.3387C46.0517 45.4851 45.9579 45.6337 45.8628 45.7846C42.6931 49.1829 40.3892 51.1951 35.2648 51.1951C30.1404 51.1951 28.3404 49.8537 25.1178 46.4553C23.1811 44.3789 21.9202 41.7906 21.2323 38.8535H8.00001Z"
                        fill="white"
                    />
                    <rect
                        x="21.059"
                        y="20.9673"
                        width="17.1372"
                        height="17.8862"
                        fill="#FFF2AF"
                    />
                </svg>

                <div className="flex gap-4 items-center">
                    <Link href="#" className="hover:opacity-75">
                        <Image
                            src="/assets/svg/telegram.svg"
                            width={30}
                            height={30}
                            alt="Telegram"
                        />
                    </Link>
                    <Link href="#" className="hover:opacity-75">
                        <Image
                            src="/assets/svg/tiktok.svg"
                            width={30}
                            height={30}
                            alt="TikTok"
                        />
                    </Link>
                    <Link href="#" className="hover:opacity-75">
                        <Image
                            src="/assets/svg/instagram.svg"
                            width={30}
                            height={30}
                            alt="Instagram"
                        />
                    </Link>
                    <Link href="#" className="hover:opacity-75">
                        <Image
                            src="/assets/svg/youtube.svg"
                            width={40}
                            height={40}
                            alt="YouTube"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export { Footer }
