import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import HeaderBottom from '../components/HeaderBottom'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />
      <HeaderBottom />

      <main>
        
      </main>

      <footer className="flex h-1 w-full items-center justify-center border-t fixed bottom-0 left-0">

      </footer>
    </div>
  )
}

export default Home
