import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchRetreats } from '../hooks/useFetchRetreats';
import RetreatsSlice, { RetreatsAction } from '../redux/reducer/RetreatsSlice';

export const Home = () => {
    const dispatch = useDispatch()
    const [isDateSelectOpen, setIsDateSelectOpen] = useState(false)
    const retreats = useFetchRetreats()
    const { page, search, filter, loading } = useSelector(state => state.retreats)
    const pagination = (mode) => {
        if (mode === 'back') {
            dispatch(RetreatsAction.setPage(page - 1))
        } else if (mode === 'forword') {
            dispatch(RetreatsAction.setPage(page + 1))
        }
    }
    return (
        <div>
            <div className="py-3 px-2 headerWrapper">
                <p>Wellness Retreats</p>
            </div>
            <div className="p-5">
                <div className='p-5 imageContainer sm:hidden md:block'>
                    <div className="discoverImageWrapper" />
                    <div className="mt-3">
                        <p className="text-2xl"><strong>Discover Your Inner Peace</strong></p>
                        <p className="text-base"><strong>Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</strong></p>
                    </div>
                </div>
                <div className='buttonWrapper sm:mt-3'>
                    <div >
                        <select className='mr-1 filterSelect' onChange={(e) => dispatch(RetreatsAction.setFilter(e.target.value))}>
                            <option value={''}>Filter By Date</option>
                            <option value={'2023-2024'}>2023-2024</option>
                            <option value={'2024-2025'}>2024-2025</option>
                        </select>
                        <select defaultValue={filter} className='filterSelect' onChange={(e) => dispatch(RetreatsAction.setFilter(e.target.value))}>
                            <option value={''}>Filter By Type</option>
                            <option value={'yoga'}>Yoga</option>
                            <option value={'Meditation'}>Meditation</option>
                            <option value={'Detox'}>Detox</option>
                        </select>
                    </div>
                    <div>
                        <input value={search} onChange={(e) => dispatch(RetreatsAction.setSearch(e.target.value))} className='searchInput' placeholder="Search retreats by title" />
                    </div>
                </div>
                {loading ? <div class="text-center h-500">
                    <div role="status">
                        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div> : <>{retreats.length ? <div className="grid md:grid-cols-3 gap-4 mt-3">
                    {retreats.map((singleItem, index) => <div kex={index} className=' cardWrapper'>
                        <div className='imgContainer' style={{ backgroundImage: `url(${singleItem.image})` }} />
                        <p className="text-2xl"><strong>{singleItem.title}</strong></p>
                        <p>{singleItem.description}</p>
                        <p>Date:{new Date(singleItem.date * 1000).toLocaleDateString()}</p>
                        <p>Location:{singleItem.location}</p>
                        <p>Price:${singleItem.price}</p>
                    </div>)}
                </div> : <div className='flex align-center justify-center'><strong>No Data Found</strong></div>}</>}
                <div className='flex justify-center align-center mt-3 gap-2'>
                    <button className={page === 1 ? 'paginationButtonDisabled' : 'paginationButton'} disabled={page === 1} onClick={() => pagination('back')}>Previous</button>
                    <button className='paginationButton' onClick={() => pagination('forword')}>Next</button>
                </div>
                <div className='flex justify-center align-center'>
                    <p>© 2024 Wellness Retreats. All rights reserved.</p>
                </div>
            </div>
        </div >
    );
}