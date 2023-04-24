import React, { useCallback, useEffect, useRef, useState } from "react"

import {BsChevronDown, BsSearch, BsBell} from 'react-icons/bs'

import AccountMenu from "@/components/AccountMenu"
import MobileMenu from "@/components/MobileMenu"
import NavbarItem from "@/components/NavbarItem"
import Image from "next/image"

const TOP_OFFSET = 66

const Navbar = () => {
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)

    const [showSearch, setShowSearch] = useState(false)
    const [inputHover, setInputHover] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current)
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, [])

    return (
        <nav className="w-full fixed z-40">
            <div
                className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
                    showBackground ? "bg-zinc-900 bg-opacity-90" : ""
                }`}
            >
                <Image
                    className="w-auto h-auto hidden md:block "
                    src="/images/logo.png"
                    alt="Logo Image"
                    width={200}
                    height={200}
                    priority={true}
                />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" active />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Movies" />
                    <NavbarItem label="Recently Added" />
                    <NavbarItem label="My List" />
                </div>
                <div
                    onClick={toggleMobileMenu}
                    className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
                >
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown
                        size={20}
                        className={`w-4 md:w-7 text-white fill-white transition ${
                            showMobileMenu ? "rotate-180" : "rotate-0"
                        }`}
                    />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-2 items-center">
                    {/* <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch size={20} className="w-4 md:w-7" />
                    </div> */}
                    <div
                        className={`flex items-center justify-center pl-2 py-0.5 ${
                            showSearch
                                ? "border bg-[rgba(0,0,0,0.6)] border-solid border-white"
                                : ""
                        }`}
                        onClick={() => {
                            inputRef.current!.focus()
                        }}
                    >
                        <button
                            className="bg-transparent border-0 focus:outline-none"
                            onFocus={() => setShowSearch(true)}
                            onBlur={() => {
                                if (!inputHover) {
                                    setShowSearch(false)
                                }
                            }}
                        >
                            <BsSearch className="text-white text-xl hidden md:block" />
                        </button>
                        <input
                            className={`flex gap-2 items-center justify-center pl-2 p-1 ${
                                showSearch
                                    ? "w-full opacity-100 visible p-1 focus:outline-none bg-transparent text-white"
                                    : "w-0 opacity-0 invisible bg-transparent text-white border-0 transition-all duration-150 ease-in-out"
                            }`}
                            type="text"
                            placeholder="Titles,people,genres"
                            onMouseEnter={() => setInputHover(true)}
                            onMouseLeave={() => setInputHover(false)}
                            onBlur={() => {
                                setShowSearch(false)
                                setInputHover(false)
                            }}
                            ref={inputRef}
                        />
                    </div>

                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition mr-5">
                        <BsBell size={20} className="w-4 md:w-8" />
                    </div>
                    <div
                        onClick={toggleAccountMenu}
                        className="flex flex-row items-center gap-2 cursor-pointer relative"
                    >
                        <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <Image
                                draggable={false}
                                className="h-max object-contain"
                                src="/images/default-blue.png"
                                alt="Profile Image"
                                width={40}
                                height={40}
                            />
                        </div>
                        <BsChevronDown
                            size={20}
                            className={`w-4 md:w-7 text-white fill-white transition ${
                                showAccountMenu ? "rotate-180" : "rotate-0"
                            }`}
                        />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
