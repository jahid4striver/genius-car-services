import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree]= useState(false);


    const [createUserWithEmailAndPassword,
        user,
        loading,
        error,] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

        const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigateLogin = () => {
        navigate('/login')
    }
    if(loading || updating){
        return <Loading></Loading>
    }


    if(user){
        console.log(user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree= event.target.terms.checked;

        // if(agree){
        //     createUserWithEmailAndPassword(email, password);
        // }
        
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName: name});

    navigate('/home');
        

        
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' />

                <input type="password" name="password" id="" placeholder='Password' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditon</label> */}
                <label className={`ps-2 ${agree? '': 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditon</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary my-2' type="submit" value="Register" />
            </form>
            <p>Already Have an Account <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;