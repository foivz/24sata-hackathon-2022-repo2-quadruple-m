import {useState} from "react";
import {MinusCircleIcon, PlusCircleIcon,} from "@heroicons/react/outline"
import Input from "../components/Input/Input"
import Button from "./Button";
import ListModal from "./ListModal";

let def = [
    {name: 'Mlijeko', price: 5.33, quantity: 1, isFinished: false},
    {name: 'Sir', price: 5.33, quantity: 1, isFinished: false},
    {name: 'Vino', price: 5.33, quantity: 1, isFinished: false},
]


export default function Example() {
    const [i, setI] = useState(0);

    const changeClickedState = (e, idx) => {
        def[idx].isFinished = e.target.checked
        setI(i + 1)
    }

    const itemPlus = idx => {
        if (def[idx].isFinished) return
        def[idx].quantity++;
        setI(i + 1)
    }

    const itemMinus = idx => {
        if (def[idx].isFinished) return
        if (def[idx].quantity > 0) def[idx].quantity--;
        setI(i + 1)
    }


    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div
                className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">

                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Naziv
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Cijena
                        </th>

                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Količina
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-gray-50">

                    {def.map((person, idx) => (
                        def[idx].isFinished ?
                            <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200">
                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="comments"
                                            aria-describedby="comments-description"
                                            name="comments"
                                            type="checkbox"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            onChange={e => changeClickedState(e, idx)}
                                        />
                                    </div>
                                </td>
                                <td className="hidden px-3 py-4 text-md text-gray-50 lg:table-cell">{person.name}</td>
                                <td className="hidden px-3 py-4 text-md text-gray-50 sm:table-cell">{person.price}</td>
                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <div href="#" className="text-gray-300 flex flex-row space-x-1.5">
                                        <PlusCircleIcon className="hover:cursor-pointer text-green-600 h-8"
                                                        onClick={() => itemPlus(idx)}/>
                                        <p className="flex items-center text-gray-50 text-center justify-center text-xl">{person.quantity}</p>
                                        <MinusCircleIcon className="hover:cursor-pointer text-red-600 h-8"
                                                         onClick={() => itemMinus(idx)}/>
                                    </div>
                                </td>
                            </tr> :


                            <tr>
                                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="comments"
                                            aria-describedby="comments-description"
                                            name="comments"
                                            type="checkbox"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            onChange={e => changeClickedState(e, idx)}
                                        />
                                    </div>
                                </td>
                                <td className="hidden px-3 py-4 text-md text-gray-500 lg:table-cell">{person.name}</td>
                                <td className="hidden px-3 py-4 text-md text-gray-500 sm:table-cell">{person.price}</td>
                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <div href="#" className="text-gray-700 flex flex-row space-x-1.5">
                                        <PlusCircleIcon className="hover:cursor-pointer text-green-500 h-8"
                                                        onClick={() => itemPlus(idx)}/>
                                        <p className="flex items-center text-center justify-center text-xl">{person.quantity}</p>
                                        <MinusCircleIcon className="hover:cursor-pointer text-red-500 h-8"
                                                         onClick={() => itemMinus(idx)}/>
                                    </div>
                                </td>
                            </tr>

                    ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
