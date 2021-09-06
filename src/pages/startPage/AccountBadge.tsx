import React, { useRef, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useDetectClickAway } from '../../hooks/useDetectClickAway'
import { changeName } from '../../state/actions/SplashScreenActions'
import './StartPage.css'
import * as Paths from '../../utils/Paths'
import { resetSingleCity } from '../../state/actions/singleCityActions'
import WidgetPageCategoryPicker from '../widgetPage/WidgetPageCategoryPicker'

const AccountBadge = () => {
    const name = useSelector((state: RootStateOrAny) => state.splashScreen.userName)
    const [open, setOpen] = useState(false)
    const dropdownListRef = useRef(null)
    const history = useHistory()
    const dispatch = useDispatch()

    useDetectClickAway(dropdownListRef, () => setOpen(false))

    return (
        <div className='navbar-wrapper'>
            {history.location.pathname !== Paths.HOME
                && (
                    <h1 className='home-label' onClick={() => {
                        history.push(Paths.HOME);
                        dispatch(resetSingleCity())
                    }}>
                        Home
                    </h1>
                )}

            <div >{history.location.pathname === Paths.WIDGET && <WidgetPageCategoryPicker />}</div>
            <div ref={dropdownListRef} className='nav-item'>
                <img
                    className='avatar'
                    src={`https://avatars.dicebear.com/api/identicon/${name}.svg`}
                    alt=''
                ></img>
                <div
                    className='dropdown-chevron'
                    onClick={
                        () => {
                            setOpen(prev => !prev)
                        }}
                >
                    {name}{open ? '🔼' : '🔽'}
                </div>
                <ul
                    className='dropdown-menu'
                    style={{ display: open ? '' : 'none' }}
                >
                    <li id='recent-locations' className='dropdown-item' onClick={() => history.push(Paths.RECENT_LIST)}>show recently viewed locations</li>
                    <li className='dropdown-item' onClick={() => dispatch(changeName())}>change name</li>
                </ul>
            </div>
        </div>
    )
}

export default AccountBadge