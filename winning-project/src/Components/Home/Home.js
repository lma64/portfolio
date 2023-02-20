import React from 'react';
import './Home.css';
import Video from "../../Assets/video/Genshin Impact Story Teaser.mp4";
import Nav from '../Nav';
import About from '../About/About';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';


function Home() {
  return (
    <div className='container-fluid'>
        <Nav/>
        <div className='row'>
            <div className='col-md-12'>
                <div id="video-wrapper">
                    <video autoPlay muted={false} id="video">
                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
        <About/>
        <Card/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default Home