import React, { useEffect } from 'react'
/** @jsxImportSource theme-ui */

import { CgClose } from 'react-icons/cg'


const PopUpWindow = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);


    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // if (!isOpen) {
    //     return null;
    // }

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        transform: `scale(${isOpen ? "1" : "0"})`,
        opacity: isOpen ? 1 : 0,
        animation: `${isOpen ? "openPopUpAnimation" : "closePopUpAnimation"} 1s ease forwards`,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        alignItems: 'center',
        justifyContent: 'center',
    };

    const contentStyle = {
        maxWidth: '90vw',
        maxHeight: '80vh',
        margin: '10vh 5vw',
        overflow: 'auto',
        padding: '15px 30px',
        borderRadius: '15px',
    }

    return (
        <div
            style={overlayStyle}
            onClick={handleOverlayClick}
            sx={{ background: "popupOverlayBackground" }}
        >
            <div
                style={contentStyle}
                sx={{ background: "popupContentBackground" }}
            >
                <CgClose
                    onClick={onClose}
                    className="float-right cursor-pointer text-[50px]"
                    sx={{ color: "text" }}
                />
                {children}
            </div>
        </div>
    );
}


export default PopUpWindow