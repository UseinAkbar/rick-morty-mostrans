import axios from "axios"

const getAllLocations = () => {
    return axios(`https://rickandmortyapi.com/api/location`)
    .then(res => res.data.results)
}

export const locationServices = {
    getAllLocations
}