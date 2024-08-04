import React from "react";

const ProfileTabsContent = ({ id, ariaLabelledby, isActive, children }) => {
    return (
        <div
            className={`transition-opacity duration-150 ease-linear ${isActive ? 'block opacity-100' : 'hidden opacity-0'}`}
            id={id}
            role="tabpanel"
            aria-labelledby={ariaLabelledby}
        >
            {children}
        </div>
    );
};

export default ProfileTabsContent;
