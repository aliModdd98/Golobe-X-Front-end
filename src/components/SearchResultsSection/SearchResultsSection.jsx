import './SearchResultsSection.css'
import { useState } from 'react'
import ResultCard from '../ResultCard/ResultCard';
import { results } from './flightsData.js'
import Tabs from '../Tabs/Tabs.jsx';

function SearchResultsSection() {

    const [selected, setSelected] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const handleClick = (id) => {
        setSelected(id);
    }

    const filters = [
        {
            id : 0,
            category : 'Cheapest',
            priceRange : 99,
            timeRange : '2h 18m'
        },
        {
            id : 1,
            category : 'Best',
            priceRange : 99,
            timeRange : '2h 18m'
        },
        {
            id : 2,
            category : 'Quickest',
            priceRange : 99,
            timeRange : '2h 18m'
        }
    ]

    return (
        <>
            <div className='w-100 px-3'>
                <Tabs filters={filters} state={selected} setState={handleClick} other />
            </div>
            <p className='my-3 fa_cards-number'>Showing {showMore ? results.length : 4} of <span className='text-orange'>{results.length} places</span></p>
            <div>
                {
                    (showMore) 
                    ? results.map(res => (
                        <ResultCard key={res.id} res={res} />
                    ))
                    : results.slice(0,4).map(res => (
                        <ResultCard key={res.id} res={res} />
                    ))
                }
            </div>
            <button className='w-100 py-2 bg-dark text-white border-0 fa_more_results-button' onClick={() => {setShowMore(!showMore)}}>
                Show {showMore ? 'less' : 'more'} results
            </button>
        </>
    )
}

export default SearchResultsSection