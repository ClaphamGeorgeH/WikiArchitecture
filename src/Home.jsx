import React from 'react';
import { LoginForm } from './components/LoginForm';
import './HomeStyle.css';



export const Home = () => {
  return (
    <>
    <div className='container lg-home-header'>
      <div className='row'
            style={{ fontFamily: "Times New Roman"}}
      >
        <div className='col'>
          <h1 className='text-start p-3 display-1' 
              style={{
                textShadow: "10px 10px 7px #B3B3B3"
              }}
              >
            WIKIARCHITECTURE
          </h1>
          <h2 className='text-end p-3 display-3'
              style={{
                textShadow: "10px 10px 5px #B3B3B3"
              }}
          >
            a new way to learn about...
          </h2>
          <h2 className='text-start p-3 display-3'
              style={{
                textShadow: "10px 10px 5px #B3B3B3"
              }}
          >
            ...Architecture.
          </h2>
        </div>
      </div>
      <hr /> 
    </div>

    <div className='container sm-home-header'>
      <div className='row'>
        <div className='text-center col'>
              <h1 style={{fontSize: "100px"}}>
                WA
              </h1>
        </div>
      </div>
    </div>
    
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <h5>Try out our exclusive information by logging in!</h5>
          <LoginForm/>
        </div>
      </div>
    </div>
  </>

  )
}
