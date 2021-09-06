import React from 'react'
import { WidgetCategory } from '../../types/WidgetCategory'
import './SingleCityPage.css'

interface WidgetTabProps {
    category: WidgetCategory;
    urbanArea: string
}

const WidgetTab = ({ category, urbanArea }: WidgetTabProps) => {
    return <iframe className='widget-tab' src={`https://teleport.org/cities/${urbanArea}/widget/${category}/?currency=USD&citySwitcher=false`} title='widget' ></iframe>
}

export default WidgetTab