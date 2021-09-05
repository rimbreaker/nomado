import React from 'react'
import Tilt from 'react-parallax-tilt';
import { useHistory } from 'react-router';
import { useMediaQuery } from '../hooks/useMediaQuery';
import './HomePage.css'
import TabCard from './TabCard';
import * as Paths from '../utils/Paths'

const HomePage = () => {
    const history = useHistory()

    const Card = ({ title, paragraph, emoji, address }: { title: string, paragraph: string, emoji: string, address: string }) => {
        const history = useHistory()
        const handleRedirect = () => {
            history.push(address)
        }
        return (
            <div onClick={handleRedirect}>
                <Tilt className='tilt-parallax' perspective={1000} glareBorderRadius={'10px'} glareEnable glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all" scale={1.1} >
                    <div style={{ maxHeight: '30em', maxWidth: '20em', backgroundColor: 'white', borderRadius: '20px' }}>
                        <h1 style={{ transform: 'translateZ(30px)' }}>{title}</h1>
                        <p style={{ transform: 'translateZ(30px)' }}>{paragraph}</p>
                        <p style={{ transform: 'translateZ(30px)', fontSize: '5rem' }}>{emoji}</p>
                    </div>
                </Tilt>
            </div>
        )
    }
    const HomeTabBody = ({ option }: any) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <h1 >{option.title}</h1>
                <p style={{ width: '95%', textAlign: 'center' }}>{option.paragraph}</p>
                <p
                    onClick={() => history.push(option.address)}
                    className='tab-button'>
                    {option.emoji}
                </p>
            </div>)
    }
    const options = [
        {
            shortTitle: 'Dart throw🎯',
            title: "Try your luck",
            paragraph: "throw a dart at the globe to select destination of your next journey",
            emoji: '🎯',
            address: Paths.DART
        },
        {
            shortTitle: 'Widget🔍',
            title: "Search by Widget",
            paragraph: "search for details a holiday destination by browsing through the Teleport widget",
            emoji: '🔍',
            address: Paths.WIDGET
        }]

    const displayAsSingleCard = useMediaQuery('(max-width: 833px)')

    return (
        <>{
            displayAsSingleCard ?
                <TabCard options={options.map(option => { return { ...option, body: <HomeTabBody option={option} /> } })} />
                : <div className='card-wrapper'>
                    <Card title="Try your luck" paragraph="throw a dart at the globe to select destination of your next journey" emoji='🎯' address={Paths.DART} />
                    <Card title="Search by Widget" paragraph="search for details a holiday destination by browsing through the Teleport widget" emoji='🔍' address={Paths.WIDGET} />
                </div>
        }
        </>
    )
}

export default HomePage