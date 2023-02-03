import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Login from './Login ';
import { useState } from 'react';
import './Login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
// import Button from '@material-ui/core/Button';
function Navbar()
{   
    const [state,newstate] = useState(false);
    // let m = document.getElementByName('bigdiv').style.opacity;

    const login=()=>{
        newstate(true);
        
    } 
    const cancel=()=>{
        newstate(false);
    }

    return(
        <div className='bigdiv'>
            <div className='main_div'>
            <h4 className="logo">Bigshow</h4>
            <input className="searcharea" type="text" placeholder='Search'/>   
             <SearchIcon className="searchicon"/>
            <a href="#" className="navlinks">Home</a> 
            <a href="#" className="navlinks">Categories</a> 
            <a href="#" className="navlinks">Contact</a> 
            <Button className="navbutton" onClick={login}>Login</Button>
            <Button className="navbutton"><AddShoppingCartIcon className='cart'/>Cart</Button>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique facilis culpa
                 nisi eligendi! Pariatur consequuntur saepe debitis, rerum vitae a delectus 
                 beatae neque aperiam, dolore ut dolor iusto iure natus!</p>
            {/* <Login className="login"/> */}
            {state? <div className="login_div">
                <div className='login1stdiv'>
                    <h1>Login</h1>
                    <h4>Get access to your Orders, Wishlist and Recommendations</h4>
                </div>
                <div className='login2nddiv'>
                 
                <Box><TextField  id="standard-multiline-flexible" label="Name" 
                 multiline maxRows={4} variant="standard"/></Box>
                <Box><TextField  id="standard-multiline-flexible" label="Enter Mobile no./E-mail" 
                 multiline maxRows={4} variant="standard"/></Box>
                 <p>By continuing, you agree to Bigshow's Terms of Use and Privacy Policy.</p>
                 <Button className='otpbutton'>Send Otp</Button>
                </div>
                <div className="closeicondiv"><CloseIcon className='closeicon' onClick={cancel}/></div>  
            </div>:""}
         </div>
        
    );
}
  
 export default Navbar;