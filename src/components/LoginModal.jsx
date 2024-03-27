import { useContext, useState } from 'react';
import { StateContext } from '../provider/GlobalStatemanagment';
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import useAuth from '../Hook/useAuth';
import Loading from './Loading';

const LoginModal = () => {
    const { showLoginModalState, setShowLoginModalState, setShowSignUpModalState } = useContext(StateContext);
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm();
    const [loginLoading, setLoginLoading] = useState(false);
    const [firebaseError, setFirebaseError] = useState(false);

    const { signIn } = useAuth();

    const onSubmit = (data) => {
        setLoginLoading(true)
        signIn(data.email, data.password)
            .then(res => {
                console.log(res);
                reset()
                setLoginLoading(false)
                setShowLoginModalState(false)
            }).catch(error => {
                setFirebaseError(error.message)
                setLoginLoading(false)
            })
    }

    if (loginLoading) {
        return <Loading />
    }

    return (
        // //*== Div containing the login modal
        <div className="w-72 mx-auto flex items-center justify-center">

            {/*//*== Div handling the backdrop and closing modal ==*/}
            <div
                className={`fixed flex justify-center items-center z-[100] ${showLoginModalState ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full bg-black/20 duration-100`}>

                {/*//*== Div containing the login form ==*/}
                <div onClick={(e_) => e_.stopPropagation()}
                    className={`absolute w-full lg:w-[500px] bg-slate-100 drop-shadow-2xl rounded-lg ${showLoginModalState ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'} `}>

                    {/*//*== The login form ==*/}
                    <form onSubmit={handleSubmit(onSubmit)} className="md:p-6 p-3">

                        {/*//*== Close button ==*/}
                        <div
                            onClick={() => setShowLoginModalState(false)}
                            className='w-10 mx-auto mr-0 cursor-pointer text-black text-3xl '>
                            {/*//*== Close Icon ==*/}
                            <IoMdCloseCircle />
                        </div>

                        {/*//*== Login heading ==*/}
                        <h1 className="backdrop-blur-sm text-4xl pb-8 font-semibold text-primary">Login</h1>

                        {/*//*== Input fields ==*/}
                        <div className='space-y-7'>

                            {/*//*== Email input ==*/}
                            <div className="relative w-full rounded-lg">

                                {/*//*== Email input field ==*/}
                                <input
                                    className="peer w-full rounded-lg border border-gray-300 px-4 py-3 text-[#1B8EF8] focus:outline-none"
                                    type="text"
                                    placeholder=""
                                    {...register("email", { required: true })}
                                />
                                {errors?.email && <span className='text-red-400 text-sm'>Email is required</span>}

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
                                    placeholder=""
                                    {...register("password", { required: true })}
                                />
                                {errors?.password && <span className='text-red-400 text-sm'>Password is required</span>}

                                {/*//*== Password label ==*/}
                                <label
                                    className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-4  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                                    htmlFor="">Password</label>

                                {/*//*== Forgot password link ==*/}
                                <Link className='text-blue-400 text-sm mt-2 font-semibold flex justify-end'>Forget password?</Link>
                            </div>

                            {/*//*== Login button ==*/}
                            <button type='submit' className='w-full py-3 rounded-lg bg-secondary text-white'>Login</button>
                            <p className='text-red-400 text-sm'>{firebaseError}</p>
                        </div>

                        {/*//*== Additional options ==*/}
                        <div className='my-3'>

                            {/*//*== Not a member? Signup link ==*/}
                            <p className='flex justify-center items-center gap-1'>Not a member? <Link onClick={() => {
                                setShowSignUpModalState(true);
                                setShowLoginModalState(false)
                            }} className='text-blue-400 font-semibold text-sm'>SignUp now</Link></p>

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

export default LoginModal;