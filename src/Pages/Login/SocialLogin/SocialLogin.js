import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate= useNavigate();

    let errorMsg;
    if (error || error1) {
        errorMsg=<p className='text-danger'>Error: {error?.message} {error1?.message}</p>
     
      }
      if (user || user1){
          navigate('/');
      }
const handleGoogleSignIn=()=>{
    signInWithGoogle();
}
const handleGithubSignIn=()=>{
    signInWithGithub();
}

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p>{errorMsg}</p>

            <div>
            <button onClick={handleGoogleSignIn} className='btn btn-warning w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" /> <span>Google Sign In</span>
            </button>
            </div>
            <div>
            <button  className='btn btn-warning w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={facebook} alt="" /> <span>Facebook Login</span>
            </button>
            </div>
            <div>
            <button onClick={handleGithubSignIn} className='btn btn-warning w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={github} alt="" /> <span>Github Sign In</span>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;