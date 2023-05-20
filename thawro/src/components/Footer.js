import { flaticonRefs } from "../constants"


const Footer = () => {
    return (
        <ul className="mt-10 flex-row flex justify-center gap-10">
            {flaticonRefs.map((icon_ref, index) => (
                <li className="font-light text-slate-500 text-[10px]">
                    <a key={`flaticon-${index}`} href={icon_ref.href} title={icon_ref.title} > {icon_ref.text}</a>
                </li>
            ))}
        </ul>
    )
}

export default Footer