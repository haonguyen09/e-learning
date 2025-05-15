import Image from "next/image"
import Link from "next/link"
import { IconClock, IconEye, IconStar } from "../icons"

const CourseItem = () => {

    const courseInfo = [
        {
            title: "3000",
            icon: (className?: string) => <IconEye className={className}></IconEye>
        },
        {
            title: "5.0",
            icon: (className?: string) => <IconStar className={className}></IconStar>
        },
        {
            title: "30h25p",
            icon: (className?: string) => <IconClock className={className}></IconClock>
        },
    ]

    return (
        <div className="bg-white dark:bg-grayDarker border border-gray-200 p-4 rounded-2xl">
            <Link href="#" className="block h-[180px] relative">
                <Image
                    src="https://images.unsplash.com/photo-1744124371777-e7b5984deb77?w=500&auto=format&fit=crop&q=60"
                    alt="Example"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-lg"
                    sizes="@media (min-width: 640px) 300px, 100vw"
                    priority
                />
                <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-green-500 text-xs">New</span>
            </Link>
            <div className="pt-4">
                <h3 className="font-bold text-lg mb-5">Khoá học NextJs Pro - Xây dựng E-learning system hoàn chỉnh</h3>
                <div className="flex items-center gap-5 mb-5">
                        {courseInfo.map((item, index) => (
                            <div className="flex items-center gap-1" key={index}>
                                    {item.icon("size-4")}
                                    <span>{item.title}</span>
                            </div>
                        ))}
                    <span className="font-bold text-primary ml-auto text-xl">799.000</span>
                </div>
                <Link className="flex items-center justify-center w-full mt-10 rounded-lg text-white font-semibold bg-primary h-12" href="#">Xem chi tiết</Link>
            </div>
        </div>
    )
}

export default CourseItem