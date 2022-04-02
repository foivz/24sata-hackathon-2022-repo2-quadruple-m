import Image from "next/image"

export default function Recent({recentHires}) {
    return (
        <section aria-labelledby="recent-hires-title">
            <div className="rounded-lg bg-white overflow-hidden shadow">
                <div className="p-6">
                    <h2 className="text-base font-medium text-gray-900" id="recent-hires-title">
                        Nedavne ocjene
                    </h2>
                    <div className="flow-root mt-6">
                        <ul role="list" className="-my-5 divide-y divide-gray-200">
                            {recentHires.map((person) => (
                                <li key={person.handle} className="py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="h-8 w-8 rounded-full" src={person.imageUrl} alt=""/>
                                            {/*<Image className="object-center rounded-full" src={person.imageUrl} width="32" height="32" layout="intrinsic" alt=""/>*/}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                                            <p className="text-sm text-gray-500 truncate">{'@' + person.handle}</p>
                                        </div>
                                        <div>
                                            <a
                                                href={person.href}
                                                className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                            >
                                                Pogledaj
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6">
                        <a
                            href="#"
                            className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Pogledaj sve
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}