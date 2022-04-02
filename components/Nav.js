import Logo from "./Logo";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import ProfileDropdown from "./ProfileDropdown";
import {classNames} from "../utils/classUtils";
import Search from "./Search";
import {Popover, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";
import Link from "next/link"
import {useRouter} from "next/router";

let userNavigation = [
    {name: 'Prijava', href: '/prijava', current: false},
]
let navigation = [
    {name: 'Početna', href: '/', current: false},
    {name: 'Fakulteti', href: '/fakulteti', current: false},
    {name: 'Studiji', href: '/studiji', current: false},
    // {name: 'Slagalica', href: '#', current: false},
]
export default function Nav({user, isLogged}) {
    const [state, setState] = useState(0)
    if (isLogged) {
        userNavigation = [
            {name: 'Profil', href: '/profil'}
        ]

        // if (user.hasUni) userNavigation.push(
        //     {name: "Fakulteti", href: "/profil"}
        // )

        userNavigation.push(
            {name: "Odjava", href: "/odjava"}
        )
    } else {
        userNavigation = [{name: "Prijava", href: "/prijava"}]
    }

    const router = useRouter()
    navigation.forEach((nv, i) => {
        navigation[i] = {...nv, current: router.pathname === nv.href}
    })

    return (
        <Popover as="header" className="pb-24 bg-gradient-to-r from-sky-800 to-emerald-600">
            {({open}) => (
                <>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div
                            className="relative flex flex-wrap items-center justify-center lg:justify-between">
                            {/* Logo */}
                            <Logo/>

                            {/* Right section on desktop */}
                            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                                {/*<button*/}
                                {/*    type="button"*/}
                                {/*    className="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"*/}
                                {/*>*/}
                                {/*    <span className="sr-only">View notifications</span>*/}
                                {/*    <BellIcon className="h-6 w-6" aria-hidden="true"/>*/}
                                {/*</button>*/}

                                {/* Profile dropdown */}
                                <ProfileDropdown user={user} userNavigation={userNavigation}/>

                            </div>

                            <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                                <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                                    {/* Left nav */}
                                    <div className="hidden lg:block lg:col-span-2">
                                        <nav className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link href={item.href}>
                                                    <a
                                                        key={item.name}
                                                        className={classNames(
                                                            item.current ? 'text-white' : 'text-cyan-100',
                                                            'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="px-12 lg:px-0">
                                        {/* Search */}
                                        <Search/>

                                    </div>
                                </div>
                            </div>

                            {/* Menu button */}
                            <div className="absolute right-0 flex-shrink-0 lg:hidden">
                                {/* Mobile menu button */}
                                <Popover.Button
                                    className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Popover.Button>
                            </div>
                        </div>
                    </div>

                    <Transition.Root as={Fragment}>
                        <div className="lg:hidden">
                            <Transition.Child
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="duration-150 ease-in"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Popover.Overlay className="z-20 fixed inset-0 bg-black bg-opacity-25"/>
                            </Transition.Child>

                            <Transition.Child
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-150 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                                >
                                    <div
                                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                                        <div className="pt-3 pb-2">
                                            <div className="flex items-center justify-between px-4">
                                                <div>
                                                    <img
                                                        className="h-8 w-auto"
                                                        src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                                                        alt="Workflow"
                                                    />
                                                </div>
                                                <div className="-mr-2">
                                                    <Popover.Button
                                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                                        <span className="sr-only">Close menu</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                                    </Popover.Button>
                                                </div>
                                            </div>
                                            <div className="mt-3 px-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="pt-4 pb-2">
                                            <div className="flex items-center px-5">
                                                <div className="flex-shrink-0">
                                                    <img className="h-10 w-10 rounded-full"
                                                         src={user.imageUrl}
                                                         alt=""/>
                                                </div>
                                                <div className="ml-3 min-w-0 flex-1">
                                                    <div
                                                        className="text-base font-medium text-gray-800 truncate">{`${user.firstName} ${user.lastName}`}</div>
                                                    <div
                                                        className="text-sm font-medium text-gray-500 truncate">{user.email}</div>
                                                </div>
                                                {/*<button*/}
                                                {/*    type="button"*/}
                                                {/*    className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"*/}
                                                {/*>*/}
                                                {/*    <span className="sr-only">View notifications</span>*/}
                                                {/*    <BellIcon className="h-6 w-6" aria-hidden="true"/>*/}
                                                {/*</button>*/}
                                            </div>
                                            <div className="mt-3 px-2 space-y-1">
                                                {userNavigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition.Child>
                        </div>
                    </Transition.Root>
                </>
            )}
        </Popover>
    )
}