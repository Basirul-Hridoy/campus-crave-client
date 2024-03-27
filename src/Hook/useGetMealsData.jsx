import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from './useAxiosPublic';

const useGetMealsData = () => {
    const { data: mealsData = [], refetch, isLoading } = useQuery({
        queryKey: ["meals"],
        queryFn: () => axiosPublic.get("/all-meals")
            .then(res => {
                return res.data
            })
    })
    return [mealsData, refetch, isLoading]
};

export default useGetMealsData;