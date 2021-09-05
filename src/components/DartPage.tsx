import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { startSpinning } from '../state/actions/globeActions'
import { resetSingleCity } from '../state/actions/singleCityActions'
import { isThereMoreThanOneCityNearby } from '../state/selectors/nearCitySelectors'
import './DartPage.css'
import * as Paths from '../utils/Paths'

const DraftPage = () => {
    const history = useHistory()
    const isOnlyCity = useSelector(isThereMoreThanOneCityNearby)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startSpinning())
    }, [])

    useEffect(() => {
        if (typeof isOnlyCity !== 'boolean') {
            const cityId = isOnlyCity.link.split(':').pop().split("/")[0]
            history.push(Paths.CITY.replace(":id", cityId))
        }
    }, [isOnlyCity])

    return (
        <>
            <div className='dart-top-label' > click on globe to throw a dart</div>
        </>
    )
}

export default DraftPage
