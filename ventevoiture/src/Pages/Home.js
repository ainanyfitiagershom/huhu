import React from 'react'
import NavBar from "../components/NavBar"
// import Header from "../components/Header"
// import Footer from "../components/Footer"
// //import ListeVoiture from "./ListeVoiture"
//import Cardetail from "./Cardetail"
import Autre from "./Autre"
import Recherche from "./Recherche"
import DetailCar from "./DetailCar"
import Annonce from "./Annonce"
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
        <NavBar/>
        <Recherche/>
        <Autre/>
        <DetailCar/>
        <Annonce/>
        
        <Footer/>
        {/* <Header/>
        <Test/>
        <Autre/>
        <Footer/> */}
    </div>
  )
}

export default Home