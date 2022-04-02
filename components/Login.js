import Input from "./Input/Input";
import {useState} from "react";
import cookies from "js-cookie";
import {getEndpoint} from "../utils/apiUtils";
import axios from "axios";
import {useRouter} from "next/router";
import {validateEmail, validatePassword} from "../utils/userUtils";
import {Switch} from "@headlessui/react";
import {classNames} from "../utils/classUtils";
import Button from "./Button";

const endpoint = getEndpoint()
const instance = axios.create({baseURL: endpoint})


export default function Login() {
    const [agreed, setAgreed] = useState(false)
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [pass, setPass] = useState("")
    const [state, setState] = useState(0);

    const router = useRouter()

    const nextHandler = e => {
        if (state === 1 && (!validateEmail(email) || !validatePassword(pass))) return
        if (state === 0) {
            instance.post("/login", {email}, {headers: {authorization: pass || ""}})
                .then(res => {
                    const {data} = res
                    if (data.isValid) {
                        cookies.set("auth", data.token, {expires: 7})
                        router.push("/")
                    } else {
                        alert("Nevažeća lozinka ili email adresa")
                    }
                })
                .catch(err => {
                    alert("Email adresa se već koristi")
                })
        } else {
            instance.post("/register", {email, pass, firstName, lastName}, {headers: {authorization: pass || ""}})
                .then(res => {
                    const {data} = res
                    if (data.isValid) {
                        cookies.set("auth", data.token)
                        router.push("/")
                    } else {
                        alert("Email adresa se već koristi")
                    }
                })
                .catch(err => {
                    alert("Email adresa se već koristi")
                })
        }

    }

    const onEmailChange = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const onPassChange = e => {
        e.preventDefault()
        setPass(e.target.value)
    }

    const onFirstChange = e => {
        e.preventDefault()
        setFirstName(e.target.value)
    }
    const onLastChange = e => {
        e.preventDefault()
        setLastName(e.target.value)
    }

    const stateChangeHandler = e => {
        e.preventDefault()
        setState(state > 0 ? 0 : 1)
    }

    return (
        <div className="rounded-lg shadow overflow-hidden bg-gray-600 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
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
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">{state === 0 ? "Prijava" : "Registracija"}</h2>
                    <p className="flex flex-row space-x-1 justify-center mt-4 text-lg leading-6 text-gray-200">
                        <p>{state === 0 ? "Nemate račun" : "Već imate račun"}?</p>
                        <p onClick={stateChangeHandler}
                           className="text-blue-400 cursor-pointer hover:text-blue-600">{state === 0 ? "Registrirajte se" : "Prijavite se"}</p>.
                    </p>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        {state === 1 && <div>
                            <Input type="text" title="Ime" onChangeHandler={onFirstChange}/>
                        </div>}
                        {state === 1 && <div>
                            <Input type="text" title="Prezime" onChangeHandler={onLastChange}/>
                        </div>}
                        <div className="sm:col-span-2">
                            <Input type="email" title="Email adresa" onChangeHandler={onEmailChange}/>
                        </div>

                        <div className="sm:col-span-2">
                            <Input type="password" title="Lozinka" onChangeHandler={onPassChange}/>
                        </div>

                        {state === 1 && <div className="sm:col-span-2">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className={classNames(
                                            agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed ? 'translate-x-5' : 'translate-x-0',
                                                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <div className="ml-3">
                                    <p className="text-base text-gray-100">
                                        Slažem se s {' '}
                                        <a href="/uvjeti-koristenja" className="font-medium text-blue-400 underline">
                                            uvjetima korištenja
                                        </a>{' '}
                                        i{' '}
                                        <a href="/kolacici" className="font-medium text-blue-400 underline">
                                            korištenjem kolačića
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>}
                        <div className="sm:col-span-2">
                            {state === 0 && <Button enabled={true} text="Prijava" onClickHandler={nextHandler}/>}
                            {state === 1 && <Button enabled={agreed && validateEmail(email) && validatePassword(pass)}
                                                    text="Registracija" onClickHandler={nextHandler}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}