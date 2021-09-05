import React, { useRef, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useDetectClickAway } from '../hooks/useDetectClickAway'
import { setWidgetPageCategory } from '../state/actions/widgetPageActions'
import { ALL_WIDGET_CATEGORIES } from '../utils/Constants'

const WidgetPageCategoryPicker = () => {
    const [open, setOpen] = useState(false)
    const dropdownListRef = useRef(null)
    const dispatch = useDispatch()
    const currentCategory = useSelector((state: RootStateOrAny) => state.widgetPage.category)

    useDetectClickAway(dropdownListRef, () => setOpen(false))

    return (
        <div ref={dropdownListRef} style={{ margin: '2em' }}>
            <div style={{
                cursor: 'pointer',
                margin: '0px 1em'
            }} onClick={() => { setOpen(prev => !prev) }}>category: {currentCategory}{open ? '🔼' : '🔽'}
            </div>
            <ul style={{
                display: open ? '' : 'none',
                position: 'absolute',
                zIndex: 3,
                height: 'fit-content',
                top: '4em',
                right: 0,
                color: 'black',
                backgroundColor: 'white',
                padding: '0.5em',
                borderRadius: '5px',
                width: 'fit-content',
                listStyleType: 'none',
                left: 0,
                margin: 'auto',
                border: '1px black solid'
            }}>
                {ALL_WIDGET_CATEGORIES.map(category => (
                    <li className='dropdown-item' onClick={() => dispatch(setWidgetPageCategory(category))}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetPageCategoryPicker