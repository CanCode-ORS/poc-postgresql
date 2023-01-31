import '@/styles/globals.css'
import { TeamsContextProvider } from '@/context/teamsContext'
import {SessionProvider} from 'next-auth/react'
import { UserContextProvider } from '@/context/userContext'
// import Script from 'next/script'

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    // <SessionProvider session={pageProps.session}>
    <UserContextProvider>
      <TeamsContextProvider>
        <Component {...pageProps} />
      </TeamsContextProvider>
    </UserContextProvider>
    //  </SessionProvider>
  )
}