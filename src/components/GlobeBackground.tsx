import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import { CesiumWidget } from 'resium'
import { Cartesian3, Cartographic, Math as Mt } from 'cesium'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { pickCoordinates, startSightseeing } from '../state/actions/globeActions';

const GlobeBackground = () => {
    const widgetRef = useRef<any>(null)
    const [cityName, setCityName] = useState("")

    const globeInstructions = useSelector((state: RootStateOrAny) => state.globe)
    const nearestCitiesCoords = useSelector((state: RootStateOrAny) => state.globe.fetchedNearCities.cityCoords)
    const nearestCitiesNames = useSelector((state: RootStateOrAny) => state.globe.fetchedNearCities.cityNames)
    const dispatch = useDispatch()

    useEffect(() => {
        if (globeInstructions.fastSpinning)
            startRotating(-90, 0.2)
        if (globeInstructions.slowRevolving)
            startRotating(-180, 10)
    }, [globeInstructions.fastSpinning, globeInstructions.slowRevolving])


    useEffect(() => {
        if (nearestCitiesCoords?.length === 1) {
            const widget = widgetRef.current.cesiumElement

            widget.camera
                .flyTo({
                    destination: Cartesian3.fromDegrees(nearestCitiesCoords[0].long, nearestCitiesCoords[0].lat, 20000)
                })
        }
    }, [nearestCitiesCoords])

    useEffect(() => {
        if (nearestCitiesNames.length === 1) {
            setCityName(nearestCitiesNames[0])
        }
    }, [nearestCitiesNames])


    const startRotating = (longtitude: number, speed: number) => {
        const widget = widgetRef.current.cesiumElement
        widget.camera
            .flyTo({
                destination: Cartesian3.fromDegrees(longtitude, 0, 20000000),
                easingFunction: (time: number) => time,
                duration: speed,
                complete: () => startRotating(longtitude - 90, speed)
            })
    }


    return (

        <CesiumWidget
            ref={widgetRef}
            full
            onClick={(m) => {
                dispatch(startSightseeing())
                const widget = widgetRef.current.cesiumElement
                const scene = widget.scene

                const cartesian = widget.camera.pickEllipsoid?.(
                    m.position,
                    scene.globe.ellipsoid
                ) ?? null
                if (!cartesian) return

                const cartographic = Cartographic.fromCartesian(cartesian)
                dispatch(pickCoordinates({
                    long: Mt.toDegrees(cartographic.longitude),
                    lat: Mt.toDegrees(cartographic.latitude
                    )
                }))

                const newCartesian = Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, nearestCitiesNames.length === 0 ? 20000000 : 20000)
                widget.camera
                    .flyTo({
                        destination: newCartesian,
                        easingFunction: (time: number) => time,
                        duration: 1
                    })
            }}
        >
        </CesiumWidget>

    )
}

export default GlobeBackground