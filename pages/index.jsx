import Head from "next/head"
import Header from "../components/Header"
import NarrowContainer from "../components/Containers/NarrowContainer"
import WideContainer from "../components/Containers/WideContainer"
import config from "../config.json"
import HOC from "../hoc/hoc"
import Item from "../components/Item"

import Lists from "../components/Lists"
import ItemList from "../components/ItemList";
import ListModal from "../components/ListModal";
import {useState} from "react";

const ime_grupe = "Grupa A"

export default function Home() {

    const [isOpen, setModalOpened] = useState(true);

    // if (isOpen) return (
    //     <>
    //         <div className="px-4 sm:px-6 lg:px-8">
    //             <div
    //                 className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
    //                 <ListModal/>
    //             </div>
    //         </div>
    //     </>
    // )



    return (
        <HOC redirect={true}>
            <div className="">
                <Head>
                    <title>{config.appName}</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <Header/>

                <main className="mx-auto mt-2 max-w-7xl text-secondary-50 sm:px-6 lg:px-8">
                    <div className="flex flex-col space-y-4 py-2">
                        <NarrowContainer>
                            <h1 className="mb-8 bg-gradient-to-br from-indigo-400 to-emerald-600 bg-clip-text py-0.5 px-0.5 text-4xl font-semibold text-transparent">
                                {ime_grupe}
                            </h1>
                        </NarrowContainer>

                        <WideContainer>
                            <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
                                <div>

                                </div>
                                <div>
                                    <ItemList/>
                                </div>
                            </div>
                        </WideContainer>
                    </div>
                </main>

                {/*<footer className="flex h-24 w-full items-center justify-center border-t">*/}

                {/*</footer>*/}
            </div>
        </HOC>

    )
}
