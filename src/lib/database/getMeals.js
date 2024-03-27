import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../Hook/useAxiosPublic';

export const GetAllMealsData = () => {
    const { data: mealsData = [], refetch, isLoading } = useQuery({
        queryKey: ["meals"],
        queryFn: () => axiosPublic.get("/all-meals")
            .then(res => {
                return res.data
            })
    })
    return [mealsData, refetch, isLoading]
};


export const GetUpcommingMeals = () => {
    const { data: mealsData = [], refetch, isLoading } = useQuery({
        queryKey: ["meals"],
        queryFn: () => axiosPublic.get("/upcomming-meals")
            .then(res => {
                return res.data
            })
    })
    return [mealsData, refetch, isLoading]
}
