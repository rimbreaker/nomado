import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { clearRecentsList, deleteSingleRecentLoaction } from '../../state/actions/recentLocationsListActions'
import * as Paths from '../../utils/Paths'
import './RecentPlacesList.css'

const RecentLocationsListPage = () => {
    const history = useHistory()
    const locationsList = useSelector((state: RootStateOrAny) => state.recentLocations.list)
    const dispatch = useDispatch()

    return (
        <div className='list-wrapper'>
            <ol>
                {
                    locationsList
                        .map((location: RecentLocation) =>
                            <li key={location.id}>
                                <span
                                    className='clickable'
                                    onClick={
                                        () => history.push(Paths.CITY.replace(":id", location.id))
                                    }>
                                    {location.cityName}
                                </span>
                                - {location.userName}{" "}
                                <span
                                    className='clickable'
                                    onClick={
                                        () => dispatch(deleteSingleRecentLoaction(location.id))
                                    }>
                                    🗑
                                </span>
                            </li>)
                }
            </ol>
            <button
                className='styled-button'
                onClick={() => dispatch(clearRecentsList())}>
                clear list
            </button>
        </div>
    )
}

export default RecentLocationsListPage