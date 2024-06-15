import {SyntheticEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [forward, setRedirect] = useState(false);
    const navigate = useNavigate();
    //const {currentUser, setCurrentUser} = useContext(UserContext);

    // if (currentUser !== null) {
    //     return <p>You logged in as {currentUser.firstName}.</p>;
    // }

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3456/auth/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });
        setRedirect(true);
        const data = await response.json();

        // save access token (jwt) to local storage
        localStorage.setItem('accessToken', data.accessToken);
        //setCurrentUser(data.user);
    }

    if (forward) {
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            </form>
        </div>
    );
};

export default Login;