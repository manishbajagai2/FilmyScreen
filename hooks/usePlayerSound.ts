import { create } from "zustand"

export interface PlayerSoundInterface {
    isPlayingSound: boolean
    unmute: () => void
    mute: () => void
}

const usePlayerSound = create<PlayerSoundInterface>((set) => ({
    isPlayingSound: false,
    unmute: () => set({ isPlayingSound: true }),
    mute: () => set({ isPlayingSound: false}),
}))

export default usePlayerSound
