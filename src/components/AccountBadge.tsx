import React, { useRef, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useDetectClickAway } from '../hooks/useDetectClickAway'
import { changeName } from '../state/actions/SplashScreenActions'
import './AccountBadge.css'
import * as Paths from '../utils/Paths'
import { resetSingleCity } from '../state/actions/singleCityActions'
import WidgetPageCategoryPicker from './WidgetPageCategoryPicker'

const AccountBadge = () => {
    const name = useSelector((state: RootStateOrAny) => state.splashScreen.userName)
    const [open, setOpen] = useState(false)
    const dropdownListRef = useRef(null)
    const history = useHistory()
    const dispatch = useDispatch()

    useDetectClickAway(dropdownListRef, () => setOpen(false))

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>

            {history.location.pathname !== Paths.HOME && <h1 style={{ color: 'white', cursor: 'pointer' }} onClick={() => {
                history.push(Paths.HOME);
                dispatch(resetSingleCity())
            }}>Home</h1>}

            <div >{<WidgetPageCategoryPicker />}</div>
            <div ref={dropdownListRef} className='nav-item'>
                <img className='avatar' src={`https://avatars.dicebear.com/api/identicon/${name}.svg`} alt=''></img>
                <div style={{
                    cursor: 'pointer',
                    margin: '0px 1em'
                }} onClick={() => { setOpen(prev => !prev) }}>{name}{open ? '🔼' : '🔽'}
                </div>
                <ul style={{ display: open ? '' : 'none' }} className='dropdown-menu'>
                    <li className='dropdown-item' onClick={() => history.push(Paths.RECENT_LIST)}>show recently viewed locations</li>
                    <li className='dropdown-item' onClick={() => dispatch(changeName())}>change name</li>
                </ul>
            </div>
        </div>
    )
}

export default AccountBadge