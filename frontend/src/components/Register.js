import { useState } from "react";
import api from "../apicall/api";

function Register() {
    // create state variables which hold name, email and password
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[message, setMessage] = useState('');

    // handle form submit
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await api.post("/users/register", {name, email, password});
            console.log("user is registered", res.data);
            setMessage("registration is successfull");
            // reset the form fields once we submit the form
            setName('');
            setEmail("");
            setPassword('')

        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="register">
            <h2>Registration Form</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type = "text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

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

export default Register

