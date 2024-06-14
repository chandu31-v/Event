// These styles apply to every route in the application
import '@/styles/globals.css'
import {ContextProvider} from '@/components/context/configureContext'
import { Provider } from 'react-redux'
import store from '@/store/store'
//import {Analytics} from "@vercel/analytics"
import Loading from '@/components/loading'

export default function App({ Component, pageProps }) {

  return (
    <div className='max-w-screen h-screen'>
      <ContextProvider>
        <Provider store={store}>
        <Component {...pageProps} />
        {/* <Analytics /> */}
        </Provider>
      </ContextProvider>
    </div>)
}