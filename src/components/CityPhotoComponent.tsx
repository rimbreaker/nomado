import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useComponentDragable } from '../hooks/useComponentDraggable'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { areThereCityPhotos } from '../state/selectors/singleCitySelectors'
import './SingleCityPage.css'

const CityPhotoComponent = () => {
    const cityPhotos = useSelector(areThereCityPhotos)
    const isMobile = useMediaQuery('(max-width: 833px)')

    const containerRef = useRef<HTMLDivElement | null>(null)

    useComponentDragable(containerRef)


    return (
        <>{!isMobile && <div ref={containerRef} className='photo-container'>
            <img src={cityPhotos[0].web} alt="" />
        </div>}</>
    )
}

export default CityPhotoComponent