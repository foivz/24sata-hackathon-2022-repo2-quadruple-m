export default function Example({title, desc}) {
    return (

        <div className="grid grid-rows-2 gap-4">

            {title && desc ?

                <>
                    <div className="justify-center items-center row-span-3 min-h-full">
                        <div className="flex flex-row">
                            <p>dsa</p>
                            <div>
                                <p>dsa</p>
                                <p>dsa</p>
                            </div>

                        </div>

                    </div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>


                </>
                :  <div className="relative flex items-start">
                <div className="flex items-center h-5">
                    <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-100">
                        {title}
                    </label>
                    <p id="comments-description" className="text-gray-200">
                        {desc}
                    </p>
                </div>
            </div>}


        </div>


    )
}
