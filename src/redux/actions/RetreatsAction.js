import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGet } from '../../api'

export const getRetreatsList = createAsyncThunk(
    'RetreatsAction/getRetreatsList',
    async (props, { rejectWithValue }) => {
        try {
            const response = await fetchGet('/v1/retreats', { page: 1, limit: 5 })
            return response
        } catch {
            return
        }
    }
)
