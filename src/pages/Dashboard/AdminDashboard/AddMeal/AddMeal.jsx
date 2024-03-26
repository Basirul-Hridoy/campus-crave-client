import { useState } from "react";
import CustomInput from "../../../../components/CustomInput";
import { useForm } from "react-hook-form";

const AddMeal = () => {
    const [showName, setShowName] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data)
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
                        <CustomInput
                            placeholder={"Title"}
                            type={"text"}
                        // {...register("title", { required: true })}
                        />
                    </p>
                    <select
                        id="input-field"
                        className="border-none outline-none bg-dashboard-secondary p-3 rounded-md w-full"
                    // {...register("category", { required: true })}
                    >
                        <option value="" disabled defaultValue="Category">Select Category</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </select>
                </div>

                {/*//*  meal ingradient and Price field */}
                <div className="flex flex-col md:flex-row gap-3">
                    <p className="w-full">
                        <CustomInput
                            placeholder={"Ingredients"}
                            type={"text"}
                        // {...register("ingredients", { required: true })}
                        />
                    </p>
                    <p className="w-full">
                        <CustomInput
                            placeholder={"Price"}
                            type={"number"}
                        // {...register("price", { required: true })}
                        />
                    </p>
                </div>

                {/*//*  meal distributor name and Email */}
                <div className="flex flex-col md:flex-row gap-3">
                    <p className="w-full">
                        <CustomInput
                            placeholder={"Distributor Name"}
                            type={"text"}
                        // {...register("distributorName", { required: true })}
                        />
                    </p>
                    <p className="w-full">
                        <CustomInput
                            placeholder={"Distributor Email"}
                            type={"email"}
                        // {...register("distributorEmail", { required: true })}
                        />
                    </p>
                </div>

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
                                    setShowName(imageFile);
                                }
                            }} className="hidden" type="file" name="" id="type2-2" />
                    </div>
                </div>

                {/*//* Meal description */}
                <div className="w-full">
                    <textarea
                        name=""
                        id=""
                        rows="4"
                        placeholder="Description"
                        className="w-full bg-dashboard-secondary p-3 outline-none resize-none"
                        {...register("description", { required: true })}
                    ></textarea>
                </div>

                {/*//* Submit button field*/}
                <div className="flex justify-between gap-3 ">
                    <button type="submit" className="primaryBtn w-full">Ad meal</button>
                    <button type="submit" className="primaryBtn w-full">Upcomming meal</button>
                </div>
            </form>
        </div >
    );
};

export default AddMeal;