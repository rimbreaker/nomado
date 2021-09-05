import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { areThereSalaryInfo } from '../state/selectors/singleCitySelectors'
import './SingleCityPage.css'

const SalaryListComponent = () => {

    const cityName: string = useSelector((state: RootStateOrAny) => state.singleCity.fetchedBasicCityData.cityName)

    const useOneRow = useMediaQuery('(max-width: 400px)')

    const useTwoRows = useMediaQuery('(max-width: 800px)')

    const salaryInfo = useSelector(areThereSalaryInfo)

    const amountOfRows = () => useOneRow ? 1 : useTwoRows ? 2 : 3
    return (
        <>

            <div style={{ borderRadius: '5px', zIndex: 10, backgroundColor: 'white', height: '75vh', overflowY: 'auto', overflowX: 'hidden' }}>
                <h3 style={{ textAlign: 'center' }}>Salaries in {cityName}</h3>
                <ul style={{ columnCount: amountOfRows(), padding: '0px' }}>
                    {salaryInfo.map((salary: any, i: number) => (
                        <li key={i} style={{ listStyleType: 'none' }}>
                            <h4 style={{ textAlign: 'center', marginBottom: '0px' }}>{salary.job.title}</h4>
                            <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <li style={{ listStyleType: 'none', color: 'red', fontWeight: 'bold' }}>25%: {Math.round(salary.salary_percentiles.percentile_25)}</li>
                                <li style={{ listStyleType: 'none', color: 'blue', fontWeight: 'bold' }}>50%: {Math.round(salary.salary_percentiles.percentile_50)}</li>
                                <li style={{ listStyleType: 'none', color: 'teal', fontWeight: 'bold' }}>75%: {Math.round(salary.salary_percentiles.percentile_75)}</li>
                            </ul>
                        </li >
                    ))
                    }
                </ul>
            </div >
        </>
    )
}

export default SalaryListComponent