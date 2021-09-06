import React, { useRef, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useDetectClickAway } from '../../hooks/useDetectClickAway'
import { setWidgetPageCategory } from '../../state/actions/widgetPageActions'
import { ALL_WIDGET_CATEGORIES } from '../../utils/Constants'
import './WidgetPageStyles.css'

const WidgetPageCategoryPicker = () => {
    const [open, setOpen] = useState(false)
    const dropdownListRef = useRef(null)
    const dispatch = useDispatch()
    const currentCategory = useSelector((state: RootStateOrAny) => state.widgetPage.category)

    useDetectClickAway(dropdownListRef, () => setOpen(false))

    return (
        <div ref={dropdownListRef} className='category-dropdown' >
            <div
                className='category-dropdown-label'
                onClick={
                    () => setOpen(prev => !prev)
                }>category: {currentCategory}{open ? '🔼' : '🔽'}
            </div>
            <ul className='category-dropdown-list' style={{
                display: open ? '' : 'none',
            }}>
                {ALL_WIDGET_CATEGORIES.map(category => (
                    <li id={category} key={category} className='dropdown-item' onClick={() => dispatch(setWidgetPageCategory(category))}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetPageCategoryPicker