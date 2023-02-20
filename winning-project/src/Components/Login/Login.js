import React from 'react';
import Audio from "../../Assets/audio/Genshin-Impact-Theme.mp3";
import './Login.css';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import useForm from './useForm';
import validate from './validateInfo';

const Login = () => {
  const {handleChange, values, handleSubmit, errors} = useForm(validate);
  return (
    <div className='background-div'> 
      <div className="all-page">
        <form className='form' onSubmit={handleSubmit}>
          <div class="card">
            <ul class="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                <li class="nav-item text-center try"> 
                  <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a> 
                </li>
                <li class="nav-item text-center try"> 
                  <a class="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a> 
                </li>
            </ul>
            <div className="tab-content" >
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> 
                <h4 className='default-cursor Login-page'>Account Log In</h4> 
                <div class="form px-4 pt-5"> 
                  <div><input type="email" class="form-control" placeholder="Email"/>
                  {errors.email && <p className='errors'>{errors.email}</p>}</div>
                  <div><input type="password" class="form-control" placeholder="Password"/>{errors.password && <p className='errors'>{errors.password}</p>}</div>
                  {errors.email && errors.password ? <Link to = "/GenshinImpact"><button class="btn btn-dark btn-block">Login</button></Link> : <button class="btn btn-dark btn-block" type="submit">Login</button>}
                  <div className='forget'><a href="#">Forgot Password?</a></div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <h4 className='default-cursor'>Account Sign Up</h4> 
                <div class="form px-4"> 
                  <div><input type="email" name="email" class="form-control" placeholder="Email" value={values.email} onChange={handleChange}/>
                  {errors.email && <p className='errors'>{errors.email}</p>}</div>
                  <input type="password" name="password" class="form-control" placeholder="Password" value={values.password} onChange={handleChange}/> 
                  {errors.password && <p className='errors'>{errors.password}</p>}
                  <input type="password" name="password2" class="form-control" placeholder="Confirm Password" value={values.password2} onChange={handleChange}/>
                  {errors.password2 && <p className='errors'>{errors.password2}</p>}
                  {errors.email && errors.password && errors.password2 ? <Link to = "/GenshinImpact"><button class="btn btn-dark btn-block">Signup</button></Link> : <button class="btn btn-dark btn-block" type="submit">Signup</button>}
                </div>
              </div>
            </div>
            <ReactAudioPlayer src={Audio} autoPlay={true} loop={true}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
