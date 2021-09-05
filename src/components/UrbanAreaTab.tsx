import React from 'react'
import { useSelector } from 'react-redux'
import { areThereUrbanAreaBasics, areThereUrbanAreaDetails } from '../state/selectors/singleCitySelectors'

const UrbanAreaTab = () => {

    const urbanAreaBasics = useSelector(areThereUrbanAreaBasics)
    const urbanAreaDetails = useSelector(areThereUrbanAreaDetails)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }} >
            <h1 >{urbanAreaBasics.name}</h1>
            <div>
                <p style={{ textAlign: 'center' }}>Continent: {urbanAreaBasics.continent}</p>
                <p style={{ textAlign: 'center' }}>
                    mayor: {urbanAreaBasics.mayor}
                </p>
            </div>
            {urbanAreaDetails && urbanAreaDetails.map((category: any) => (
                <>
                    <h3>{category.label}</h3>
                    {category.data.map((datapoint: any) => (
                        <>{datapoint.label}: {datapoint.float_value}</>
                    ))}
                </>
            ))}
        </div>
    )
}

export default UrbanAreaTab