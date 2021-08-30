import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { getSingleCityData } from '../state/actions/singleCityActions'
import { areThereCityPhotos, areThereSalaryInfo, gareThereCityScores } from '../state/selectors/singleCitySelectors'
import CityPhotoComponent from './CityPhotoComponent'
import SalaryListComponent from './SalaryListComponent'
import './SingleCityPage.css'

const SingleCityPage = () => {
    const cityName: string = useSelector((state: RootStateOrAny) => state.singleCity.fetchedBasicCityData.cityName)
    const cityLink = useSelector((state: RootStateOrAny) => state.singleCity.fetchedBasicCityData.cityLink)

    const isMobile = useMediaQuery('(max-width: 833px)')
    const cityPhotos = useSelector(areThereCityPhotos)
    const salaryInfo = useSelector(areThereSalaryInfo)
    const cityScores = useSelector(gareThereCityScores)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        if (cityLink.length < 1)
            dispatch(getSingleCityData(history.location.pathname.split('/').pop() ?? ''))
        else {
            const cityId = cityLink.split(':').pop().split("/")[0]
            history.push(`/city/${cityId}`)
            dispatch(getSingleCityData(cityId ?? ''))
        }
    }, [cityLink])


    return (
        <>
            <div style={{ fontSize: 'xx-large', position: isMobile ? 'absolute' : 'relative', width: isMobile ? '100%' : '', margin: '0' }} className='dart-top-label' >{cityName}</div>
            {cityPhotos && <CityPhotoComponent />}
            {
                salaryInfo && <SalaryListComponent />}
        </>
    )
}

export default SingleCityPage