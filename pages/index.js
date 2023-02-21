import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from '../styles/globals.css'
import App from '../components/App'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Customer Prospect UI | See large datasets quickly</title>
        <meta name="description" content="View Nested JSON data with interactiv Charts!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="/dist/output.css" rel="stylesheet"></link> */}
      </Head>
      
      <App />

    </>
  )
}
