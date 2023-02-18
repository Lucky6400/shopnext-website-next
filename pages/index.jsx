import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import HeaderBottom from '../components/HeaderBottom'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Poster from '../components/Poster'
import ProductFeed from '../components/ProductFeed'

const Home = ({ data, categoryData }) => {
  console.log(categoryData)
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />
      <HeaderBottom categoryData={categoryData} />

      <main className='max-w-7xl mx-auto'>
        <Banner />

        <Featured data={data}/>

        <Poster/>

        <ProductFeed data={data}/>
      </main>



      <footer className="flex h-1 w-full items-center justify-center border-t fixed bottom-0 left-0">

      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch('https://fakestoreapi.com/products');
  const categoryRes = await fetch('https://fakestoreapi.com/products/categories');
  const categoryData = await categoryRes.json();
  const data = await response.json();
  return {
    props: {
      data,
      categoryData
    }
  }
}

export default Home
