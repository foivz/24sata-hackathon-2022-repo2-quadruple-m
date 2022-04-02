import {useState} from "react";
import {useRouter} from "next/router";
import {getEndpoint} from "../utils/apiUtils";
import axios from "axios"
import cookies from "js-cookie"

const endpoint = getEndpoint();
const instance = axios.create({baseURL: endpoint})

const hoc = ({children, redirect, render}) => {
    const [isLogged, setIsLogged] = useState()

    instance.get("auth", {headers: {authorization: cookies.get("auth") || ""}}).then(res => {
        setIsLogged(res.data.isValid);
    })


    if ((typeof isLogged !== "undefined" && isLogged) || render) {
        return <>{children}</>
    } else if (typeof isLogged !== "undefined" && !isLogged && redirect) {
        // if (router) router.push("/");
        if (typeof window !== "undefined") {
            if (!window.location.href.endsWith("login")) {
                window.location.href = "/login"
            }

        }
        return <></>
    }

    return <></>

}

export default hoc;

