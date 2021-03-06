import React from 'react';
import MainComponent from './globalComponents/MainComponent';
import { ErrorBoundary } from 'react-error-boundary'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ConfigureStore } from './configureStore';
import ErrorFallbackComponent from './globalComponents/ErrorFallbackComponent'

const { store, persistor } = ConfigureStore()

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallbackComponent}
      onReset={
        async () => {
          await persistor.purge()
        }
      }
    >
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <MainComponent />
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

export default App;
