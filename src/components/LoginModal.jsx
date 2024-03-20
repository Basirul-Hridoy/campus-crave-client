import React, { useContext } from 'react';
import { StateContext } from '../provider/GlobalStatemanagment';
import { IoMdCloseCircle } from "react-icons/io";

const LoginModal = () => {
    const { showLoginModalState, setShowLoginModalState } = useContext(StateContext);
    return (
        <div className="w-72 mx-auto flex items-center justify-center">
            <div onClick={() => setShowLoginModalState(false)} className={`fixed flex justify-center items-center z-[100] ${showLoginModalState ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full bg-black/20 duration-100`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full lg:w-[500px] bg-slate-200 drop-shadow-2xl rounded-lg ${showLoginModalState ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'} `}>
                    <form className="p-6">

                        <div onClick={() => setShowLoginModalState(false)} className='w-10 mx-auto mr-0 cursor-pointer text-black text-3xl '>
                            <IoMdCloseCircle />
                        </div>
                        <h1 className="backdrop-blur-sm text-4xl pb-8">Login</h1>
                        <div className="space-y-5">
                            <label htmlFor="email" className="block">Email</label>

                            <label htmlFor="password" className="block">Password</label>

                        </div>
                        {/* button type will be submit for handling form submission*/}

                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;