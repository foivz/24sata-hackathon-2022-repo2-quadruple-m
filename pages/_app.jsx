import "../styles/globals.css"
import {useState} from "react";
import axios from "axios"
import config from "../config.json"
import cookies from "js-cookie"
import {getEndpoint} from "../utils/apiUtils"
import {useRouter} from "next/router";
import {Windmill} from "@windmill/react-ui";

const endpoint = getEndpoint()
const instance = axios.create({baseURL: endpoint})

function MyApp({Component, pageProps}) {
        return <Windmill dark>
                <Component {...pageProps} />
        </Windmill>
}

export default MyApp
