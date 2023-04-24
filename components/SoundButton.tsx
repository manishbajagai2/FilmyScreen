import usePlayerSound from "@/hooks/usePlayerSound"
import React from "react"
import { BsVolumeMute, BsVolumeUp } from "react-icons/bs"

const SoundButton = () => {

    const { isPlayingSound, mute, unmute } = usePlayerSound()
    
    const handleClick = () => {
        isPlayingSound ? mute() : unmute()
    }

    const Icon = isPlayingSound ? BsVolumeMute : BsVolumeUp


    return (
        <div
            onClick={handleClick}
            className="cursor-pointer group/item w-6 h-6 lg:w-9 lg:h-9 border-neutral-300 border-2 rounded-full flex justify-center items-center transition hover:border-white"
        >
            <Icon size={20} className="text-neutral-300 group-hover/item:text-white w-4 lg:w-6" />
        </div>
    )
}

export default SoundButton
