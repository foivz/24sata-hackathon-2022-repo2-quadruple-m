import cookies from "js-cookie";
import Button from "./Button";
import {getEndpoint} from "../utils/apiUtils";
import axios from "axios";

export default function Logout({user}) {

    const nextHandler = e => {
        e.preventDefault()
        cookies.remove("auth")
        // router.push("/")
        window.location.href = "/"
    }


    // return (
    //     <section aria-labelledby="profile-overview-title">
    //         <div className="rounded-lg bg-white overflow-hidden shadow">
    //             <h2 className="sr-only" id="profile-overview-title">
    //                 Odjava
    //             </h2>
    //             <div className="bg-white p-6">
    //                 <div className="sm:flex sm:items-center sm:justify-between">
    //                     <div className="sm:flex sm:space-x-5">
    //                         <div className="flex-shrink-0">
    //                             <img className="mx-auto h-20 w-20 rounded-full" src={user.imageUrl} alt=""/>
    //                         </div>
    //                         <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
    //                             <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.firstName},</p>
    //                             <p className="text-md font-medium text-gray-600">želite li se stvarno odjaviti?</p>
    //                         </div>
    //                     </div>
    //                     <div className="mt-5 flex justify-center sm:mt-0 cursor-pointer">
    //                         <p
    //                             onClick={nextHandler}
    //                             className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
    //                         >
    //                             Potvrdi
    //                         </p>
    //                     </div>
    //
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // )

    return (
        <div className="rounded-lg shadow overflow-hidden bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <svg
                    className="absolute left-full transform translate-x-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"/>
                </svg>
                <svg
                    className="absolute right-full bottom-0 transform -translate-x-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor"/>
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"/>
                </svg>
                <div className="text-center">
                    {/*<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Odjava</h2>*/}
                    <p className="flex flex-row space-x-1 justify-center mt-4 text-lg leading-6 text-gray-500">

                        <div className="sm:flex sm:space-x-5">
                            {/*<div className="flex-shrink-0">*/}
                            {/*    <img className="mx-auto h-20 w-20 rounded-full" src={user.imageUrl} alt=""/>*/}
                            {/*</div>*/}
                            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                {/*<p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.firstName},</p>*/}
                                {/*<p className="text-md font-medium text-gray-600">Želite li se stvarno odjaviti?</p>*/}
                                <p className="text-xl font-bold text-gray-900 sm:text-2xl">Želite li se stvarno
                                    odjaviti?</p>
                            </div>
                        </div>
                    </p>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        {/*<div className="sm:col-span-2">*/}
                        {/*    <Input type="email" title="Email adresa" onChangeHandler={onEmailChange}/>*/}
                        {/*</div>*/}

                        {/*<div className="sm:col-span-2">*/}
                        {/*    <Input type="password" title="Lozinka" onChangeHandler={onPassChange}/>*/}
                        {/*</div>*/}


                        <div className="sm:col-span-2">
                            <Button enabled={true} text="Potvrdi" onClickHandler={nextHandler}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}