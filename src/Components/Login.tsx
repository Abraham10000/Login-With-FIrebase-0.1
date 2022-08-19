import "../App.css"
import Background from '../background/sky1.jpg';
import { Link,useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import { Alert } from 'react-bootstrap';

export function Login() {
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setError("");
      try {
          await logIn(email , password) ;
          navigate("/home");
      } catch (error : any) {
          setError(error.message)
      }
  }

  const handleGoogleSignIn = async (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    setError("");
    try {
        await googleSignIn(email , password) ;
        navigate("/home");
    } catch (error : any) {
        setError(error.message)
    }
  }

  const handleFacebookSignIn= async (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    setError("");
    try {
        await signInWithFacebook(email , password) ;
        navigate("/home");
    } catch (error : any) {
        setError(error.message)
    }
  }

  const handleGitSignIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    try {
        await githubSignIn(email , password) ;
        navigate("/home");
    } catch (error : any) {
        setError(error.message)
    }
  }

  const {logIn,googleSignIn ,signInWithFacebook, githubSignIn} = useUserAuth();
  
    return(
        <>
<div className="limiter">
	<div className="container-login100" style={{backgroundImage : `url(${Background})` }}>
		<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
			<form className="login100-form validate-form" onSubmit={handleSubmit}>
				<span className="login100-form-title p-b-49">
					Login
				</span>
        {error && <Alert variant='danger'>{error}</Alert>}
				<div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
					<span className="label-input100">Email</span>
					<input className="input100" type="text" name="username" placeholder="Type your username"
          onChange={(e) => setEmail(e.target.value)}            
          />
					<span className="focus-input100" data-symbol="&#xf206;"></span>
				</div>

				<div className="wrap-input100 validate-input" data-validate="Password is required">
					<span className="label-input100">Password</span>
					<input className="input100" type="password" name="pass" placeholder="Type your password"
          onChange={(e) => setPassword(e.target.value)}
          />
				  <span className="focus-input100" data-symbol="&#xf190;"></span>
				</div> <br />

				<div className="container-login100-form-btn">
					<div className="wrap-login100-form-btn">
						<div className="login100-form-bgbtn"></div>
						<button className="login100-form-btn" type="submit">
							Login
						</button>
				</div>
		</div>

		<div className="txt1 text-center p-t-54 p-b-20">
			<span>
				Or login with :
			</span>
		</div>

		<div className="flex-c-m">
			<a href="#" className="login100-social-item bg1"
        onClick={handleFacebookSignIn}>
			  <i className="fa fa-facebook"></i>
			</a>
			<a href="#" className="login100-social-item bg3"
      onClick={handleGitSignIn}>
				<i className="fa fa-github"></i>
			</a>

			<a href="#" className="login100-social-item bg2"
        onClick={handleGoogleSignIn}>
				<i className="fa fa-google"></i>
			</a>
    </div>
    <div style={{display : "flex",flexDirection : "column",textAlign : "center"}}>
			<span className="txt1 p-b-17">
				Don't have an account ? 
			</span>
      <a href="#" className="txt2" >
        <Link to="/signup">Sign Up</Link></a>
		</div>
	</form>
</div>
</div>
</div>
<div id="dropDownSelect1"></div>
        </>
    )
}