import { useQuery } from "@tanstack/react-query";
import { characterServices } from "../fetchers/characterFetchers";

export const useGetAllCharacters = () => {
    return useQuery({
        queryKey: ["characters"],
        queryFn: () => {
            const data = characterServices.getAllCharacters();
            return data;
        }
    })
}

export const useGetCharacterById = (id) => {
    return useQuery({
        queryKey: ["character", id],
        queryFn: () => {
            const data = characterServices.getCharacterById(id);
            return data;
        }
    })
}