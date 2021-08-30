import React, { useRef, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useDetectClickAway } from '../hooks/useDetectClickAway'
import { changeName } from '../state/actions/SplashScreenActions'
import './AccountBadge.css'

const AccountBadge = () => {
    const name = useSelector((state: RootStateOrAny) => state.splashScreen.userName)
    const [open, setOpen] = useState(false)
    const dropdownListRef = useRef(null)
    const history = useHistory()
    const dispatch = useDispatch()

    useDetectClickAway(dropdownListRef, () => setOpen(false))

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>

            {history.location.pathname !== '/' && <h1 style={{ color: 'white', cursor: 'pointer' }} onClick={() => history.push('/')}>Home</h1>}
            {/* arbitrary div for flexbox */}
            <div ></div>
            <div ref={dropdownListRef} className='nav-item'>
                <img className='avatar' src={`https://avatars.dicebear.com/api/identicon/${name}.svg`} alt=''></img>
                <div style={{
                    cursor: 'pointer',
                    margin: '0px 1em'
                }} onClick={() => { setOpen(prev => !prev) }}>{name}{open ? '🔼' : '🔽'}
                </div>
                <ul style={{ display: open ? '' : 'none' }} className='dropdown-menu'>
                    <li className='dropdown-item' onClick={() => history.push('/recentlist')}>show recently viewed locations</li>
                    <li className='dropdown-item' onClick={() => dispatch(changeName())}>change name</li>
                </ul>
            </div>
        </div>
    )
}

export default AccountBadge