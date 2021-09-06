import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import './WidgetPageStyles.css'

const WidgetPage = () => {

    const currentCategory = useSelector((state: RootStateOrAny) => state.widgetPage.category)
    return (
        <iframe className='widget-iframe'
            src={`https://teleport.org/cities/berlin/widget/${currentCategory}/?currency=USD`}
            title='widget'
        ></iframe>
    )
}

export default WidgetPage