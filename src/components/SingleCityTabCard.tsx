import React, { useState } from 'react'
import './HomePage.css'

const SingleCityTabCard = ({ options }: { options: any[] }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [open, setOpen] = useState(true)
    const [openWide, setOpenWide] = useState(false)

    return (
        <div style={{
            display: 'flex',
            zIndex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            color: 'black',
            bottom: '0em',
            position: 'absolute',
            alignContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            right: 0,
            left: 0
        }}>
            <div style={{
                maxHeight: '80vh',
                backgroundColor: 'white',
                borderTopRightRadius: '20px',
                borderTopLeftRadius: '20px',
                width: '100vw'
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
                    })}
                    <div style={{
                        cursor: 'pointer',
                        margin: '0.5em 1em',
                        right: 0,
                        marginLeft: 'auto',
                    }} onClick={() => { setOpen(prev => !prev) }}>{open ? '🔽' : '🔼'}
                    </div>
                </div>
                {open && options[selectedIndex].body}
            </div>
        </div>
    )
}

export default SingleCityTabCard