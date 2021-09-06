import React, { useState } from 'react'
import './HomePage.css'

interface TabCardProps {
    options: SingleCityTabOption[]
}
const TabCard = ({ options }: TabCardProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className='card-wrapper'>
            <div className='home-tab-card-wrapper'>
                <div className='simple-flex' >
                    {options.map((option, index) => {
                        const className =
                            index === selectedIndex ?
                                'selected-tab'
                                : index === selectedIndex - 1 ?
                                    'tab-before'
                                    : index === selectedIndex + 1 ?
                                        'tab-after'
                                        : index === 0 ?
                                            'left-edge-tab' :
                                            index === options.length - 1 ?
                                                'right-edge-tab' :
                                                'further-tab'
                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className='single-tab-header'
                            ><h1 className={className}>
                                    {option.shortTitle}
                                </h1>
                            </div>
                        )
                    })}</div>

                {options[selectedIndex].body}
            </div>
        </div>
    )
}

export default TabCard