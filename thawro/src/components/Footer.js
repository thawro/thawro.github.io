import React from "react";
/** @jsxImportSource theme-ui */

import { flaticonRefs } from "../constants"


const Footer = () => {
    return (
        <ul className="flex-row flex gap-[10px]">
            {flaticonRefs.map((icon_ref, index) => (
                <li key={`flaticon-${index}`}>
                    <a href={icon_ref.href} title={icon_ref.title} className="leading-tight" >
                        <span
                            className="font-light text-[10px] leading-tight"
                            sx={{ color: "textPrimary" }}
                        >
                            {icon_ref.text}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Footer