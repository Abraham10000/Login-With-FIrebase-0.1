import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { useUserAuth } from '../Context/UserAuthContext';
import './Home.css'
import Lottie from "lottie-react";
import dino from '../dino.json'
import BackgroundSky from '../background/sky1.jpg'
import BackgroundMountain from '../background/m.png'
import BackgroundGrass from '../background/gh.png'
import { Navigate,useNavigate } from 'react-router-dom';


export function Home() {
    const {user,logOut} = useUserAuth();
    const handleLogout = async () => {
        try {
            await logOut();
        } catch (error : any) {
            console.log(error.message);
            
        }
    }

    return(
        <div className="App">
      <div className="sky" style={{backgroundImage : `url(${BackgroundSky})`}}>
      <ButtonToolbar>
        <Button variant="warning" size='lg' active
            onClick={handleLogout}
            style={{marginTop : "10px",position : "absolute",right : "0", marginRight : "5px"}}>
            Lougout</Button>
        </ButtonToolbar>
        <h1 className="title">Welcome Home</h1>
        <h5>{user && user.email}</h5>
        <div className="dino">
          <Lottie animationData={dino} style={{ height: "auto", width: 800 }} />
        </div>
        <div className="mountain" style={{backgroundImage : `url(${BackgroundMountain})`}}></div>
        <div className="grass" style={{backgroundImage : `url(${BackgroundGrass})`}}></div>
      </div>
    </div>
    )
}