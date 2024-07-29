import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRetreatsList } from "../redux/actions/RetreatsAction"

export const useFetchRetreats = () => {
    const dispatch = useDispatch()
    const { page, search, filter, limit, retreats } = useSelector(state => state.retreats)
    useEffect(() => {
        dispatch(getRetreatsList({ page, search, filter, limit }))
    }, [page, search, filter, limit])
    return retreats
}