import React from 'react'
import './SingleCityPage.css'

const WidgetPage = () => {
    const widget = document.getElementById('teleport-widget')!
    widget.style.display = ''
    widget.style.position = 'absolute'
    widget.style.top = '0';

    widget.style.marginLeft = 'auto';
    widget.style.marginRight = 'auto';
    widget.style.left = '0';
    widget.style.right = '0';
    widget.style.textAlign = 'center';
    widget.style.zIndex = '2';


    return (
        <div ></div>)
}

export default WidgetPage