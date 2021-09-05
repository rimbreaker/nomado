import React from 'react'
import { useSelector } from 'react-redux'
import { areThereCityPhotos } from '../state/selectors/singleCitySelectors'
import './SingleCityPage.css'

const CityPhotoComponent = () => {
    const cityPhotos = useSelector(areThereCityPhotos)

    return (
        <div style={{ overflowY: 'auto', height: '100%' }} >
            {cityPhotos.map((photo: any) => (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <img style={{ maxWidth: '100vw', marginBottom: '1em' }} src={photo} alt="" />
                </div>
            ))}
        </div>
    )
}

export default CityPhotoComponent