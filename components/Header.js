/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useState} from "react"
import {Popover, Transition} from "@headlessui/react"
import {ChartBarIcon, CursorClickIcon, MenuIcon, XIcon,} from "@heroicons/react/outline"
import {ChevronDownIcon} from "@heroicons/react/solid"
import NavbarItem from "./NavbarItem"
import Link from "next/link"

import config from "../config.json"
import {getDefaultUser} from "../utils/userUtils";
import ProfileButton from "./ProfileButton";

const solutions = [
  {
    name: "Osobni ",
    description: "Osobne financije",
    href: "/",
    icon: ChartBarIcon,
  },
  {
    name: "Nova grupu",
    description: "Kreairaj novu grupu s listama",
    href: "/pricing",
    icon: CursorClickIcon,
  },
]
const resources = [
  {
    name: "Contact Us",
    description: "Feel free to contact us",
    href: "#contact",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

let userNavigation = [
  {name: 'Odjava', href: '/logout', current: false},
]

export default function Example() {

  const [user, setUser] = useState(getDefaultUser())

  return (
      <Popover className="relative bg-black">
        <div className="flex items-center justify-between px-4 py-2 sm:px-6 md:justify-start md:space-x-10">
          <div>
            <Link
                href="/"
            >

              <a
                  className="flex flex-row items-center space-x-2"
              >

                <img
                    className="h-8 w-auto rounded sm:h-10"
                    src="/favicon.ico"
                    alt=""
                />
                <p className="text-lg font-semibold text-white">
                  {config.appName}
                </p>
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button
                className="inline-flex items-center justify-center rounded-md bg-primary-200 p-2 text-secondary-700 hover:bg-primary-300 hover:text-secondary-800 hover:text-secondary-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover className="relative">
                {({open}) => (
                    <>
                      <Popover.Button
                          className={classNames(
                              open
                                  ? "text-secondary-50"
                                  : "text-secondary-100",
                              "group inline-flex items-center rounded-md bg-black text-base font-medium hover:text-secondary-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                          )}
                      >
                        <span>Grupe</span>
                        <ChevronDownIcon
                            className={classNames(
                                open
                                    ? "text-secondary-50"
                                    : "text-secondary-100",
                                "ml-2 h-5 w-5 group-hover:text-secondary-50"
                            )}
                            aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-4 w-screen max-w-md transform lg:max-w-3xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div
                                className="relative grid gap-6 bg-primary-900 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {solutions.map((item) => (
                                  <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 flex items-start rounded-lg bg-primary-800 p-3 hover:bg-primary-700"
                                  >
                                    <div
                                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent-500 text-white sm:h-12 sm:w-12">
                                      <item.icon
                                          className="h-6 w-6"
                                          aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-secondary-100">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-secondary-100">
                                        {
                                          item.description
                                        }
                                      </p>
                                    </div>
                                  </a>
                              ))}
                            </div>
                            <div className="bg-primary-900 p-5 sm:p-8">
                              <a
                                  href="#"
                                  className="-m-3 flow-root rounded-md bg-primary-800 p-3 hover:bg-primary-700"
                              >
                                <div className="flex items-center">
                                  <div className="text-base font-medium text-secondary-100">
                                    Rum Launcher
                                  </div>
                                  <span
                                      className="ml-3 inline-flex items-center rounded-full bg-accent-100 px-3 py-0.5 text-xs font-medium leading-5 text-accent-800">
                                                                New
                                                            </span>
                                </div>
                                <p className="mt-1 text-sm text-secondary-100">
                                  Our own bespoke open
                                  source game launcher
                                </p>
                              </a>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                )}
              </Popover>
              <NavbarItem text=""/>

              <Popover className="relative">
                {({open}) => (
                    <>
                      <Popover.Button
                          className={classNames(
                              open
                                  ? "text-secondary-50"
                                  : "text-secondary-100",
                              "group inline-flex items-center rounded-md bg-black text-base font-medium hover:text-secondary-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                          )}
                      >
                        <span>More</span>
                        <ChevronDownIcon
                            className={classNames(
                                open
                                    ? "text-secondary-50"
                                    : "text-secondary-100",
                                "ml-2 h-5 w-5 group-hover:text-secondary-50"
                            )}
                            aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                            className="absolute left-1/2 z-10 mt-4 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-primary-900 px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                  <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 block rounded-md bg-primary-800 p-3 hover:bg-primary-700"
                                  >
                                    <p className="text-base font-medium text-secondary-100">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-secondary-100">
                                      {
                                        item.description
                                      }
                                    </p>
                                  </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                )}
              </Popover>
            </Popover.Group>

            {/*<div className="flex items-center md:ml-12">*/}
            {/*    <a href="#" className="text-base font-medium text-secondary-500 hover:text-secondary-900">*/}
            {/*        Sign in*/}
            {/*    </a>*/}
            {/*    <a*/}
            {/*        href="#"*/}
            {/*        className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent-600 hover:bg-accent-700"*/}
            {/*    >*/}
            {/*        Sign up*/}
            {/*    </a>*/}
            {/*</div>*/}
            <ProfileButton user={user} userNavigation={userNavigation}/>
          </div>
        </div>

        <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div
                className="divide-y-2 divide-gray-50 rounded-lg bg-primary-900 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center space-x-2">
                    <img
                        className="h-8 w-auto rounded"
                        src="/favicon.ico"
                        alt="Workflow"
                    />
                    <p className="font-semibold text-white">
                      {config.appName}
                    </p>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button
                        className="inline-flex items-center justify-center rounded-md bg-primary-200 p-2 text-secondary-700 hover:bg-primary-300 hover:text-secondary-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                      <XIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    {solutions.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-lg bg-primary-800 p-3 hover:bg-primary-700"
                        >
                          <div
                              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent-500 text-white">
                            <item.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                          </div>
                          <div className="ml-4 text-base font-medium text-secondary-100">
                            {item.name}
                          </div>
                        </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <NavbarItem text=""/>

                  {resources.map((item) => (
                      <a
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-secondary-100 hover:text-secondary-50"
                      >
                        {item.name}
                      </a>
                  ))}
                </div>

                {/*<div className="mt-6">*/}
                {/*    <a*/}
                {/*        href="#"*/}
                {/*        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-accent-600 hover:bg-accent-700"*/}
                {/*    >*/}
                {/*        Sign up*/}
                {/*    </a>*/}
                {/*    <p className="mt-6 text-center text-base font-medium text-secondary-500">*/}
                {/*        Existing customer?{' '}*/}
                {/*        <a href="#" className="text-accent-600 hover:text-accent-500">*/}
                {/*            Sign in*/}
                {/*        </a>*/}
                {/*    </p>*/}
                {/*</div>*/}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
  )
}
