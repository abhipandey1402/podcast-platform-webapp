import Header from '../components/Common/Header';
import { useState } from 'react';
import SignupForm from '../components/SignUpComponents/SignupForm';
import LoginForm from '../components/SignUpComponents/LoginForm';

const SignUpPage = () => {

  const [flag, setFlag] = useState(false);


  return (
    <div>
      <Header />
      <div className='inputWrapper'>
        {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
        {!flag ? <SignupForm /> : <LoginForm />}
        {!flag ? (
          <p onClick={() => setFlag(!flag)} style={{ cursor: 'pointer' }}>Already have an Account. Click here to Login.</p>
        ) : (
          <p onClick={() => setFlag(!flag)} style={{ cursor: 'pointer' }}>Don't have an account? Click here to Signup.</p>
        )}
      </div>
    </div>
  )
}

export default SignUpPage


