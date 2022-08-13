import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useUserAuth } from '../Context/UserAuthContext';

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
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../background/sanstitre.png" />
                    <Card.Body>
                        <Card.Title>Hello Welcome :</Card.Title>
                        <Card.Text>
                            {user && user.email}
                        </Card.Text>
                        <Button variant="primary" onClick={handleLogout}>Logout</Button>
                    </Card.Body>
            </Card>
        </div>
    )
}