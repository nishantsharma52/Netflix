import React from 'react'
import Header from './Header'

function Login() {
  return (
    <div>
      <Header />
      <div>
        <img className='w-[100vw] h-[100vh]' src='https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp' alt='banner' />
      </div>
      <form>
        <div>
          <label>Full Name</label>
          <input/>
        </div>
      </form>
    </div>
  )
}

export default Login
