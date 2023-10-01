import React from 'react'

export const LoginForm = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Login</h5>
        <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
          placeholder='Dont need to fill this gap to log in...'/>
        </div>
          <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
          placeholder='...Just click on "Submit" button!'/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    </div>
    
  )
}
