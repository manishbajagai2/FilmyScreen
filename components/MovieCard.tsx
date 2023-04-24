import React from "react"
import Image from "next/image"
import { BsFillPlayFill } from "react-icons/bs"
import { BiChevronDown } from "react-icons/bi"
import { BsBadgeHd } from "react-icons/bs"
import FavoriteButton from "./FavoriteButton"
import { useRouter } from "next/router"
import useInfoModal from "@/hooks/useInfoModal"

interface MovieCardProps {
    data: Record<string, any>
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    const router = useRouter()
    const { openModal } = useInfoModal()
    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw]">
            <Image
                src={data.thumbnailUrl}
                alt="Thumbnail"
                draggable={false}
                className=" cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-500 w-full h-[12vw] "
                width={230}
                height={120}
                priority={true}
            />
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-500 w-full scale-0 group-hover:scale-125 group-hover:-translate-y-[6vw] group-hover:translate-x-[1vw] group-hover:opacity-100 ">
                <Image
                    src={data.thumbnailUrl}
                    alt="Movie Thumbnail"
                    draggable={false}
                    className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw] "
                    width={250}
                    height={150}
                    priority={true}
                />
                <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md ">
                    <div className="flex flex-row items-center gap-3">
                        <div
                            onClick={() => router.push(`/watch/${data?.id}`)}
                            className="cursor-pointer w-6 h-6 lg:w-9 lg:h-9 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
                        >
                            <BsFillPlayFill className="text-black w-4 lg:scale-125" />
                        </div>
                        <FavoriteButton movieId={data?.id} />
                        <div
                            onClick={() => openModal(data?.id)}
                            className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-9 lg:h-9 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
                        >
                            <BiChevronDown className="text-white group-hover/item:text-neutral-300 w-4 lg:scale-150" />
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-3">
                        <div>
                            <p className="text-green-400 font-semibold mt-4 text-[10px] lg:text-base">
                                New
                            </p>
                        </div>
                        <div>
                            <p className="text-white text-[10px] lg:text-base font-semibold mt-4">
                                {data.duration}
                            </p>
                        </div>
                        <BsBadgeHd size={20} className="mt-4 text-neutral-400" />
                    </div>

                    <div className="flex flex-row items-center gap-2 mt-2 text-white text-[10px] lg:text-base">
                        <p>{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
