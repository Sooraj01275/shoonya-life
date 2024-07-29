import { createSlice } from "@reduxjs/toolkit"
import { getRetreatsList } from "../actions/RetreatsAction"

const retreatsSlice = createSlice({
    name: 'retreats',
    initialState: {
        retreats: [],
        page: 1,
        limit: 6,
        search: '',
        filter: '',
        loading: true
    },
    reducers: ({
        setPage: ((state, { payload }) => {
            state.page = payload
        }),
        setLimit: ((state, { payload }) => {
            state.limit = payload
        }),
        setSearch: ((state, { payload }) => {
            state.search = payload
        }),
        setFilter: ((state, { payload }) => {
            state.filter = payload
        }),
        setLoading: ((state, { payload }) => {
            state.loading = payload
        }),

    }),
    extraReducers: (builder) => {
        builder.addCase(
            getRetreatsList.pending, (state) => {
                state.loading = true
            }
        )
        builder.addCase(
            getRetreatsList.fulfilled, (state, actions) => {
                console.log(actions)
                state.retreats = actions.payload
                state.loading = false
            }
        )
        builder.addCase(
            getRetreatsList.rejected, (state) => {
                state.retreats = []
                state.loading = false
            }
        )
    }
})

export const RetreatsAction = retreatsSlice.actions
export default retreatsSlice.reducer