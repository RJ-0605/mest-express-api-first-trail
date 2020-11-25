import React, { useState } from 'react';
import Container from '../component/Container';
import Nav from '../component/Navbar';
import Footer from '../component/Footer';
import  { login } from '../controllers/user_controller';
import { useHistory } from 'react-router-dom';

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleLogin(e) {
    e.preventDefault(); 
    if(login(username, password)) {
      history.goBack()
    }
  }

  return(
    <>
      <Nav />
      <Container style={{height:"auto"}}>
        <form className="my-5 py-5" style={{ maxWidth: "600px", margin: "auto" }}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" aria-describedby="emailHelp" value={username} onChange={(e) => setUsername(e.target.value)} />
            <small className="form-text text-muted">Only admins can sign in.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn btn-primary" onClick={ handleLogin }>Login</button>
        </form>
      </Container>
      <Footer />
    </>
  )

}