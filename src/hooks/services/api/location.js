import { useQuery } from "@tanstack/react-query";
import { locationServices } from "../fetchers/locationFetcher";

export const useGetAllLocations = () => {
    return useQuery({
        queryKey: ["locations"],
        queryFn: () => {
            const data = locationServices.getAllLocations();
            return data;
        }
    })
}