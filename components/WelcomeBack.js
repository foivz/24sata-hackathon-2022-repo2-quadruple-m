import Link from "next/link"

export default function WelcomeBack({user, stats}) {

    return (
        <section aria-labelledby="profile-overview-title">
            <div className="rounded-lg bg-white overflow-hidden shadow">
                <h2 className="sr-only" id="profile-overview-title">
                    Pregled profila
                </h2>
                <div className="bg-white p-6">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="sm:flex sm:space-x-5">
                            <div className="flex-shrink-0">
                                <img className="mx-auto h-20 w-20 rounded-full" src={user.imageUrl} alt=""/>
                            </div>
                            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p className="text-sm font-medium text-gray-600">Dobrodošli nazad,</p>
                                <p className="text-xl font-bold text-gray-900 sm:text-2xl">{`${user.firstName} ${user.lastName}`}</p>
                                <p className="text-sm font-medium text-gray-600">{user.role}</p>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center sm:mt-0">
                            <Link href="/profil">
                                <a
                                    className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    Pogledaj profil
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                {/*<div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">*/}
                {/*    {stats.map((stat) => (*/}
                {/*        <div key={stat.label} className="px-6 py-5 text-sm font-medium text-center">*/}
                {/*            <span className="text-gray-900">{stat.value}</span>{' '}*/}
                {/*            <span className="text-gray-600">{stat.label}</span>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </section>
    )
}