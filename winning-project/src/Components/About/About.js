import React, { useState } from "react";
import "./About.css";
import travelers from "../../Assets/img/gallery/travelers.jpg";
import zhongli from "../../Assets/img/gallery/zhongli.webp";
import ayaka from "../../Assets/img/gallery/ayaka.jpg";
import hutao from "../../Assets/img/gallery/hutao.jpg";
import fatui from "../../Assets/img/gallery/fatui.jpg";
import magu from "../../Assets/img/gallery/maguu.jpg";
import mond from "../../Assets/img/gallery/mond.jpg";
import klee from "../../Assets/img/gallery/klee.jpg";
import raiden from "../../Assets/img/gallery/raiden-boss.webp";


function About() {
  const [showGallery, setshowGallery] = useState(false);

  const showImage = () => {
    if (showGallery) {
      setshowGallery(false);
    } else {
      setshowGallery(true);
    }
  };

  return (
      <section class="about-us py-5" id="about-us">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6">
              <h1 class="text-success">Welcome!</h1>
              <h2>Know More About Us</h2>
              <p className="para">
                As a traveler from another world, you will embark on a journey
                to reunite with your long-lost sibling and unravel the mysteries
                of Teyvat, and yourself. Charge head-on into open-world battles
                solo or invite friends to join the fight against dangerous
                monsters with 4-players cross-play for PS4, IOS, Android, and
                PC.
              </p>
              <p className="para">
                In Genshin Impact, manipulating the various elements of your
                characters is the key to defeating powerful enemies and solving
                challenging puzzles.
              </p>
              <button className="showless-btn" onClick={showImage}> {showGallery ? "Show Less" : "Show More"} </button>
              <p></p>
            </div>
          </div>
          {showGallery && <div class="row d-flex justify-content-center mt-5">
                <div class="col-lg-3 col-md-4 col-xs-6 thumb p-0">
                    <img src={travelers} class="caption-image zoom img-fluid" alt=""/>
                    <div class="image_overlay"> 
                      <p class="image_description">Choose a traveler and venture into a journey full of explorations and battles.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-xs-6 thumb p-0">
                    <img src={zhongli} class="caption-image zoom img-fluid" alt=""/>
                    <div class="image_overlay"> 
                      <p class="image_description">Zhongli, the consultant of the Wangsheng Funeral Parlor, is one of the characters you can get to fight by your side.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-xs-6 thumb p-0">
                    <img src={fatui} class="caption-image zoom img-fluid" alt=""/>
                    <div class="image_overlay"> 
                      <p class="image_description">The Fatui are a delegation of diplomats. They are one of the main antagonistic factions in Genshin Impact.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-xs-6 thumb p-0">
                    <img src={klee} class="caption-image zoom img-fluid" alt=""/>
                    <div class="image_overlay"> 
                      <p class="image_description">You can take part in multiple quests where you meet different characters with unique combat skills.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-xs-6 thumb p-0">
                    <img src={magu} class="caption-image zoom img-fluid" alt=""/>
                    <div class="image_overlay"> 
                      <p class="image_description">Maguu Kenki, known as the "Magic Puppet Sword Demon", is an open-world boss found in the Inazuman nation.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-xs-6 thumb p-0">
                    <img src={ayaka} class="caption-image zoom img-fluid" alt=""/>
                    <div class="image_overlay"> 
                      <p class="image_description">Kamisato Ayaka, a friend of the traveler, is a playable cryo character in Genshin Impact. </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-xs-6 thumb p-0">
                    <img src={hutao} class="caption-image zoom img-fluid" alt=""/>
                    <div class="image_overlay"> 
                      <p class="image_description">Each character has their own ultimate animation, this is Hu Tao's!</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-xs-6 thumb p-0">
                    <img src={mond} class="caption-image zoom img-fluid" alt=""/>
                    <div class="image_overlay"> 
                      <p class="image_description">The Knight of Favonius is the order of knights that protects the city of Mondstadt.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-xs-6 thumb p-0">
                    <img src={raiden} class="caption-image zoom img-fluid" alt=""/>
                    <div class="image_overlay"> 
                      <p class="image_description">The Raiden Shogun is the human form of the current Electro Archon of Inazuma.</p>
                    </div>
                </div>
            </div>}
        </div>
      </section>
  );
}

export default About;
