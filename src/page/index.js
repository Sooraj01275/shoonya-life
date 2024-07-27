import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { getRetreatsList } from '../redux/actions/RetreatsAction';
import { useDispatch } from 'react-redux';

export const Home = () => {
    const dispatch = useDispatch()
    const [isDateSelectOpen, setIsDateSelectOpen] = useState(false)

    useEffect(() => {
        console.log('useEffect')
        dispatch(getRetreatsList())
    }, [])

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
                <div className='flex justify-between mt-3'>
                    <div>
                        <select className='mr-1 filterSelect'>
                            <option>Filter By Date</option>
                            <option>option 1</option>
                            <option>option 2</option>
                        </select>
                        <select className='filterSelect'>
                            <option>Filter By Type</option>
                            <option>option 1</option>
                            <option>option 2</option>
                        </select>
                    </div>
                    <div>
                        <input className='searchInput' placeholder="Search retreats by title" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}