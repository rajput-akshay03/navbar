import './Login.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
function Login(props){
        return(
            <div className="login_div">
                <div className='login1stdiv'>
                    <h1>Login</h1>
                    <h4>Get access to your Orders, Wishlist and Recommendations</h4>
                </div>
                <div className='login2nddiv'>
                <Box><TextField  id="standard-multiline-flexible" label="Enter Mobile no./E-mail" 
                 multiline maxRows={4} variant="standard"/></Box>
                 <p>By continuing, you agree to Bigshow's Terms of Use and Privacy Policy.</p>
                 <Button className='otpbutton'>Send Otp</Button>
                </div>
            </div>
        );

}
export default Login