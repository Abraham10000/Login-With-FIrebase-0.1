import Background from '../background/sky1.jpg';
import { Link,useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import { Alert } from 'react-bootstrap';

export function SignUp() {
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email , password) ;
            navigate("/");
        } catch (error : any) {
            setError(error.message)
        }
    }
    const handleGoogleSignUp = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setError("");
      try {
          await googleSignUp(email , password) ;
          navigate("/");
      } catch (error : any) {
          setError(error.message)
      }
  }

  const handleFacebookSignUp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    try {
        await signInWithFacebook(email , password) ;
        navigate("/");
    } catch (error : any) {
        setError(error.message)
    }
}

const handleGitSignUp = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  setError("");
  try {
      await githubSignUp(email , password) ;
      navigate("/");
  } catch (error : any) {
      setError(error.message)
  }
}

    const {signUp , googleSignUp , signInWithFacebook , githubSignUp} = useUserAuth();
    return (
        <>
 <div className="limiter">
	<div className="container-login100" style={{backgroundImage : `url(${Background})` }}>
		<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
			<form className="login100-form validate-form" onSubmit={handleSubmit}>
				<span className="login100-form-title p-b-49">
					Sign Up
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
							Sign Up
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
        onClick={handleFacebookSignUp}>
			  <i className="fa fa-facebook"></i>
			</a>
			<a href="#" className="login100-social-item bg3"
      onClick={handleGitSignUp}>
				<i className="fa fa-github"></i>
			</a>

			<a href="#" className="login100-social-item bg2"
        onClick={handleGoogleSignUp}>
				<i className="fa fa-google"></i>
			</a>
    </div>
    <div style={{display : "flex",flexDirection : "column",textAlign : "center"}}>
			<span className="txt1 p-b-17">
				Already have an account ? 
			</span>
      <a href="#" className="txt2" >
        <Link to="/">Login</Link></a>
		</div>
	</form>
</div>
</div>
</div>
<div id="dropDownSelect1"></div>              
</>
    )
}