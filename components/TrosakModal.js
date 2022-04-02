/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, XIcon } from '@heroicons/react/outline'
import Input from "./Input/Input";

export default function Example({onRemove, onAdd, open, setOpen}) {
    const [inputName, setInputName] = useState("")
    const [inputPrice, setInputPrice] = useState(0)
    const [inputQuantity, setInputQuantity] = useState(0)

    const tmpRemove = () => {
        setOpen(false)
    }

    const tmpAdd = () => {
        setOpen(true)
        onAdd(inputName, inputPrice, inputQuantity)
    }


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="relative inline-block align-bottom bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={tmpRemove}
                                >
                                    <span className="sr-only">Close</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="mt-3 text-center">
                                    <Dialog.Title as="h3" className="text-xl leading-6 font-medium text-gray-100">
                                        Novi trošak
                                    </Dialog.Title>
                                    <div className="flex flex-col items-center px-4 py-3 mb-8 bg-gray-800 rounded-lg shadow-md dark:bg-gray-800">
                                        <div className="flex flex-col space-y-4 mb-4">
                                            <Input dark title="Naziv" onChangeHandler={e => setInputName(e.target.value)} placeholder=""/>
                                            <Input dark title="Cijena" onChangeHandler={e => setInputPrice(e.target.value)} placeholder=""/>
                                            <Input dark title="Datum" onChangeHandler={e => setInputQuantity(e.target.value)} placeholder=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-4 flex items-center justify-center space-x-2">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={tmpRemove}
                                >
                                    Odbaci
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                    onClick={tmpAdd}
                                >
                                    Dodaj
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
