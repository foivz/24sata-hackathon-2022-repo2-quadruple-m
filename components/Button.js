import {classNames} from "../utils/classUtils";

export default function Button({enabled, text, disabledText, onClickHandler}) {
    if (!text) text = "Default text"
    if (!disabledText) disabledText = text
    if (!onClickHandler) onClickHandler = () => {
    }
    if (typeof enabled === "undefined") enabled = true

    const callbackFn = enabled ? onClickHandler : () => {
    }

    return (
        <button
            onClick={callbackFn}
            className={classNames("transition w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", enabled ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-500 hover:bg-gray-700")}
        >
            {enabled ? text : disabledText}
        </button>
    )
}