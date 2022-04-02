import ProfileDropdown from "./ProfileDropdown";
import HOC from "../hoc/hoc"

export default function({user, userNavigation}) {


    return (
        <HOC redirect={false}>
            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                {/*<button*/}
                {/*    type="button"*/}
                {/*    className="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"*/}
                {/*>*/}
                {/*    <span className="sr-only">View notifications</span>*/}
                {/*    <BellIcon className="h-6 w-6" aria-hidden="true"/>*/}
                {/*</button>*/}

                {/* Profile dropdown */}
                <ProfileDropdown user={user} userNavigation={userNavigation}/>

            </div>
        </HOC>

    )
}