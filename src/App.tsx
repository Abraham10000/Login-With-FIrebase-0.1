import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { SignUp } from './Components/SignUp';
import { UserAuthContextProvider } from "./Context/UserAuthContext";

function App() {
  return (
<>
  <UserAuthContextProvider>
    <Routes>
    <Route path='/home' element={
    <ProtectedRoute>
      <Home/>
    </ProtectedRoute>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  </UserAuthContextProvider>
</>
  );
}

export default App;
