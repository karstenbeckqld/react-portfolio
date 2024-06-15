import React, {SyntheticEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";

const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accessLevel, setAccessLevel] = useState('');
    const [forward, setRedirect] = useState(false);
    const navigate = useNavigate();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:3456/user/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                accessLevel
            })
        });

        setRedirect(true);
    }

    if (forward) {
        navigate('/login');
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <div className="form-floating">
                <input type="text" className="form-control" id="floatingName"
                       onChange={e => setFirstName(e.target.value)} /> <label htmlFor="floatingName">First Name</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingName"
                       onChange={e => setLastName(e.target.value)} /> <label htmlFor="floatingName">Last Name</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput"
                       onChange={e => setEmail(e.target.value)} /> <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword"
                       onChange={e => setPassword(e.target.value)} /> <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingName"
                       onChange={e => setAccessLevel(e.target.value)} /> <label htmlFor="floatingName">Access Level</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
        </form>
    );
};

export default Register;