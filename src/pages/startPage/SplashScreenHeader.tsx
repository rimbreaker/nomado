import React, { useRef, useEffect, useState } from 'react'
import './StartPage.css'
import Typed from 'typed.js'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { saveUserName, skipIntro } from '../../state/actions/SplashScreenActions'
import AccountBadge from './AccountBadge'
import { WELCOME_MESSAGE } from '../../utils/Constants'

const SplashScreenHeader = () => {
    const [hasTypingFinished, setHasTypingFinished] = useState(false)
    const [showSkipButton, setShowSkipButton] = useState(false)
    const [name, setName] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const skipWrapperRef = useRef<HTMLDivElement>(null)
    const topWrapperRef = useRef<HTMLDivElement>(null)
    const skippedIntro = useSelector((state: RootStateOrAny) => state.splashScreen.skippedIntro)
    const [showNavbar, setShowNavbar] = useState(skippedIntro)
    const dispatch = useDispatch()

    useEffect(() => { if (!skippedIntro) transitionNavbarToSplash() }, [skippedIntro])

    const transitionSplashToNavbar = () => {
        const wrapper = topWrapperRef.current!
        wrapper.style.height = "8vh"
        wrapper.style.boxShadow = '3px 3px 8px #cbced1,-3px -3px 8px #ffffff'

        const skipWrapper = skipWrapperRef.current!
        skipWrapper.style.opacity = '0'
        skipWrapper.style.marginTop = '-20px'

        setTimeout(() => setShowNavbar(true), 2000)
    }

    const transitionNavbarToSplash = () => {
        const wrapper = topWrapperRef.current!
        wrapper.style.height = "100vh"
        wrapper.style.boxShadow = ''

        setTimeout(() => {
            setShowNavbar(false)
            setShowSkipButton(true)
        }, 100)
    }

    const options = {
        strings: WELCOME_MESSAGE,
        typeSpeed: 50,
        backSpeed: 50,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        onComplete: () => {
            setHasTypingFinished(true)
            if (inputRef.current) {
                inputRef.current.focus()
            }
            setTimeout(() => {
                setShowSkipButton(true)
            }, 3000)
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            const typed = new Typed(inputRef.current, options)
            typed.start()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={showNavbar ? "navbar" : "wrapper"} ref={topWrapperRef} >
            {
                showNavbar ?
                    <AccountBadge />
                    : <>
                        <div style={{ transition: '2s', display: 'flex', width: '15em' }}>
                            <input
                                className='name-input'
                                ref={inputRef}
                                style={{ borderBottom: hasTypingFinished ? "1px white solid" : "" }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {
                                name.length > 0 &&
                                <button
                                    className="styled-button"
                                    onClick={() => {
                                        dispatch(saveUserName(name))
                                        transitionSplashToNavbar()
                                    }}>
                                    ok
                                </button>
                            }
                        </div>
                        <div
                            className='skipWrapper'
                            ref={skipWrapperRef}
                            style={{
                                marginTop:
                                    showSkipButton ?
                                        "77px"
                                        : "100px"
                            }}>
                            {showSkipButton && <button className='styled-button' onClick={() => {
                                transitionSplashToNavbar()
                                dispatch(skipIntro())
                            }}  >skip</button>}
                        </div>
                    </>
            }
        </div>
    )
}

export default SplashScreenHeader

