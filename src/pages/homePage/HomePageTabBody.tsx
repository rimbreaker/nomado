import React from 'react'
import { useHistory } from 'react-router'

interface HomePageTabBodyProps {
    option: TabOption
}

const HomePageTabBody = ({ option }: HomePageTabBodyProps) => {
    const history = useHistory()

    return (
        <div className='column-flex'  >
            <h1 >{option.title}</h1>
            <p className='paragraph'>{option.paragraph}</p>
            <p
                onClick={() => history.push(option.address)}
                className='tab-button'>
                {option.emoji}
            </p>
        </div>)
}

export default HomePageTabBody