import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hook/useAuth";
import toast from "react-hot-toast";
import { axiosSecure } from "../../../../Hook/useAxiosSecure";
import ImageUploadLoading from "../../../../components/ImageUploadLoading";


const imageUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imagebb_api_key}`
const AddMeal = () => {
    const [showName, setShowName] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [image, setImage] = useState('');
    const [imageUploadLoading, setImageUploadLoading] = useState(false);
    const { user } = useAuth();

    //* == post meal image 
    const handleImageUpload = (file) => {
        setImageUploadLoading(true)
        const formData = new FormData();
        formData.append("image", file);

        axiosSecure.post(imageUrl, formData, {
            headers: { "content-type": "multipart/formData" }
        })
            .then(result => {
                setImage(result.data?.data?.url);
                setImageUploadLoading(false);
                console.log(result);
            })
    }

    const onSubmit = (data) => {
        console.log(data);

        //* Post data to post meals collection
        const mealsInfo = {
            title: data.title,
            category: data.category,
            ingredients: data.ingredients,
            price: data.price,
            ratings: 0,
            likes: 0,
            reviews: 0,
            time: new Date(),
            distributorName: user?.displayName,
            distributorEmail: user?.email,
            image: image,

        }

        //* post methods
        axiosSecure.post("/meals", mealsInfo)
            .then(res => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    // setImage("")
                    // setShowName("")
                    // reset();
                } else {
                    toast.error(res.data.message)
                }
            })
    }
    return (
        <div>
            {/*//* Add meal title */}
            <div className="max-w-[800px] mx-auto mb-12 md:mt-12">
                <h2 className="text-4xl text-center font-semibold py-5 rounded-md bg-dashboard-primary">Ad meal page</h2>
            </div>

            {/*//* ===== Add meal form ==== */}
            <form onSubmit={handleSubmit(onSubmit)} className="md:max-w-[800px] mx-auto md:p-10 bg-dashboard-primary rounded-md space-y-5">

                {/*//* form title */}
                <h4 className="text-center font-semibold text-3xl">Add Item</h4>

                {/*//* Add meal title and category field */}
                <div className="flex flex-col md:flex-row gap-3">
                    <p className="w-full">
                        <input
                            placeholder={"Title"}
                            type={"text"}
                            className="input-style"
                            {...register("title", { required: true })}
                        />
                        {errors?.title && <span className='text-red-400 text-sm'>Meal title is required</span>}
                    </p>
                    <select
                        id="input-field"
                        className="border-none outline-none bg-dashboard-secondary p-3 rounded-md w-full"
                        {...register("category", { required: true })}
                    >
                        <option value="Select Category" disabled defaultValue={"Select Category"}>Select Category</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </select>
                    {errors?.category && <span className='text-red-400 text-sm'>Category is required</span>}
                </div>

                {/*//*  meal ingradient and Price field */}
                <div className="flex flex-col md:flex-row gap-3">
                    <p className="w-full">
                        <input
                            placeholder={"Ingredients"}
                            type={"text"}
                            className="input-style"
                            {...register("ingredients", { required: true })}
                        />
                        {errors?.ingredients && <span className='text-red-400 text-sm'>Meal ingradients is required</span>}
                    </p>
                    <p className="w-full">
                        <input
                            placeholder={"Price"}
                            type={"number"}
                            step="any"
                            className="input-style"
                            {...register("price", { required: true })}
                        />
                        {errors?.price && <span className='text-red-400 text-sm'>Price is required</span>}
                    </p>
                </div>

                {/*//*  meal distributor name and Email */}
                {/* <div className="flex flex-col md:flex-row gap-3">
                    <p className="w-full">
                        <input
                            placeholder={"Distributor Name"}
                            type={"text"}
                            className="input-style"
                            {...register("distributorName", { required: true })}
                        />
                    </p>
                    <p className="w-full">
                        <input
                            placeholder={"Distributor Email"}
                            type={"email"}
                            className="input-style"
                            {...register("distributorEmail", { required: true })}
                        />
                    </p>
                </div> */}

                {/*//*  meal Image input */}
                <div className="w-full">
                    <div className='max-w-full'>
                        <label htmlFor="type2-2" className="flex w-full cursor-pointer">
                            <div className="w-fit whitespace-nowrap bg-dashboard-secondary p-3 text-white">Choose File</div>
                            <div className="flex w-full max-w-full overflow-hidden items-center border-[3px] border-dashboard-secondary p-3 font-medium text-gray-400">{showName.name ? showName.name : 'No File Chosen'}</div>
                        </label>
                        <input
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    const imageFile = e.target.files[0];
                                    handleImageUpload(imageFile)
                                    setShowName(imageFile)
                                }
                            }}
                            className="hidden"
                            type="file"
                            id="type2-2"
                        />
                    </div>

                    {/*//* ===  Image loading and showing in the UI ===*/}
                    <div className="flex items-center">
                        {image && (
                            <div><img src={image} className="w-20 rounded-sm mt-1" alt="" /></div>
                        )}
                        {
                            imageUploadLoading && <div className="flex-1 mx-auto"><ImageUploadLoading /></div>
                        }
                    </div>
                </div>

                {/*//* Meal description */}
                <div className="w-full">
                    <textarea
                        rows="4"
                        placeholder="Description"
                        className="w-full bg-dashboard-secondary p-3 outline-none resize-none"
                        {...register("description", { required: true })}
                    ></textarea>
                </div>

                {/*//* Submit button field*/}
                <div className="flex justify-between gap-3 ">
                    <button type="submit" className="primaryBtn bg-blue-500 border-none hover:bg-blue-600 text-white w-full">Ad meal</button>
                    <button type="submit" className="primaryBtn bg-blue-500 border-none hover:bg-blue-600 text-white w-full">Upcomming meal</button>
                </div>
            </form>
        </div >
    );
};

export default AddMeal;