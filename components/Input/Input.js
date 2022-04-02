import {useState} from "react";

export default function Input({dark, title, placeholder, onChangeHandler, onKeyPressHandler, type, isInvalid = false}) {
    if (!onChangeHandler) onChangeHandler = () => {
    }
    if (!onKeyPressHandler) onKeyPressHandler = () => {
    }

    const [isTouched, setIsTouched] = useState(false)

    if (dark) {
        return (
            <div>
                <label className="block text-sm font-medium text-gray-200">
                    {title || "Title"}
                </label>
                <div className="mt-1 text-gray-800">
                    <input
                        type={type || "text"}
                        onChange={onChangeHandler}
                        onKeyPress={onKeyPressHandler}
                        placeholder={placeholder || ""}
                        className="py-1 px-1 block w-full shadow focus:ring-indigo-700 focus:border-indigo-700 border-gray-500 rounded-md"
                    />
                </div>
            </div>

        )
    }

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
