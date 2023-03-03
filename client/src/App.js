import React, { useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Footers, Headers } from './components';
import Router from './config/router';
import { UserContext } from './context/userContext';
import { API, setAuthToken } from './config/api/api';
import { useNavigate } from 'react-router-dom';

function App() {
  const [state, dispatch] = useContext(UserContext)
  const navigate = useNavigate()


  useEffect(() => {


    if (state.isLogin === false) {
      navigate('/')
    } else {
      if (state.user.role === 'Admin') {
        navigate('/list-companies')
      } else if (state.user.role === 'Customer') {
        navigate('/')
      }
    }
  }, [state])


  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
      checkAuth()

    }

  }, [])

  const checkAuth = async () => {
    try {
      const response = await API.get('/check-auth')
      let payload = response.data.data

      payload.token = localStorage.token
      dispatch({
        type: 'AUTH_SUCCESS',
        payload,
      })
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR'
      })
      console.log("check user failed", error)
    }
  }
  return (
    <>
      <Headers />
      <Router />
      <Footers />

    </>

  );
}

export default App;
