import axios from "axios"

const getAllCharacters = () => {
    return axios(`https://rickandmortyapi.com/api/character`)
    .then(res => res.data.results)
}

const getCharacterById = (id) => {
    return axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.data)
}

export const characterServices = {
    getAllCharacters,
    getCharacterById
}