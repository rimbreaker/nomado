import React, { useRef } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { useComponentDragable } from '../hooks/useComponentDraggable'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { areThereSalaryInfo } from '../state/selectors/singleCitySelectors'
import './SingleCityPage.css'

const SalaryListComponent = () => {

    const cityName: string = useSelector((state: RootStateOrAny) => state.singleCity.fetchedBasicCityData.cityName)

    const containerRef = useRef<HTMLDivElement | null>(null)
    useComponentDragable(containerRef)

    const isMobile = useMediaQuery('(max-width: 833px)')
    const salaryInfo = useSelector(areThereSalaryInfo)
    return (
        <>
            {!isMobile &&
                <div ref={containerRef} style={{ borderRadius: '5px', position: 'absolute', zIndex: 10, backgroundColor: 'white', height: '75vh', overflowY: 'auto', }}>
                    <h3 style={{ width: '100%', textAlign: 'center' }}>Salaries in {cityName}</h3>
                    {salaryInfo.map((salary: any, i: number) => (
                        <>
                            <div key={i} style={{ textAlign: 'center' }}>{salary.job.title}</div>
                            <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <li style={{ listStyleType: 'none', color: 'red', fontWeight: 'bold' }}>25%: {Math.round(salary.salary_percentiles.percentile_25)}</li>
                                <li style={{ listStyleType: 'none', color: 'blue', fontWeight: 'bold' }}>50%: {Math.round(salary.salary_percentiles.percentile_50)}</li>
                                <li style={{ listStyleType: 'none', color: 'teal', fontWeight: 'bold' }}>75%: {Math.round(salary.salary_percentiles.percentile_75)}</li>
                            </ul>
                        </>
                    ))
                    }
                </div >}
        </>
    )
}

export default SalaryListComponent