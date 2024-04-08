import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDogs = createAsyncThunk('list/fetchDogs', async () => {
    try {
        const response = await axios.get('https://dog.ceo/api/breed/hound/images')
        return response.data.message
    } catch(error) {
        throw new Error(error);
   }
})
export const fetchDogsbyBreed = createAsyncThunk('list/fetchDogsbyBreed', async (breed) => {
try {
const response =  await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
return response.data.message
} catch(error) {
    throw new Error(error);
}
})