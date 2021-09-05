import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

const BasicInfoTab = () => {
    const extendedData = useSelector((state: RootStateOrAny) => state.singleCity.extendedCityData.data)
    const alternateNames = extendedData._embedded?.['city:alternate-names']
        .alternate_names

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <h1 >{extendedData.full_name}</h1>
            <div>
                <p style={{ textAlign: 'center' }}>city population: {extendedData.population}</p>
                <p style={{ textAlign: 'center' }}>
                    country population: {extendedData._embedded?.['city:country'].population ?? ''}
                </p>
            </div>

            <p style={{ textAlign: 'center' }}>
                currency: {extendedData._embedded?.['city:country']?.currency_code ?? ''}
            </p>
            {
                alternateNames?.length > 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                        alternative names:<div style={{ maxHeight: '4em', overflowY: 'auto' }}>
                            {alternateNames
                                .map((name: any) => (
                                    <p key={name.name} style={{ margin: '0em' }}>
                                        {name.name}
                                    </p>
                                ))}
                        </div>
                    </div>
                )
            }
            <p style={{ textAlign: 'center' }}>
                timezone: {extendedData._embedded?.['city:timezone'].iana_name ?? ''}
            </p>
        </div>
    )
}

export default BasicInfoTab