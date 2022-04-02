export default function NavbarItem({text, href}) {
    return (
        <a
            href={href ? href : "#"}
            className="text-base font-medium text-secondary-100 hover:text-secondary-50"
        >
            {text ? text : "Placeholder item"}
        </a>
    )
}
