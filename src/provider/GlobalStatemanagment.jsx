import { createContext, useState } from "react";

export const StateContext = createContext();

const GlobalStatemanagment = ({ children }) => {
    const [navUserModal, setNavUserModal] = useState(false);
    const [showLoginModalState, setShowLoginModalState] = useState(false);
    const [showSignUpModalState, setShowSignUpModalState] = useState(false);
    console.log(showSignUpModalState);
    const [toggleNavbarMenu, setToggleNavbarMenu] = useState(false);

    const stateInfo = {
        navUserModal, setNavUserModal,
        showLoginModalState, setShowLoginModalState,
        toggleNavbarMenu, setToggleNavbarMenu,
        showSignUpModalState, setShowSignUpModalState
    }
    return (
        <StateContext.Provider value={stateInfo}>
            {children}
        </StateContext.Provider>
    );
};

export default GlobalStatemanagment;