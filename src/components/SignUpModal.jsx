import { useContext } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { StateContext } from '../provider/GlobalStatemanagment';

const SignUpModal = () => {
    const { showSignUpModalState, setShowSignUpModalState, setShowLoginModalState } = useContext(StateContext);
    console.log(showSignUpModalState);
    return (
        // //*== Div containing the login modal
        <div className="w-72 mx-auto flex items-center justify-center">

            {/*//*== Div handling the backdrop and closing modal ==*/}
            <div
                onClick={() => setShowSignUpModalState(false)}
                className={`fixed flex justify-center items-center z-[100] ${showSignUpModalState ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full bg-black/20 duration-100`}>

                {/*//*== Div containing the login form ==*/}
                <div onClick={(e_) => e_.stopPropagation()}
                    className={`absolute w-full lg:w-[500px] bg-slate-100 drop-shadow-2xl rounded-lg ${showSignUpModalState ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'} `}>

                    {/*//*== The login form ==*/}
                    <form className="p-6 ">

                        {/*//*== Close button ==*/}
                        <div
                            onClick={() => setShowSignUpModalState(false)}
                            className='w-10 mx-auto mr-0 cursor-pointer text-black text-3xl '>
                            {/*//*== Close Icon ==*/}
                            <IoMdCloseCircle />
                        </div>

                        {/*//*== Login heading ==*/}
                        <h1 className="backdrop-blur-sm text-4xl pb-8 font-semibold text-primary">Sign Up</h1>

                        {/*//*== Input fields ==*/}
                        <div className='space-y-7'>

                            {/*//*== Name input ==*/}
                            <div className="relative w-full rounded-lg">

                                {/*//*== Name input field ==*/}
                                <input
                                    className="peer w-full rounded-lg border border-gray-300 px-4 py-3 text-[#1B8EF8] focus:outline-none"
                                    type="text"
                                    placeholder="" />

                                {/*//*== Email label ==*/}
                                <label
                                    className="absolute -top-2 left-[20px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-4  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                                    htmlFor="">Name</label>
                            </div>
                            {/*//*== Email input ==*/}
                            <div className="relative w-full rounded-lg">

                                {/*//*== Email input field ==*/}
                                <input
                                    className="peer w-full rounded-lg border border-gray-300 px-4 py-3 text-[#1B8EF8] focus:outline-none"
                                    type="email"
                                    placeholder="" />

                                {/*//*== Email label ==*/}
                                <label
                                    className="absolute -top-2 left-[20px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-4  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                                    htmlFor="">Email</label>
                            </div>

                            {/*//*== Password input ==*/}
                            <div className="relative w-full rounded-lg">

                                {/*//*== Password input field ==*/}
                                <input
                                    className="peer w-full rounded-lg border border-gray-300 px-4 py-3 text-[#1B8EF8] focus:outline-none"
                                    type="password"
                                    placeholder="" />

                                {/*//*== Password label ==*/}
                                <label
                                    className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-4  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                                    htmlFor="">Password</label>
                            </div>

                            {/*//*== Login button ==*/}
                            <button className='w-full py-3 rounded-lg bg-secondary text-white'>SignUp</button>
                        </div>

                        {/*//*== Additional options ==*/}
                        <div className='my-3'>

                            {/*//*== Not a member? Signup link ==*/}
                            <p className='flex justify-center items-center gap-1'>Already have an account? <Link
                                onClick={() => {
                                    setShowLoginModalState(true);
                                    setShowSignUpModalState(false)
                                }}
                                className='text-blue-400 font-semibold text-sm'>Login</Link></p>

                            {/*//*== Social media login options ==*/}
                            <div className='flex justify-center gap-4 mt-4'>
                                <span><FaGoogle className='p-2 rounded-full bg-red-400 w-10 h-10 text-white' /></span>
                                <span><FaFacebookF className='p-2 rounded-full bg-blue-400 w-10 h-10 text-white' /></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;