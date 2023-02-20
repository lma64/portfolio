import React from 'react';
import './Footer.css';
import logo2 from "../../Assets/img/logo/genshin-logo2.jpg";
import { AiOutlineEnvironment, AiOutlinePhone, AiOutlineInbox, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook} from "react-icons/ai";

function Footer() {
  return (
      <div className='main-footer' id="footer">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <a href="#">
                        <img className='logo-image' alt="logo" src={logo2}/>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <div className='first-column'> 
                        <h4> Contact us </h4>                         <a href = "tel: +9613025452" className = "line"> <span> <AiOutlinePhone/> +961 3 123 254 </span></a> <br/>
                        <a href = "https://www.google.com/maps/place/Monty+Mobile+Lebanon/@33.8976863,35.4874331,15z/data=!4m2!3m1!1s0x0:0x62f62de8b111dd99?sa=X&ved=2ahUKEwiE-dfHg832AhUHtKQKHXOIC0AQ_BJ6BAgjEAU" target="_blank" className = "line"><span> <AiOutlineEnvironment/> Beirut, Lebanon </span></a> <br/>
                        <a href = "mailto: GenshinImpact@hotmail.com" className = "line"> <span> <AiOutlineInbox/> GenshinImpact@hotmail.com </span></a> <br/>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <div className='second-column'>
                        <h4> Social Media </h4>
                        <a href="https://twitter.com/GenshinImpact" target="_blank" className="line"><span> <AiOutlineTwitter/> Twitter </span></a> <br/>
                        <a href="https://www.linkedin.com/GenshinImpact" target="_blank" className="line"> <span> <AiOutlineLinkedin/> LinkedIn </span></a> <br/>
                        <a href="https://www.facebook.com/GenshinImpact" target="_blank" className="line"><span> <AiOutlineFacebook/> Facebook </span></a> <br/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center mt-3">
                    <p className="copyright">@2022 GENSHIN IMPACT | All rights reserved</p>
                </div>
            </div>
      </div>
  )
}

export default Footer;