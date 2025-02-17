import { Search } from 'lucide-react'
import Image from 'next/image'
import { PrimaryButton } from './ui/primary-button'

const reviews = [
    {
        name: 'Акбота Нургижиева',
        role: 'HR-Менеджер',
        image: '/assets/images/person-1.png',
        rating: '/assets/svg/rating-1.svg',
        company: 'Delta Express',
    },
    {
        name: 'Дастан Торегалиев',
        role: 'IOS Разработчик',
        image: '/assets/images/person-2.png',
        rating: '/assets/svg/rating-2.svg',
        company: 'Halyk Bank',
    },
    {
        name: 'Зарина Уразалина',
        role: 'Менеджер по продажам',
        image: '/assets/images/person-3.png',
        rating: '/assets/svg/rating-3.svg',
        company: 'Kazkom',
    },
]

const Reviews = () => {
    return (
        <div id="reviews" className="overflow-hidden">
            <div className="flex py-8 px-4 flex-col-reverse gap-10 lg:flex-row items-center max-w-[1312px] justify-between mx-auto">
                <div className="px-3 py-8 flex flex-col  items-center relative min-h-[600px] sm:min-h-[850px]">
                    <div className="absolute top-0 inset-0 shrink-0 flex justify-center items-center -z-10">
                        <div className="bg-primaryBlocks/30 min-w-[755px] h-[755px] rounded-full flex justify-center items-center p-6 sm:p-10">
                            <div className="bg-primaryBlocks/30 w-full h-full rounded-full flex justify-center items-center p-6 sm:p-10">
                                <div className="bg-primaryBlocks/30 w-full h-full rounded-full flex justify-center items-center p-6 sm:p-10">
                                    <div className="bg-primaryBlocks/30 w-full h-full rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full max-w-[440px] pt-20 sm:pt-32">
                        <div className="flex justify-between gap-4 w-full">
                            <input
                                type="text"
                                disabled
                                placeholder="Поиск отзывов"
                                className="border border-primary bg-white px-[14px] h-[50px] sm:h-[60px] rounded-xl w-full sm:max-w-[370px]"
                            />
                            <div className="size-[50px] sm:size-[60px] bg-primary rounded-xl flex justify-center items-center">
                                <Search color="white" size={25} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-full mt-6">
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="w-full max-w-[440px] p-4 bg-white rounded-2xl flex justify-between items-center shadow-md"
                                >
                                    <div className="flex items-center">
                                        <Image
                                            src={review.image}
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="w-[50px] h-[50px] sm:w-[61px] sm:h-[61px] rounded-full object-cover"
                                        />
                                        <div className="ml-2 sm:ml-3 flex flex-col">
                                            <h1 className="text-base sm:text-xl font-medium">
                                                {review.name}
                                            </h1>
                                            <p className="text-sm sm:text-base text-gray-600">
                                                {review.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Image
                                            src={review.rating}
                                            width={90}
                                            height={20}
                                            alt=""
                                            className="w-[90px] sm:w-[113px] h-auto"
                                        />
                                        <p className="text-gray-500 text-xs sm:text-sm">
                                            {review.company}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start max-w-[500px]">
                    <h1 className="text-primary font-semibold text-3xl sm:text-4xl md:text-5xl">
                        Прозрачные отзывы
                        <br />
                        сотрудников
                    </h1>
                    <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-light">
                        Мы ценим честное мнение каждого члена команды. <br />
                        Функция Clear Feedbacks позволяет сотрудникам делиться
                        своими впечатлениями о компании, культуре, условиях
                        работы и развитии.
                    </p>
                    <ul className="my-6 sm:my-9 *:flex *:gap-1 items-center text-primary text-lg sm:text-xl font-medium">
                        <li>
                            <Image
                                src="/assets/svg/check.svg"
                                width={20}
                                height={20}
                                alt=""
                            />
                            Сотрудники оставляют честные отзывы
                        </li>
                        <li>
                            <Image
                                src="/assets/svg/check.svg"
                                width={20}
                                height={20}
                                alt=""
                            />
                            Руководство получает ценные инсайты для улучшения
                            условий труда
                        </li>
                        <li>
                            <Image
                                src="/assets/svg/check.svg"
                                width={20}
                                height={20}
                                alt=""
                            />
                            Прозрачность помогает создавать комфортную рабочую
                            среду
                        </li>
                    </ul>
                    <PrimaryButton text="Оставить отзыв" />
                </div>
            </div>
        </div>
    )
}

export { Reviews }
