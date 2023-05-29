import React from "react";
/** @jsxImportSource theme-ui */

import { styles } from '../styles'


const SectionHeader = ({ headText, subText }) => {
    return <>
        <p
            className={styles.sectionSubText}
            sx={{ color: "textPrimary" }}
        >{subText}</p>
        <h2
            className={styles.sectionHeadText}
            sx={{ color: "textTertiary" }}
        >{headText}</h2>
    </>
}

export default SectionHeader;