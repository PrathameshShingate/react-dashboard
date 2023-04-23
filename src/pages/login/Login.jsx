import { useContext, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.css"


const Login = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch } = useContext(AuthContext);
  
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        // ...
        if (error === true) {
          setError(false);
        }
        setSuccess(true);

        navigate("/home");
      })
      .catch((error) => {
        console.log(error);

        if (success === true) {
          setSuccess(false);
        }
        setError(true);
      });
  }

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {success && <span className="success">login sucessful!</span>}
        {error && <span className="error">Wrong email or password!</span>}
      </form>
    </div>
  );
}

export default Login
