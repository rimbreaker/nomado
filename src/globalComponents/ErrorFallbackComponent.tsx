import React from 'react'
import { FallbackProps } from 'react-error-boundary';
import * as Paths from '../utils/Paths'

const ErrorFallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
    const resetApp = () => {
        resetErrorBoundary();
        if (caches) {
            caches
                .keys()
                .then(names => {
                    for (const name of names) {
                        caches.delete(name)
                    }
                })
        }
        document.location.href = Paths.HOME
    }

    return (
        <div className='error-fallback-container'>
            <div role="alert">
                <h1 className='center-text'>
                    Something Went Wrong 😕
                </h1>
                <pre className='red-text'>{error.message}</pre>
                <button onClick={resetApp}>try again</button>
            </div>
        </div>
    )
}

export default ErrorFallbackComponent