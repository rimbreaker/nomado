import React from 'react'
import { useHistory } from 'react-router';
import Tilt from 'react-parallax-tilt';
import './HomePage.css'

const HomePageCard = ({ title, paragraph, emoji, address }: { title: string, paragraph: string, emoji: string, address: string }) => {
    const history = useHistory()

    return (
        <div onClick={() => history.push(address)}>
            <Tilt className='tilt-parallax' perspective={1000} glareBorderRadius={'10px'} glareEnable glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all" scale={1.1} >
                <div className='tilt-card-inner-wrapper' >
                    <h1 className='tilt-transform' >{title}</h1>
                    <p className='tilt-transform' >{paragraph}</p>
                    <p className='big-tilt-transform'>{emoji}</p>
                </div>
            </Tilt>
        </div>
    )
}

export default HomePageCard