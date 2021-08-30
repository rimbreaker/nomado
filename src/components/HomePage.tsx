import React, { useEffect } from 'react'
import Tilt from 'react-parallax-tilt';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { startRevolving } from '../state/actions/globeActions';
import './HomePage.css'
import TabCard from './TabCard';

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startRevolving())
    }, [])

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

    const displayAsSingleCard = useMediaQuery('(max-width: 833px)')
    return (
        <>{
            displayAsSingleCard ?
                <TabCard options={[
                    {
                        shortTitle: 'Dart throw🎯',
                        title: "Try your luck",
                        paragraph: "throw a dart at the globe to try to select destination of your next journey",
                        emoji: '🎯', address: '/dart'
                    },
                    {
                        shortTitle: 'Search🔍',
                        title: "Search by name",
                        paragraph: "search for details a holiday destination by name via thesearch engine",
                        emoji: '🔍',
                        address: '/search'
                    }]} />
                : <div className='card-wrapper'>
                    <Card title="Try your luck" paragraph="throw a dart at the globe to try to select destination of your next journey" emoji='🎯' address='/dart' />
                    <Card title="Search by name" paragraph="search for details a holiday destination by name via thesearch engine" emoji='🔍' address='/search' />
                </div>
        }
        </>
    )
}

export default HomePage