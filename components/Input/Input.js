import {useState} from "react";

export default function Input({title, placeholder, onChangeHandler, onKeyPressHandler, type, isInvalid = false}) {
    if (!onChangeHandler) onChangeHandler = () => {
    }
    if (!onKeyPressHandler) onKeyPressHandler = () => {
    }

    const [isTouched, setIsTouched] = useState(false)

    return (
        <div>
            <label className="block text-sm font-medium text-gray-100">
                {title || "Title"}
            </label>
            <div className="mt-1 text-gray-800">
                <input
                    type={type || "text"}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    placeholder={placeholder || ""}
                    className="py-1 px-1 block w-full shadow focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
            </div>
        </div>

    )

}
