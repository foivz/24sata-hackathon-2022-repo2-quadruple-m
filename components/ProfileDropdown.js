import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import Link from "next/link"
import {classNames} from "../utils/classUtils";

export default function ProfileDropdown({user, userNavigation}) {
    return (
        <Menu as="div" className="ml-4 relative flex-shrink-0">
            <div>
                <Menu.Button
                    className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={user.imageUrl}
                         alt=""/>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                            {({active}) => (
                                <Link href={item.href}>
                                    <a
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}