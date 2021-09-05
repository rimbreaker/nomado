import React from 'react'
import { WidgetCategory } from '../types/WidgetCategory'

interface WidgetTabProps {
    category: WidgetCategory;
    urbanArea: string
}

const WidgetTab = ({ category, urbanArea }: WidgetTabProps) => {
    return <iframe style={{
        height: '40vh',
        width: '100%'
    }} src={`https://teleport.org/cities/${urbanArea}/widget/${category}/?currency=USD&citySwitcher=false`} title='widget' ></iframe>
}

export default WidgetTab