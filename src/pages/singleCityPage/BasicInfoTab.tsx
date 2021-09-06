import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

const BasicInfoTab = () => {
    const extendedData = useSelector((state: RootStateOrAny) => state.singleCity.extendedCityData.data)
    const alternateNames = extendedData._embedded?.['city:alternate-names']
        .alternate_names

    return (
        <div className='basic-info-wrapper' >
            <h1 >{extendedData.full_name}</h1>
            <div>
                <p className='center-text'>city population: {extendedData.population}</p>
                <p className='center-text'>
                    country population: {extendedData._embedded?.['city:country'].population ?? ''}
                </p>
            </div>

            <p className='center-text'>
                currency: {extendedData._embedded?.['city:country']?.currency_code ?? ''}
            </p>
            {
                alternateNames?.length > 1 && (
                    <div className='alternate-names'>
                        alternative names:<div className='alternate-names-scroller'>
                            {alternateNames
                                .map((name: { name: string }) => (
                                    <p key={name.name} className='no-margin'>
                                        {name.name}
                                    </p>
                                ))}
                        </div>
                    </div>
                )
            }
            <p className='center-text'>
                timezone: {extendedData._embedded?.['city:timezone'].iana_name ?? ''}
            </p>
        </div>
    )
}

export default BasicInfoTab