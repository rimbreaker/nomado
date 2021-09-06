import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { isThereMoreThanOneCityNearby } from '../../state/selectors/nearCitySelectors'
import './DartPage.css'
import * as Paths from '../../utils/Paths'

const DraftPage = () => {
    const history = useHistory()
    const isOnlyCity = useSelector(isThereMoreThanOneCityNearby)

    useEffect(() => {
        if (typeof isOnlyCity !== 'boolean') {
            const cityId = isOnlyCity.link.split(':').pop().split("/")[0]
            history.push(Paths.CITY.replace(":id", cityId))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOnlyCity])

    return (
        <div className='dart-top-label' >
            click on globe to throw a dart
        </div>
    )
}

export default DraftPage
