import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../Hook/useAxiosSecure";
import useAuth from "../../../../Hook/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { MdSearch } from "react-icons/md";

const ManageUsers = () => {

    //* Load all users from database
    const { data: usersData = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: () => axiosSecure.get("/users")
            .then(res => res.data)
    });

    //* update user role via admin
    const handleUpdateUserRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/${id}`)
                    .then(res => {
                        console.log(res);
                        refetch();
                        toast.success("Admin successfully added")
                    })
            }
        });

    }


    return (

        <>
            {/*//* === users search field ===*/}
            <div className='bg-[#182237] p-5 flex justify-between rounded-md items-center'>
                <h4 className='text-2xl font-semibold'>All Users: {usersData.length}</h4>
                <div className='flex items-center gap-2 p-3 bg-[#2E374A] rounded-md'>
                    <MdSearch className="text-xl" />
                    <input type="text" className=" rounded-md outline-none bg-[#2E374A]" placeholder='Search...' />
                </div>
            </div>

            {/*//* ===== Users table =======*/}
            <div className="md:mt-8  mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 whitespace-nowrap">
                        <tr>
                            <th scope="col" className="px-6 py-5">
                                #
                            </th>
                            <th scope="col" className="px-6 py-5">
                                User name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Make Admin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usersData.map((user, index) => (
                                <tr key={user._id} className="border-b border-b-gray-700 dark:bg-gray-800 hover:bg-[#2E374A] dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                        {index + 1}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                                        {user?.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user?.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.role === "user" ? <button onClick={() => handleUpdateUserRole(user._id)}
                                            className={`px-2 py-1 rounded-lg  ${user.role === "user" ? "bg-secondary text-white" : "bg-green-400 text-primary"}  `}
                                        >{user?.role}</button> :
                                            <p>{user?.role}</p>
                                        }

                                    </td>
                                    <td className="px-6 py-4">
                                        {user?.badge}
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

export default ManageUsers;