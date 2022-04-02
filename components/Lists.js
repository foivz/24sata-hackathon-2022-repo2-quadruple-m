import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/solid'

const lists = [
    {
        name: 'Zandonini',
        role: 'Family',
        email: 'janecooper@example.com',
        imageUrl:
            'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    },
]

export default function Lists() {
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lists.map((person) => (
                <li key={person.email} className="col-span-1 bg-gray-300 rounded-lg shadow divide-y divide-gray-200">
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-sm font-medium truncate">{person.name}</h3>
                                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.role}
                </span>
                            </div>
                            <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
                        </div>
                        <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" />
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                                <a
                                    href={`mailto:${person.email}`}
                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                >
                                    <AtSymbolIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">Pristupi</span>
                                </a>
                            </div>
                            <div className="-ml-px w-0 flex-1 flex">
                                <a
                                    href={`tel:${person.telephone}`}
                                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                >
                                    <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">Call</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
