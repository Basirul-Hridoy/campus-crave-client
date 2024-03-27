import { useQuery } from "@tanstack/react-query";
import { MdSearch } from "react-icons/md";
import { axiosSecure } from "../../../../Hook/useAxiosSecure";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loading from "../../../../components/Loading";

const AllMeals = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [renderMealLOading, setRenderMealLoading] = useState(true);

    // //* Load meals data from database
    const { data: mealsData = [], refetch } = useQuery({
        queryKey: ["meals", searchTerm],
        queryFn: () => axiosSecure.get(`/meals?search=${searchTerm}`)
            .then(res => {
                setRenderMealLoading(false)
                return res.data
            })

    })

    console.log(mealsData);
    //* Refetch to to search meals 
    useEffect(() => {
        refetch();
    }, [searchTerm, refetch]);

    //* Delete a single meal from the collection
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            background: "#182237",
            color: "#F9ECE4",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/meals/${id}`)
                    .then(res => {
                        console.log(res);
                        refetch();
                        toast.success("Meal deleted successfully ")
                    })
            }
        });
    }

    if (renderMealLOading) {
        return <Loading />
    }
    return (
        <>
            {/*//* === users search field ===*/}
            <div className='bg-[#182237] md:p-5 p-3 flex justify-between rounded-md items-center'>
                <h4 className='md:text-2xl text-xl font-semibold whitespace-nowrap'> Meals: {mealsData.length}</h4>
                <div className='flex items-center gap-2 md:p-3 p-2 bg-[#2E374A] rounded-md w-3/6 md:w-[250px]'>
                    <MdSearch className="md:text-xl text-base" />
                    <input
                        type="text"
                        className=" rounded-md outline-none bg-[#2E374A] w-1/2"
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/*//* ===== Users table =======*/}
            <div style={{ maxHeight: "600px", overflowY: "scroll" }} className="md:mt-8  mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-5">
                                #
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Meal Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Likes
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reviews
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Distributor name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Distributor Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Update
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                            <th scope="col" className="px-6 py-3">
                                View
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mealsData?.map((meal, index) => (
                                <tr key={meal._id} className="border-b border-b-gray-700 dark:bg-gray-800 hover:bg-[#2E374A] dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                        {index + 1}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                        {meal?.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {meal?.likes}
                                    </td>
                                    <td className="px-6 py-4">
                                        {meal?.reviews}
                                    </td>
                                    <td className="px-6 py-4">
                                        {meal?.distributorName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {meal?.distributorEmail}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-3 py-1 rounded-md bg-blue-400 text-white">Edit</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => handleDelete(meal._id)} className="px-3 py-1 rounded-md bg-red-400 text-white">Delete</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link>Meal Details</Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllMeals;