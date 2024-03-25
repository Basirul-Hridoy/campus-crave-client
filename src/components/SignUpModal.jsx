import { useContext, useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { StateContext } from '../provider/GlobalStatemanagment';
import { useForm } from 'react-hook-form';
import useAuth from '../Hook/useAuth';
import toast from 'react-hot-toast';
import { axiosPublic } from '../Hook/useAxiosPublic';
import Loading from './Loading';
import ImageUploadLoading from './ImageUploadLoading';

const imageUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imagebb_api_key}`

const SignUpModal = () => {
    const { showSignUpModalState, setShowSignUpModalState, setShowLoginModalState } = useContext(StateContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserInfo, loading } = useAuth();
    const [showName, setShowName] = useState({});
    const [image, setImage] = useState("");
    const [imageUploadLoading, setImageUploadLoading] = useState(false);
    const [firebaseError, setFirebaseError] = useState(false);
    const [signUpLoading, SetsignUpLoading] = useState(false);

    //* Image upload function
    const uploadImage = (file) => {
        console.log("inside up");
        setImageUploadLoading(true);
        const formData = new FormData();
        formData.append('image', file);
        console.log(formData);

        axiosPublic.post(imageUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(result => {
                console.log("Upload result:", result);
                setImage(result.data?.data?.display_url);
                setImageUploadLoading(false)
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    }

    const onSubmit = (data) => {
        SetsignUpLoading(true);
        //* user creation
        createUser(data.email, data.password)
            .then(result => {
                console.log(result);

                //* update profile name and image url
                updateUserInfo(data.name, image)
                    .then(() => {
                        //* User info for posting to the databse
                        const userInfo = {
                            name: data.name,
                            image: image,
                            email: data.email,
                            badge: "bronze",
                            role: "user"
                        }

                        //* post method using axios base url
                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                SetsignUpLoading(false);
                                toast.success("User cretion successfull");
                                setShowSignUpModalState(false);
                                reset()
                            }).catch(error => {
                                SetsignUpLoading(false);
                                console.log(error)
                            })


                    }).catch(error => {
                        SetsignUpLoading(false);
                        console.log(error.message);
                    });

            }).catch(error => {
                SetsignUpLoading(false);
                setFirebaseError(error.code);
                console.log(error.message);
            })
    }


    if (signUpLoading) {
        return <Loading />
    }

    return (
        // //*== Div containing the login modal
        <div className="md:w-72 mx-auto flex items-center justify-center px-2 md:px-0">

            {/*//*== Div handling the backdrop and closing modal ==*/}
            <div
                className={`fixed flex justify-center items-center z-[100] ${showSignUpModalState ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full bg-black/20 duration-100`}>

                {/*//*== Div containing the login form ==*/}
                <div onClick={(e_) => e_.stopPropagation()}
                    className={`absolute w-full  lg:w-[500px] bg-slate-100 drop-shadow-2xl rounded-lg ${showSignUpModalState ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'} `}>

                    {/*//*== The login form ==*/}
                    <form onSubmit={handleSubmit(onSubmit)} className="md:p-6 p-3">

                        {/*//*== Close button ==*/}
                        <div
                            onClick={() => setShowSignUpModalState(false)}
                            className='w-10 mx-auto mr-0 cursor-pointer text-black text-3xl '>
                            {/*//*== Close Icon ==*/}
                            <IoMdCloseCircle />
                        </div>

                        {/*//* == user image div ====*/}
                        {image && <div className='text-center mx-auto w-full flex justify-center mb-5'>
                            <img src={image} className='w-24 h-24 rounded-full object-cover ring-2 ring-secondary' alt="" />
                        </div>}

                        {/*//* image upload loading*/}
                        {imageUploadLoading && <ImageUploadLoading />}

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
                                    placeholder=""
                                    {...register("name", { required: true })}
                                />
                                {errors?.name && <span className='text-red-400 text-sm'>User name is required</span>}

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
                                    placeholder=""
                                    {...register("email", { required: true })}
                                />
                                <p className='text-red-400 text-sm'>{firebaseError}</p>
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
                            </div>

                            {/*//* == Image upload field ==*/}
                            <div className='max-w-full'>
                                <label htmlFor="type2-2" className="flex w-full cursor-pointer">
                                    <div className="w-fit whitespace-nowrap bg-secondary px-3 py-2 text-white">Choose File</div>
                                    <div className="flex w-full max-w-full overflow-hidden items-center border-b-[2px] border-secondary px-2 font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
                                </label>
                                <input
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            const imageFile = e.target.files[0];
                                            uploadImage(imageFile); // Correctly call the uploadImage function
                                            setShowName(imageFile);
                                            console.log("input iamge");
                                        }
                                        console.log("outside input image uplaod");
                                    }}
                                    className="hidden"
                                    type="file"
                                    name=""
                                    id="type2-2"
                                />
                            </div>

                            {/*//*== Login button ==*/}
                            <button disabled={!image} type='submit' className={`w-full py-3 rounded-lg bg-secondary text-white disabled:bg-slate-400`}>SignUp</button>
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