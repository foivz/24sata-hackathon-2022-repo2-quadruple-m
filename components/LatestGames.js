/* This example requires Tailwind CSS v2.0+ */
import {ChevronRightIcon} from "@heroicons/react/solid"
import GameListings from "./GameListings"

const games = [
  {
    name: "Cuphead",
    dateAgo: "7 minutes ago",
    imageUrl:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg?t=1645290183",
    date: "2020-01-07",
    href: "cuphead",
    seeders: 5,
    leechers: 0,
  },
  {
    name: "Cities: Skylines",
    dateAgo: "1 hour ago",
    imageUrl:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg?t=1645206071",
    date: "2020-01-07",
    href: "cities",
    seeders: 5,
    leechers: 0,
  },
  {
    name: "Crusader Kings III",
    dateAgo: "1 week ago",
    imageUrl:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/header.jpg?t=1645177859",
    date: "2020-01-07",
    href: "crusader",
    seeders: 5,
    leechers: 0,
  },
]

export default function Example() {
  return (
      <div className="overflow-hidden bg-primary-900 sm:rounded-md">
        <a
            href="#latest"
            className="flex flex-row items-center space-x-1 py-0.5 px-4 pt-2 sm:px-6 "
        >
          <h2 className="text-lg font-medium text-secondary-100">
            Latest Games
          </h2>
          <ChevronRightIcon
              className="h-5 w-5 text-secondary-400"
              aria-hidden="true"
          />
        </a>

        <GameListings games={games}/>
      </div>
  )
}
