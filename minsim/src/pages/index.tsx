import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SearchBar from 'src/components/SearchBar'
import NavBar from 'src/components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <Head>
          <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          hello minsim
        </h1>
        <button 
        
        onClick={() => {
          throw new Error('Sentry Frontend Error')
        }}>
        Throw error
        </button>
      </main>
    </div>
  )
}

export default Home
