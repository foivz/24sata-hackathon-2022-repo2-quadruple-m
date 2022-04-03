import { CheckIcon } from '@heroicons/react/solid'

const tiers = [
    {
        name: 'Besplatni',
        href: '#',
        priceMonthly: 0.99,
        description: "Osnove osnova",
        includedFeatures: ["Mogućnost nadogradnje na bolju verziju", "Prikaz jednog grafa istovremeno"],
    },
    {
        name: 'Škrtac',
        href: '#',
        priceMonthly: 49.99,
        description: "Osnove",
        includedFeatures: ["Sramota", "Prikaz jednog grafa istovremeno"],
    },
    {
        name: 'Lite',
        href: '#',
        priceMonthly: 359.99,
        description: "Nadomak savršenstvu",
        includedFeatures: ["Dodavanje jedne grupe", "Mogućnost pridruživanja drugim grupama","Prikaz dva grafa istovremeno"],
    },
    {
        name: 'Ljubavnica Pro Pack+',
        href: '#',
        priceMonthly: 599.99,
        description: "Da da",
        includedFeatures: ["Prikaz tri grafa istovremeno", "Dodavanje tri grupe", "Mogućnost pridruživanja drugim grupama","On-demand ljubavnica", "Potpuna diskrecija prema ženama"],
    },

]

export default function Example() {
    return (
        <div className="bg-indigo-300">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <h1 className="text-5xl font-extrabold text-white sm:text-center">Planovi</h1>
                    <p className="mt-5 text-xl text-gray-700 sm:text-center">
                       Samo je jedna odluka ispravna.
                    </p>
                </div>
                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
                    {tiers.map((tier, idx) => (
                        <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold leading-6 font-medium text-gray-900 text-center">{tier.name}</h2>
                                <p className="mt-4 text-gray-900 text-center">{tier.description}</p>
                                <p className="mt-8 text-center">
                                    <span className="text-4xl font-extrabold text-white">HRK{tier.priceMonthly}</span>{' '}
                                    <span className="text-base font-medium text-gray-50">/mj</span>
                                </p>
                                {idx === 3 ?
                                    <a
                                        href={tier.href}
                                        className="transition-all scale-100 hover:scale-150 mt-8 block w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border border-gray-800 rounded-md py-2 font-bold text-white text-center hover:bg-gray-900"
                                    >
                                        Kupi {tier.name}
                                    </a>

                                    :

                                    idx === 1 ?
                                        <a
                                            href={tier.href}
                                            className="transition-all scale-95 hover:scale-50 mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:text-transparent hover:bg-transparent hover:border-transparent hover:cursor-default"
                                        >
                                            Kupi {tier.name}
                                        </a>

                                        :

                                    <a
                                        href={tier.href}
                                        className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                                    >
                                        Kupi {tier.name}
                                    </a>}

                            </div>
                            <div className="pt-6 pb-8 px-6">
                                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Što je uključeno</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {tier.includedFeatures.map((feature) => (
                                        <li key={feature} className="flex space-x-3">
                                            <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                            <span className="text-sm text-gray-900">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
