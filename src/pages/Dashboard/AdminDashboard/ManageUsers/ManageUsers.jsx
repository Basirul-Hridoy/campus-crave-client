import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { MdSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";

const ManageUsers = () => {
    const [searchTerm, setSearchTerm] = useState('')

    //* Load all users from database
    const { data: usersData = [], refetch, isLoading } = useQuery({
        queryKey: ["users", searchTerm],
        queryFn: () => axiosSecure.get(`/users?search=${searchTerm}`)
            .then(res => res.data)
    });

    useEffect(() => {
        refetch();
    }, [searchTerm, refetch]);

    //* If I needed to use custom table design to use all the table design page then uncomment these code to use 

    // Serialize usersData with numerical indices
    // const serializedUsersData = usersData.map((user, index) => {
    //     return { ...user, id: index + 1 };
    // });

    // const columns = [
    //     { text: '#', dataKey: 'id' },
    //     { text: 'User name', dataKey: 'name' },
    //     { text: 'User Email', dataKey: 'email' },
    //     {
    //         text: 'Make Admin', dataKey: 'role', render: (user) => (
    //             <button
    //                 onClick={() => handleUpdateUserRole(user._id)}
    //                 className={`px-2 py-1 rounded-lg  ${user.role === "user" ? "bg-secondary text-white" : "bg-green-400 text-primary"}  `}
    //             >
    //                 {user.role}
    //             </button>
    //         )
    //     },
    //     { text: 'User Status', dataKey: 'badge' }
    // ];
    //*===============================================================================================================
    //* update user role via admin
    const handleUpdateUserRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            background: "#182237",
            color: "#F9ECE4",
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

        <div>
            {/*//* === users search field ===*/}
            <div className='bg-[#182237] md:p-5 p-3 flex justify-between rounded-md items-center'>
                <h4 className='md:text-2xl text-xl font-semibold'>Users: {usersData.length}</h4>
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
            <div className="md:mt-8 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                <div style={{ maxHeight: "600px", overflowY: "scroll" }}>
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
            </div>

            {/*//* ==== If I need to use custom table design ===*/}
            {/* <TableComponent columns={columns} data={serializedUsersData} /> */}

        </div>
    );
};

export default ManageUsers;