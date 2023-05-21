import { CgClose } from 'react-icons/cg'
import { useEffect } from 'react'


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
            // Clicked on the overlay (outside the content)
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
        // paddingTop: '3em',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 9999,
        // display: 'flex',
        alignItems: 'center',
        // borderRadius: '80px',
        justifyContent: 'center',
    };

    const contentStyle = {
        maxWidth: '90vw',
        maxHeight: '80vh', // Adjust as needed to limit the height of the modal content
        margin: '10vh 5vw',
        // position: 'relative',
        overflow: 'auto',
        padding: '15px 30px',
        backgroundColor: 'black',
        borderRadius: '15px',
    }

    return (
        <div style={overlayStyle} onClick={handleOverlayClick}>
            <div style={contentStyle}>
                <CgClose onClick={onClose} className="float-right cursor-pointer text-[50px] text-white" />
                {children}
            </div>
        </div>
    );
}


export default PopUpWindow