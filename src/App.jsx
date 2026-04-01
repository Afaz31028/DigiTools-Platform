import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/Banner/Banner'
import Tracking from './components/Tracking/Tracking'
import Package from './components/Package/Package'



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


      
    </>
  )
}

export default App
