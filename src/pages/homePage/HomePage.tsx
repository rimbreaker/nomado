import React from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery';
import './HomePage.css'
import TabCard from './TabCard';
import * as Paths from '../../utils/Paths'
import HomePageTabBody from './HomePageTabBody';
import HomePageCard from './HomePageCard';

const HomePage = () => {

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

    const isMobile = useMediaQuery('(max-width: 833px)')

    return (
        <>{
            isMobile ?
                <TabCard options={options.map(option => { return { ...option, body: <HomePageTabBody option={option} /> } })} />
                : <div className='card-wrapper'>
                    {options.map(option => (
                        <HomePageCard key={option.title} title={option.title} paragraph={option.paragraph} emoji={option.emoji} address={option.address} />
                    ))}
                </div>
        }
        </>
    )
}

export default HomePage