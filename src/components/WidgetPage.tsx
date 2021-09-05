import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import './SingleCityPage.css'

const WidgetPage = () => {

    const currentCategory = useSelector((state: RootStateOrAny) => state.widgetPage.category)

    return (
        <iframe style={{
            position: 'absolute',
            zIndex: 1,
            top: '8vh',
            height: '100vh',
            width: '100%',
            right: 0,
            left: 0,
            margin: 'auto'
        }} src={`https://teleport.org/cities/berlin/widget/${currentCategory}/?currency=USD`} title='widget' ></iframe>
    )
}

export default WidgetPage