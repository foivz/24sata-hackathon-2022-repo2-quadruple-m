import cookies from "js-cookie"

export default function Home() {
    cookies.remove("auth")
    if (typeof window !== "undefined") window.location.href = "/"
    return <></>
}
