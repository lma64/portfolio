import React from 'react';
import "./Slider.css";
import {Carousel} from '3d-react-carousal';
import event1 from "../../Assets/img/slider/event1.jpg";
import event2 from "../../Assets/img/slider/event2.jpg";
import event3 from "../../Assets/img/slider/event3.webp";
import event4 from "../../Assets/img/slider/event4.jpg";
import event5 from "../../Assets/img/slider/event5.jpg";

function Slider() {
  let slides = 
  [
    <img  src={event1} alt="1" />,
    <img  src={event2} alt="2" />,
    <img  src={event3} alt="3" />,
    <img  src={event4} alt="4" />,
    <img src={event5} alt="5" />
  ];

  return (
    <div className='carousel' id="events">
        <div className="row">
          <div className="col thirteen d-flex justify-content-center">
            <h1>Current Events</h1>
          </div>
        </div>
        <Carousel slides={slides} arrows={true} autoplay={false} interval={1000}/>
    </div>
    
  )
}

export default Slider;