import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './HomePage.css'

const TabCard = ({ options }: { options: any[] }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const history = useHistory()
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
                                style={{ width: '100%', textAlign: 'center' }}
                            ><h1 className={className}>
                                    {option.shortTitle}
                                </h1>
                            </div>
                        )
                    })}</div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <h1 >{options[selectedIndex].title}</h1>
                    <p style={{ width: '95%', textAlign: 'center' }}>{options[selectedIndex].paragraph}</p>
                    <p
                        onClick={() => history.push(options[selectedIndex].address)}
                        className='tab-button'>
                        {options[selectedIndex].emoji}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TabCard