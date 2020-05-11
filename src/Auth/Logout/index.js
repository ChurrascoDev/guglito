import React from "react";
import { auth } from '../../FirestoreConfig';
import { useHistory } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";


const Logout = () => {

  const history = useHistory();

  function signOut(props) {
    auth.signOut().then(function () {
      // Sign-out successful.
      //console.log('deslogueado')
      history.push('/auth/login');
    }).catch(function (error) {
      // An error happened.
    });

  }
  return (
    <Button onClick={() => signOut()}> Logout <LogoutOutlined /> </Button>
  )
}

export default Logout;