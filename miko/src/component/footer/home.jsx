import "./home.css"
//import Shopbasket from '../shopbasket/Shopbasket'
import Footer from './footer/Footer1'
import Haider from '../Haider'
//import { Link } from "react-router-dom"
//import Empowering from "./Empowering/Empowering"
// import Scrollbar from "./Empowering/scroll/Scrollbar"
import CapsuleCollection from "./footer/Capsulecollection/CapsuleCollection"
import Art from "../innercomponent/Artisan/Art"
import homeimg from "./image/newhome.png"
import Empowering from "./Empowering/Empowering"
import Readnow from "./footer/Readnow/Readnow"
import Seen from "./footer/Seen/Seen"
import Sustain from "./footer/sustain/Sustain"
import Tfriends from "../innercomponent/Tfriends"

export default function Home() {
  return (
    <>
      <div>
        <Haider />
      </div>
      <div className="Homemain">
      <img src={homeimg} alt="" height={700} width={1520} />
      <div>
        <Empowering/>
      </div>
      <div>
        <Art />
      </div>
      <div>
        <Tfriends />
      </div>
      <div>
        <CapsuleCollection />
      </div>
      <div>
        <Readnow />
      </div>
      <div>
        <Seen />
      </div>
      <div>
        <Sustain />
      </div>
      <div>
        <Footer />
      </div>
      </div>

     
    </>
  )
}
