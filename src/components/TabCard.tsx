import React, { useState } from 'react'
import './HomePage.css'

const TabCard = ({ options }: { options: any[] }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className='card-wrapper'>
            <div style={{
                maxWidth: '40em',
                maxHeight: '30em',
                backgroundColor: 'white',
                borderRadius: '20px'

            }}>
                <div style={{ display: 'flex' }}>
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
                                style={{ width: 'max-content', textAlign: 'center' }}
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