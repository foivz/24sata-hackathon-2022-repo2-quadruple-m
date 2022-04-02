import "../styles/globals.css"
import {useState} from "react";
import axios from "axios"
import config from "../config.json"
import cookies from "js-cookie"
import {getEndpoint} from "../utils/apiUtils"
import {useRouter} from "next/router";

const endpoint = getEndpoint()
const instance = axios.create({baseURL: endpoint})

function MyApp({Component, pageProps}) {
        return <Component {...pageProps} />
}

export default MyApp
