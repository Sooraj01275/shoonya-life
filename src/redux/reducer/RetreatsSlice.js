import { createSlice } from "@reduxjs/toolkit"

const retreatsSlice = createSlice({
    name: 'retreats',
    initialState: {
        retreats: []
    },
    reducers: ({

    })
})

export const tagAction = retreatsSlice.actions
export default retreatsSlice.reducer