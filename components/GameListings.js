import {ChevronRightIcon, ClockIcon} from "@heroicons/react/solid"
import Link from "next/link"

export default function GameListings({games}) {
    return (
        <ul role="list" className="divide-y divide-gray-200">
            {games.map((game) => (
                <li key={game.dateAgo}>
                    <Link href={`/app/${game.href}`}
                    >
                        <a
                            className="block scale-[0.99] transition hover:scale-[1.01] hover:bg-primary-700"
                        >
                            <div className="flex items-center px-4 py-4 sm:px-6">
                                <div className="flex min-w-0 flex-1 items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-12 rounded-lg"
                                            src={game.imageUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1 items-center px-4 md:grid md:grid-cols-2 md:gap-4">
                                        <div>
                                            <p className="truncate text-sm font-medium text-accent-500 ">
                                                {game.name}
                                            </p>
                                            <p className="mt-2 flex items-center text-sm text-secondary-500">
                                                <ClockIcon
                                                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-secondary-400"
                                                    aria-hidden="true"
                                                />
                                                <span className="truncate">
                                                {game.dateAgo}
                                            </span>
                                            </p>
                                        </div>
                                        <div className="hidden justify-center md:block">
                                            <div className="flex flex-row space-x-1">
                                                <p className="text-sm text-green-500">
                                                    {game.seeders}
                                                </p>
                                                <p className="text-sm text-secondary-100">
                                                    /
                                                </p>
                                                <p className="text-sm text-red-500">
                                                    {game.leechers}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ChevronRightIcon
                                        className="h-5 w-5 text-secondary-400"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
