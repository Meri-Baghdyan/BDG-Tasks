import './App.css';
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <div className='auth-wrapper'>
      <Login/>
      <SignUp/>
    </div>
  );
}

export default App;
