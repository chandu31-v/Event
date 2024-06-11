// These styles apply to every route in the application
import '@/styles/globals.css'
import {ContextProvider} from '@/components/context/configureContext'
import { Provider } from 'react-redux'
import store from '@/store/store'

export default function App({ Component, pageProps }) {

  return (
    <div className='max-w-screen h-screen'>
      <ContextProvider>
        <Provider store={store}>
        <Component {...pageProps} />
        </Provider>
      </ContextProvider>
    </div>)
}