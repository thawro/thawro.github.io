import React, { useEffect, useRef } from 'react'


const CloseOnOutsideClick = ({ children, onClose }) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return <div ref={ref}>{children}</div>;
};

export default CloseOnOutsideClick