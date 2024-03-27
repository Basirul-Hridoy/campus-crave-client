import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import { axiosSecure } from './useAxiosSecure';

const useAdmin = () => {
    const { user, loading } = useAuth();

    const { data: isAdmin = false, isLoading: adminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            console.log(res.data);
            return res?.data.admin;
        }
    })
    return [isAdmin, adminLoading]
};

export default useAdmin;