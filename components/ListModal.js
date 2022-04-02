import React, {useState} from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from '@windmill/react-ui'
import Button from "../components/Button"
import Input from "./Input/Input";

function ModalPage({onRemove, onAdd}) {
    const [inputName, setInputName] = useState("")
    const [inputPrice, setInputPrice] = useState(0)
    const [inputQuantity, setInputQuantity] = useState(0)

    const tmp = () => {
        onAdd(inputName, inputPrice, inputQuantity)
    }

    return (
        <>
            <Modal isOpen onClose={onRemove}>
                <ModalHeader>

                   </ModalHeader>
                <ModalBody>
                    <p className="text-2xl text-gray-50 text-center ">
                        Novi artikl
                    </p>
                    <div className="flex flex-col items-center px-4 py-3 mb-8 bg-gray-800 rounded-lg shadow-md dark:bg-gray-800">
                        <div className="flex flex-col w-full px-80 space-y-4 mb-4">
                            <Input title="Naziv" onChangeHandler={e => setInputName(e.target.value)} placeholder="Sir"/>
                            <Input title="Cijena" onChangeHandler={e => setInputPrice(e.target.value)} placeholder="5.99"/>
                            <Input title="Količina" onChangeHandler={e => setInputQuantity(e.target.value)} placeholder="4"/>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="flex flex-row space-x-2">
                        <Button className="" layout="outline" text="Odbaci" onClickHandler={() => onRemove()}/>
                        <Button className="w-full sm:w-auto" layout="outline" text="Dodaj"
                                onClickHandler={() => tmp()}/>
                    </div>

                </ModalFooter>
            </Modal>
        </>
    )
}

export default ModalPage