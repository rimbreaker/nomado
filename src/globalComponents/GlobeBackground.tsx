import React, { useEffect, useRef, useState } from 'react';
import { CesiumComponentRef, CesiumWidget } from 'resium'
import { Cartesian3, Cartographic, Math as Mt, CesiumWidget as Cst } from 'cesium'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { pickCoordinates } from '../state/actions/globeActions';
import * as Paths from '../utils/Paths'
import { useHistory } from 'react-router';

const GlobeBackground = () => {
    const widgetRef = useRef<CesiumComponentRef<Cst> | null>(null)

    const nearestCitiesCoords = useSelector((state: RootStateOrAny) => state.globe.fetchedNearCities.cityCoords)
    const nearestCitiesNames = useSelector((state: RootStateOrAny) => state.globe.fetchedNearCities.cityNames)
    const nearestCitiesLinks = useSelector((state: RootStateOrAny) => state.globe.fetchedNearCities.cityLinks)
    const singleCity = useSelector((state: RootStateOrAny) => state.singleCity)
    const dispatch = useDispatch()
    const [widget, setWidget] = useState<Cst>()

    useEffect(() => {
        if (widgetRef)
            setWidget(widgetRef?.current?.cesiumElement)
    }, [])

    const history = useHistory()

    const startRotating = (longtitude: number, speed: number) => {
        if (widget)
            widget.camera
                .flyTo({
                    destination: Cartesian3.fromDegrees(longtitude, 0, 20000000),
                    easingFunction: (time: number) => time,
                    duration: speed,
                    complete: () => startRotating(longtitude - 90, speed)
                })
    }

    switch (history.location.pathname) {
        case Paths.DART:
            startRotating(-90, 0.2)
            break
        case Paths.HOME || Paths.WIDGET || Paths.RECENT_LIST:
            startRotating(-180, 10)
            break
    }


    useEffect(() => {
        const regEx = new RegExp(`${Paths.CITY.split(":")[0]}\\d+`)
        if (regEx.test(history.location.pathname) && widget) {
            if (nearestCitiesCoords?.length === 1) {
                widget.camera
                    .flyTo({
                        destination: Cartesian3.fromDegrees(nearestCitiesCoords[0].long, nearestCitiesCoords[0].lat, 20000)
                    })
                const nearCityId = nearestCitiesLinks[0].split(":").pop()
                if (singleCity.id !== nearCityId) {
                    history.push(Paths.CITY.replace(":id", nearCityId))
                }
            }

            if (nearestCitiesCoords?.length > 1) {
                const meanLong = nearestCitiesCoords.reduce((a: Coordinates, b: Coordinates) => (a.long + b.long)) / nearestCitiesCoords.length
                const meanLat = nearestCitiesCoords.reduce((a: Coordinates, b: Coordinates) => (a.lat + b.lat)) / nearestCitiesCoords.length

                widget.camera
                    .flyTo({
                        destination: Cartesian3.fromDegrees(meanLong, meanLat, 40000)
                    })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nearestCitiesCoords, widget])

    return (

        <CesiumWidget
            ref={widgetRef}
            full
            onClick={(m) => {
                const scene = widget!.scene

                const cartesian = widget!.camera.pickEllipsoid?.(
                    m.position!,
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
                widget?.camera
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