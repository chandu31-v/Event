// These styles apply to every route in the application
import '@/styles/globals.css'
import {ContextProvider} from '@/components/context/configureContext'

export default function App({ Component, pageProps }) {

  return (
    <div className='max-w-screen h-screen'>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </div>)
}