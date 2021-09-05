import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { clearRecentsList, deleteSingleRecentLoaction } from '../state/actions/recentLocationsListActions'
import * as Paths from '../utils/Paths'

const RecentLocationsListPage = () => {
    const history = useHistory()
    const locationsList = useSelector((state: RootStateOrAny) => state.recentLocations.list)
    const dispatch = useDispatch()
    const placeholderStyle = {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        color: 'white',
        position: 'absolute'
    }

    return (
        <div style={placeholderStyle as any}><ol>
            {
                locationsList.map((location: any) => <li key={location.id}><span style={{ cursor: 'pointer' }} onClick={() => history.push(Paths.CITY.replace(":id", location.id))}>{location.fetchedBasicCityData.cityName}</span> - {location.userName} <span style={{ cursor: 'pointer' }} onClick={() => { dispatch(deleteSingleRecentLoaction(location.id)) }}>🗑</span></li>)
            }
        </ol>
            <button className='styled-button' onClick={() => dispatch(clearRecentsList())}>clear list</button>
        </div>
    )
}

export default RecentLocationsListPage