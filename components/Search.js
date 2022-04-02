import {SearchIcon} from "@heroicons/react/solid";

export default function Search(props) {
    return (
        <div className="max-w-xs mx-auto w-full lg:max-w-md">
            <label htmlFor="search" className="sr-only">
                Pretraži
            </label>
            <div className="relative text-white focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <SearchIcon className="h-5 w-5" aria-hidden="true"/>
                </div>
                <input
                    id="search"
                    className="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Pretraži"
                    type="search"
                    name="search"
                />
            </div>
        </div>
    )
}