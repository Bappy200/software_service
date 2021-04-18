import React, { useContext } from 'react'
import loginImg from '../../images/login.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Share/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './confige';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

function Login() {
    const [loginUser, setLoginUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handlerGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                setLoginUser(user)
                console.log(loginUser)
                history.replace(from)
                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }
    return (
        <>
            <Navbar></Navbar>
            <section>
                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid' src={loginImg} alt="" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <button onClick={handlerGoogle} className='brnad-button'><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>   Continue With Google</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
