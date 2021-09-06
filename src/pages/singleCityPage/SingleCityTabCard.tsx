import React, { useState } from 'react'
import '../homePage/HomePage.css'

interface SingleCityTabCardProps {
    options: SingleCityTabOption[]
}

const SingleCityTabCard = ({ options }: SingleCityTabCardProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [open, setOpen] = useState(true)

    return (
        <div className='tab-card-wrapper'>
            <div className='tab-card'>
                <div className='tab-headers'>
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
                            >
                                <h1 className={className}>
                                    {option.shortTitle}
                                </h1>
                            </div>
                        )
                    })}
                    <div className='card-tab-chevron' onClick={() => { setOpen(prev => !prev) }}>{open ? '🔽' : '🔼'}
                    </div>
                </div>
                {open && options[selectedIndex].body}
            </div>
        </div>
    )
}

export default SingleCityTabCard