import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        name:'', username:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2 className="login-head">Register</h2>
                <p className='warning'>Username and password are case sensitive</p>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="username" name="username" required
                placeholder="Username" value={user.username} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register