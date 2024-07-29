import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGet } from '../../api'
import axios from "axios";

export const getRetreatsList = createAsyncThunk(
    'RetreatsAction/getRetreatsList',
    async (props, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?filter=${props.filter}&page=${props.page}&limit=${props.limit}&search=${props.search}`)
            return response.data
        } catch (error) {
            return rejectWithValue([])
        }
    }
)
