import Layout from "../components/layout"
// import Image from "next/image"
import Link from "next/link"
import Particle from "../components/Particles"
import Logo from "../components/logo"


export default function Home() {
  return (
  <div className="Loading_screen">
    <Layout
      title="Loading intro"
      description="System starts with welcome message">
    </Layout> 
    <Particle />
    
  <div className="instructions">
    <Logo/>
  </div>

  <div className="message">

    <p>Press the <b> PS </b> button to enable your controller</p>

  </div>

  <div id="dualsense" className="dualsense_container">
     <div className="ps-button">
      
     <Link href="/Users" >
       <i className="bi bi-playstation"></i> 
      </Link >
      
    </div>
    
    <div className="dualsense"></div>
   
  </div> 
  </div>
  )
    
}
