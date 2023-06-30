import React from 'react'
import "./login.css"
import Footer from "../components/Footer"


export default function Login() {
    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            value: ""
        }
    )
    function handleChange(event) {

        const {name, value} = event.target
        setFormData(prevData => (
            {
                ...prevData,
                [name] : value
            }
        ))
        console.log(formData)
    }
    function handleSubmit(event) {
        event.preventDefault()
        alert("You have successfully logged in!")
    }
    return (
        <div>
            <section className='login--page'>
                <article>
                    <h3>Welcome to</h3>
                    <h1><strong>My Blog</strong></h1>
                </article>
                <div className='login--section'>
                    <h1>Sign up</h1>
                    <form className="login--form" onSubmit={handleSubmit}>
                    <div className="login--email">
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="johndoe@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="********" 
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='confirm--password'>
                        <label htmlFor="password">Confirm password: </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="********" 
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button>Sign up</button>
                </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}