import React, { useState } from 'react';
import { auth } from '../../FirestoreConfig';
import { Form, Input,  Button } from "antd";
import { Link } from "react-router-dom";


export default function Register() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function register() {
        auth.createUserWithEmailAndPassword(email, password);
    }

    return (
        <Form  style={{width: 300, padding: '15px 35px'}}>
            <h1> Register</h1>
            <Input type="text" placeholder="Nombre" onChange={(e)=>setName(e.target.value)}/>
            <Input type="text" placeholder="Apellido" onChange={(e)=>setLastname(e.target.value)}/>
            <Input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <Input type="password" placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)}/>
            <Button type="button" onClick={register}>Register</Button>
            <Button> <Link to={`/login/`}>Cancel</Link></Button>       
             </Form>
    )
}