import React from 'react';
import "./Card.css";
import ayaka from "../../Assets/img/card/ayaka2.png";
import ayakaf from "../../Assets/img/card/ayakaf.png";
import xiao from "../../Assets/img/card/xiao.jpg";
import xiaof from "../../Assets/img/card/xiaof.webp";
import yoimiya from "../../Assets/img/card/yoimiya.jpg";
import yoimiyaf from "../../Assets/img/card/yoimiyaf.webp";
import childe from "../../Assets/img/card/childe.png";
import childef from "../../Assets/img/card/childef.jpg";
import yae from "../../Assets/img/card/yae.jpg";
import yaef from "../../Assets/img/card/yaef.webp";
import albedo from "../../Assets/img/card/albedo.jpg";
import albedof from "../../Assets/img/card/albedof.jpg";

function Card() {
    return (
        <div className='characters-card container' id="cards">
            <div class="seven">
				<h1>Characters</h1>
			</div>
            <div className='row'>
                <div className="col-md-4">
                    <div className='Card'>
                        <div className='upper-container'>
                            <div className='image-container'>
                                <img className="icon" src={ayaka} alt="kamisato ayaka" height="100px" width="100px"/>
                                <img className='background' src={ayakaf}/>
                            </div>
                        </div>
                        <div className='lower-container'>
                            <h3 className='ayaka'> Kamisato Ayaka </h3>
                            <h4 className='cryo'> Cryo Vision Holder </h4>
                            <p> She is the oldest daughter of the Kamisato Clan and younger sister of Kamisato Ayato. Because of her social status, Ayaka is seen as a model of perfection. </p>
                            <a href="https://www.youtube.com/watch?v=5RCsr1Y8UZA" target="_blank"><button className='char-btn yaya'>Character Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='Card'>
                        <div className='upper-container'>
                            <div className='image-container'>
                                <img className="icon" src={xiao} alt="kaedahara kazuha" height="100px" width="100px"/>
                                <img className='background' src={xiaof}/>
                            </div>
                        </div>
                        <div className='lower-container'>
                            <h3 className='xiao'> Adeptus Xiao </h3>
                            <h4  className='anemo'> Anemo Vision Holder </h4>
                            <p>He is the only known remaining member of the five foremost Yakshas. A group of Adepti dispatched by the Geo Archon to defeat demonic spirits. </p>
                            <a href="https://www.youtube.com/watch?v=sjozpa9DsZU" target="_blank"><button className='char-btn xiaoxiao'>Character Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='Card'>
                        <div className='upper-container'>
                            <div className='image-container'>
                                <img className="icon" src={yoimiya} alt="yoimiya" height="100px" width="100px"/>
                                <img className='background' src={yoimiyaf}/>
                            </div>
                        </div>
                        <div className='lower-container'>
                            <h3 className='yoimiya'> Yoimiya </h3>
                            <h4 className='pyro'> Pyro Vision Holder </h4>
                            <p>She is the current owner of Naganohara Fireworks. Yoimiya is loved by everyone on Narukami Island, as they believe summer is not the same without her. </p>
                            <a href="https://www.youtube.com/watch?v=dn8etqEPtFg" target="_blank"><button className='char-btn yoiy'>Character Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-4">
                    <div className='Card'>
                        <div className='upper-container'>
                            <div className='image-container'>
                                <img className="icon" src={childe} alt="childe" height="100px" width="100px"/>
                                <img className='background' src={childef}/>
                            </div>
                        </div>
                        <div className='lower-container'>
                            <h3 className='childe'> Tartaglia </h3>
                            <h4 className='hydro'> Hydro Vision Holder </h4>
                            <p> Tartaglia, also known by his alias "Childe", is the eleventh of the Fatui Harbingers. Despite being the youngest, he is always the most eager for a challenge.</p>
                            <a href="https://www.youtube.com/watch?v=3f2-EANyrNM" target="_blank"><button className='char-btn tartag'>Character Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='Card'>
                        <div className='upper-container'>
                            <div className='image-container'>
                                <img className="icon" src={yae} alt="yae" height="100px" width="100px"/>
                                <img className='background' src={yaef}/>
                            </div>
                        </div>
                        <div className='lower-container'>
                            <h3 className='yae'> Yae Miko </h3>
                            <h4  className='electro'> Electro Vision Holder </h4>
                            <p>Yae Miko, usually referred to as Guuji Yae by the Inazuman people, is the head of the Grand Narukami Shrine and the owner of the Yae Publishing House.</p>
                            <a href="https://www.youtube.com/watch?v=4yFiBhNIWYo" target="_blank"><button className='char-btn miko'>Character Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='Card'>
                        <div className='upper-container'>
                            <div className='image-container'>
                                <img className="icon" src={albedo} alt="albedo" height="100px" width="100px"/>
                                <img className='background' src={albedof}/>
                            </div>
                        </div>
                        <div className='lower-container'>
                            <h3 className='albedo'> Albedo </h3>
                            <h4 className='geo'> Geo Vision Holder </h4>
                            <p>Nicknamed as the Chalk Prince, the mysterious Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius. </p>
                            <a href="https://www.youtube.com/watch?v=A3U51KyZLxE" target="_blank"><button className='char-btn chalk'>Character Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card