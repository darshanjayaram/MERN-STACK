import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../apicall/api";

function Login() {
    // create state variables which hold name, email and password
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');
    const navigate = useNavigate();

    // handle form submit
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await api.post("/users/login", {email, password});
            console.log("user is logged", res.data);
            setMessage("Login is successfull");
            navigate('/home')

        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="Login">
            <h2>Login Form</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
            
                <div>
                    <label>Email:</label>
                    <input type = "email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div>
                    <label>Password:</label>
                    <input type = "password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type = "submit">Register</button>
            </form>
        </div>
    )

}

export default Login

