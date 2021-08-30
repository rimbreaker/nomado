import React from 'react'

const ErrorFallbackComponent = ({ error, resetErrorBoundary }: any) => {
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
        document.location.href = '/'
    }

    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div role="alert">
                <h1 style={{ textAlign: 'center' }}>
                    Something Went Wrong 😕
                </h1>
                <pre style={{ color: 'red' }}>{error.message}</pre>
                <button onClick={resetApp}>try again</button>
            </div>
        </div>
    )
}

export default ErrorFallbackComponent