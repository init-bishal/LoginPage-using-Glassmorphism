import React from 'react'
import './LoginPage.css'
const LoginPage = () => {
  return (
    <div>
      <section>
            <div class='color'></div>
            <div class='color'></div>
            <div class='color'></div>
            <div class='box'>
                 <div class='box1'></div>
                 <div class='box2'></div>
                 <div class='box3'></div>
                 <div class='box4'></div>
                 <div class='box5'></div>
                <div class='container'>
                    <div class='form'>
                       <h2>Login form</h2>
                        <form>
                            <div class='inputbox'>
                                <input type="text" placeholder='Username' />
                            </div>
                            <div class='inputbox'>
                                <input type="password" placeholder='Password' />
                            </div>
                            <div class='inputbox'>
                                <input type="submit" value='Login' />
                            </div>
                            <p class='forget'>Forgot Password ? <a href="#">Click here</a></p>
                            <p class='forget'>Don't have an account <a href="#">Sign up</a></p>
                        </form>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default LoginPage

