import React from "react"

export class login extends React.Component {
    return() {
        return (
            <select>
            <div className="center_div">
            <div className="login-container">
                    <form class="login-form">
                        <label>E-mail</label>
                        <input type="email" name="email"/>
                        <label>Password</label>
                        <input type="password" name="password" />
                        <button>SIGN IN</button>
                    </form>
                    <p>Or if you don't have an account, <a href="#">Register.</a></p>
           </div>
        </div>
    </select>
        )
    }
}