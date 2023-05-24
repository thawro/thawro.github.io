import React from "react";
/** @jsxImportSource theme-ui */

import { flaticonRefs } from "../constants"


const Footer = () => {
    return (
        <ul className="mt-10 flex-row flex justify-center gap-10">
            {flaticonRefs.map((icon_ref, index) => (
                <li key={`flaticon-${index}`} className="font-light text-slate-500 text-[10px]">
                    <a href={icon_ref.href} title={icon_ref.title} > {icon_ref.text}</a>
                </li>
            ))}
        </ul>
    )
}

export default Footer