import React from "react"
import Image from "next/image"
import { BsFillPlayFill } from "react-icons/bs"
import FavoriteButton from "./FavoriteButton"

interface MovieCardProps {
    data: Record<string, any>
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw]">
            <Image
                src={data.thumbnailUrl}
                alt="Thumbnail"
                draggable={false}
                className=" cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-200 w-full h-[12vw] "
                width={230}
                height={120}
                priority={true}
            />
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-200 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100 ">
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
                        <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                            <BsFillPlayFill className="text-black w-4 lg:scale-150" />
                        </div>
                            <FavoriteButton movieId={data?.id} />
                    </div>
                    <p className="text-green-400 font-semibold mt-4">
                        New <span className="text-white">2023</span>
                    </p>
                    <div
                        onClick={() => {}}
                        className="flex flex-row mt-4 gap-2 items-center"
                    >
                        <p className="text-white text-[10px] lg:text-sm">
                            {data.duration}
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
                        <p>{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
