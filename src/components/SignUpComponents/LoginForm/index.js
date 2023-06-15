import React, { useState } from 'react'
import InputComponent from '../../Common/Input';
import Button from '../../Common/Button';

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log('Handling Login')
    }


    return (
        <>
            <InputComponent
                state={email}
                setState={setEmail}
                placeholder="Email"
                type="email"
                required={true}
            />
            <InputComponent
                state={password}
                setState={setPassword}
                placeholder="Password"
                type="password"
                required={true}
            />
            <Button text={"Login"} onClick={handleLogin} />
        </>
    )
}

export default LoginForm



