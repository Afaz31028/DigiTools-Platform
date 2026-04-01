import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/Banner/Banner'
import Tracking from './components/Tracking/Tracking'
import Package from './components/Package/Package'
import AccountSteps from './components/AccountSteps/AccountSteps'
import Subscription from './components/Subscription/Subscription'
import Footer from './components/Footer/Footer'


function App() {

   const fetchPackages= async()=>{
    const res= await fetch('/packageInfo.json');
    const data= await res.json();
    return data;
  }
  const packagesPromise=fetchPackages();


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Tracking></Tracking>
      <Suspense fallback={<span class="$$loading $$loading-dots $$loading-xl"></span>}>
        <Package packagesPromise={packagesPromise}></Package>
      </Suspense>
      <AccountSteps></AccountSteps>
      <Subscription></Subscription>
      <Footer></Footer> 
    </>
  )
}

export default App
