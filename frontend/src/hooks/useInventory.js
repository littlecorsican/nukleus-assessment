import {
    useQuery,
} from '@tanstack/react-query';
import { request } from '../utils/helpers'

const useProducts = ({limit, offset}) => {
    return useQuery({ 
        queryKey: ['inventory'],
        queryFn: async() => {
            const res = await request(`/api/inventory?offset=${offset}&limit=${limit}`, "GET", )
            return res?.data
        }
    });
}

export default useProducts