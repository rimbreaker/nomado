import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { getSingleCityData } from '../state/actions/singleCityActions'
import {
    isThereCitySlug
} from '../state/selectors/singleCitySelectors'
import './SingleCityPage.css'
import { pickCoordinates } from '../state/actions/globeActions'
import SingleCityTabCard from './SingleCityTabCard'
import WidgetTab from './WidgetTab'
import { ALL_WIDGET_CATEGORIES, WIDGET_TABS_EMOJIS } from '../utils/Constants'
import BasicInfoTab from './BasicInfoTab'

const SingleCityPage = ({ id }: { id: string }) => {
    const cityName: string = useSelector((state: RootStateOrAny) => state.singleCity.fetchedBasicCityData.cityName)
    const cityId = useSelector((state: RootStateOrAny) => state.singleCity.id)
    const nearestCitiesLinks = useSelector((state: RootStateOrAny) => state.globe.fetchedNearCities.cityLinks)
    const isMobile = useMediaQuery('(max-width: 833px)')
    const cityCoords = useSelector((state: RootStateOrAny) => state.singleCity.fetchedBasicCityData.cityCoords)
    const currentCoords = useSelector((state: RootStateOrAny) => state.globe.coords)
    const citySlug = useSelector(isThereCitySlug)

    const dispatch = useDispatch()
    useEffect(() => {
        if (cityId !== id) {
            dispatch(getSingleCityData(id))
        }
        const nearCityId = nearestCitiesLinks[0]?.split(":")?.pop() ?? ""
        if (id !== nearCityId) {
            if (cityCoords.long !== currentCoords.long || cityCoords.lat !== currentCoords.lat)
                dispatch(pickCoordinates({
                    long: cityCoords.long,
                    lat: cityCoords.lat
                }))
        }
    }, [id, cityCoords])

    const options = [
        {
            shortTitle: 'Basic Info🌐',
            body: <BasicInfoTab />,
        }]

    if (citySlug)
        options.push(...ALL_WIDGET_CATEGORIES.map((category: string, index: number) => ({
            shortTitle: category.replace(category[0], category[0].toUpperCase()).concat(WIDGET_TABS_EMOJIS[index]),
            body: <WidgetTab category={category} urbanArea={citySlug} />,
        })))


    return (
        <>
            <div style={{ fontSize: 'xx-large', position: isMobile ? 'absolute' : 'relative', width: isMobile ? '100%' : '', margin: '0' }} className='dart-top-label' >{cityName}</div>
            <SingleCityTabCard options={options} />
        </>
    )
}

export default SingleCityPage