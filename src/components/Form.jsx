import React from "react"
import "../pages/login.css"

export default function Form() {
    return (
        <div>
            <form className="login--form">
                <div className="login--email">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" placeholder="johndoe@gmail.com"/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" placeholder="********" />
                </div>
                <button>Log in</button>
            </form>
        </div>
    )
}