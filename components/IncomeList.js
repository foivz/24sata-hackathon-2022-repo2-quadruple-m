import {useEffect, useState} from "react";
import {MinusCircleIcon, PlusCircleIcon,} from "@heroicons/react/outline"
import Input from "../components/Input/Input"
import Button from "./Button";
import ListModal from "./ListModal";
import Modalv2 from "./IncomeModal"

let def = [
    {name: 'Tonald Drump', price: 223, date: "01-01-2022"},
    {name: 'Bil Gejc', price: 155, date: "01-01-2022"},
    {name: 'Ilon Mask',price: 3322, date: "02-01-2022"},
]


export default function Example({onChange}) {
    const [i, setI] = useState(0);

    const [open,setOpen] = useState(false)

    useEffect(() => {
        onChange(def)
    }, [])

    const openModal = () => {
        setOpen(true)
    }

    const onModalAdd = (name, price, date) => {
        def.push({name, price, date})
        onChange(def)
        setI(i + 1)
        setOpen(false)
    }


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


    let cijena = 0;
    def.forEach(item => {
        cijena+=parseFloat(item.price)
    })

    cijena = cijena.toFixed(2)

    return (
        <div>
            <Modalv2 onAdd={onModalAdd} open={open} setOpen={setOpen}/>
            <h1 className="text-2xl font-semibold text-center">
                Prihodi
            </h1>
            <div
                className="-mx-4 my-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Naziv
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                        >
                            Cijena
                        </th>
                        <th
                            scope="col"
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                        >
                            Datum
                        </th>


                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-gray-50">

                    {def.map((item, idx) => (
                            <tr>
                                <td className="hidden px-3 py-4 text-md text-gray-700 lg:table-cell">{item.name}</td>
                                <td className="hidden px-3 py-4 text-md text-gray-700 sm:table-cell">{item.price}</td>
                                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <div href="#" className="text-gray-700 flex flex-row space-x-1.5">
                                        <p className="flex items-center text-center justify-center text-md">{item.date}</p>
                                    </div>
                                </td>
                            </tr>

                    ))}

                    <tr>
                        <td className="hidden px-3 py-4 text-md text-gray-800 font-medium lg:table-cell">Ukupni trošak</td>
                        <td className="hidden px-3 py-4 text-md text-gray-500 lg:table-cell">{cijena}</td>
                        <td className="hidden px-3 py-4 text-md text-gray-500 lg:table-cell"></td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <div className="flex flex-row space-x-4">
                {/*<Button text="Dodaj novi artikl" onClickHandler={openModal}/>*/}
                <Button text="Novi dohodak" onClickHandler={openModal}/>
            </div>
        </div>
    )
}
