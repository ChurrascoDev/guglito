import React, { useState } from 'react';
import { auth } from "../../FirestoreConfig";
import { Link, useHistory } from "react-router-dom";
import { Form, Input,  Button } from "antd";


export default function Login() {
    const [user, setUser] =  useState ('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    
    const history = useHistory();


    function login(){
        auth.signInWithEmailAndPassword(user, password).then(() => {
            setUser('');
            setPassword('');
            setError('');
            history.push('/');
        }).catch(err => {
            setError();
        });
        }
 
    return (
        <Form  style={{width: 300, padding: '15px 35px'}}>
            <h1>Log In</h1>
            {error ? <h4>{error}</h4> : ''}
            <Input type="text" placeholder="Usuario" required onChange={(e)=>setUser(e.target.value)}/>
            <Input type="password" placeholder="Contraseña" required onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={login}>signin</Button>
            <Button> <Link to={`/register/`}>Registrar</Link></Button>
        </Form>
    )
}

