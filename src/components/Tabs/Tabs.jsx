import { Col, Row } from 'react-bootstrap'
import './Tabs.css'
import { IoReorderThreeOutline } from 'react-icons/io5'

function  Tabs({ filters, other, state, setState }) {
    return (
        <div className='px-2'>
            <Row className='bg-white rounded-3 shadow-sm  hoverPointer'>
                {
                    filters.map(filter => (
                        <Col key={filter.id} className='py-3 px-0 position-relative' onClick={() => setState(filter.id)}>
                            <div className={`px-3 ${(!other && filter.id == filters.length - 1) ? '' : 'border-end border-secondary-subtle'}`}>
                                <p className='fa_search_results-filter-title mb-0'>{filter.category}</p>
                                
                                    <p className='fa_search_results-filter-sub_title mb-0'>{filter.priceRange + (!filter.priceRange)? filter.timeRange: ' . ' + filter.timeRange}</p>
                                
                            </div>
                            {
                                (state == filter.id)
                                    ? <div className='position-absolute start-0 bottom-0 w-100'>
                                        <div className='fa_activeLine mx-auto'></div>
                                    </div>
                                    : null
                            }
                        </Col>
                    ))
                }
                {
                    other && <Col className='py-3 px-0 position-relative d-flex align-items-center' onClick={() => setState(3)}>
                        <div className='px-3 d-flex justify-content-center w-100'>
                            <p className='fa_search_results-filter-other mb-0'>
                                <IoReorderThreeOutline className='fs-3 me-2' />
                                Other sort</p>
                        </div>
                        {
                            (state == filters.length)
                                ? <div className='position-absolute start-0 bottom-0 w-100'>
                                    <div className='fa_activeLine mx-auto'></div>
                                </div>
                                : null
                        }
                    </Col>
                }
            </Row>
        </div>
    )
}

export default Tabs