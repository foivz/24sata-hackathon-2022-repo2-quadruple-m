import Head from "next/head"
import Header from "../components/Header"
import NarrowContainer from "../components/Containers/NarrowContainer"
import WideContainer from "../components/Containers/WideContainer"
import config from "../config.json"
import Login from "../components/Login"
import HOC from "../hoc/hoc"
import cookies from "js-cookie"

export default function Home() {
    cookies.remove("auth")
    window.location.href = "/"
}
