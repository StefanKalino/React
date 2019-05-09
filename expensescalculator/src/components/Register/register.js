import React from "react"

export class Register extends React.Component {
    render() {
        return(
            <select>
             <div className="center_div">
        <div className="login-container margin_top">
            <form className="login-form">
                <label for="">First Name</label>
                <input type="text" name="firstName" />
                <label for="">Last Name</label>
                <input type="text" name="lastName" />
                <label for="">E-mail</label>
                <input type="email" name="email" />
                <label for="">Date Of Birth</label>
                <input type="date" name="dateOfBirth" />
                <label for="">Telephone</label>
                <input type="number" name="telephone" />
                <label for="">Country</label>
                <input type="text" name="country" />
                <label for="">Password</label>
                <input type="password" name="password" />
                <button>REGISTER</button>
            </form>
            <p>Or if you already have an account,
                <a href="#">Sign in.</a>
            </p>
             </div>
          </div>
     </select>
        )
    }
}