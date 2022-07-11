import React,{useState,useContext} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {ProductsContext,actions } from '../store'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {AiFillGoogleSquare} from 'react-icons/ai'
import Alert from 'react-bootstrap/Alert'
import {Navigate } from 'react-router-dom'
const LoginFrom = () => {
    const [state,dispatch] = useContext(ProductsContext);
    const [signUp, login] = useState(false)
    const [loginValid,isLoginValid] = useState(false)
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [inputEmail,setInputEmail] = useState("")
    const [inputPassword,setInputPassword] = useState("")
    const [LoginMessage, setLoginMessage] = useState("")
   const [account,setAccount] = useState({           
   })

   const handleSubmit = (e) =>{
       e.preventDefault()
       var emailValid = false;
       var email = account.email;
       var password = account.password;
       if(email.length === 0){
        setEmailError("Email is required");
        }
        else if(email.length < 6){
        setEmailError("Email should be minimum 6 characters");
        }
        else if(email.indexOf(' ') >= 0){
        setEmailError('Email cannot contain spaces');
        }
        else{
        setEmailError("")
        emailValid = true
        }
        var passwordValid = false;
            if(password.length === 0){
            setPasswordError("Password is required");
            }
            else if(password.length < 6){
            setPasswordError("Password should be minimum 6 characters");
            }
            else if(password.indexOf(' ') >= 0){
            setPasswordError('Password cannot contain spaces');
            }
            else{
            setPasswordError("")
            passwordValid = true
            }
            if(emailValid && passwordValid){
                dispatch(actions.addNewAccount(account))
                email=''
                password=''
                login(false)
            }
            }
    const handleCheckLogin = (e) =>{
        e.preventDefault();
        var userName = undefined;
        var checkResult =  state.accountList.some((account) =>
        {
            let AccountArray = Object.values(account);
            if(AccountArray.includes(inputEmail) && AccountArray.includes(inputPassword))
            {
                userName = account.name
            }
            return AccountArray.includes(inputEmail) && AccountArray.includes(inputPassword)
        }
    )
       if(checkResult){
        isLoginValid(true)
           dispatch(actions.isValidLogin({
               valid:true,
               userName:userName
           }))
       }
       else{
        setLoginMessage('Incorrect password or email')
        setInputPassword('')
    }
    } 
   return (
       <div>
    {loginValid ? <Navigate to="/" /> : 
            <Container >
            <Header />
            <div className=" d-flex align-items-center justify-content-center flex-column my-0 mx-auto mt-5 w-50">
                    <div className="border-bottom border-secondary d-block text-center">
                    <h1 className='fs-4'>Login</h1>
                    <h1 className="cursor-pointer text-center  border fs-4 fw-normal mb-5 mt-5 rounded px-5 py-2"><AiFillGoogleSquare color="green" size={25}/>Log with Google </h1>
                    </div>
                    {signUp ? 
                    // SignUp
                     <div>
                     <form className="border-bottom border-secondary d-block" onSubmit={handleSubmit} >
                         <label className="fw-bold fs-5 mt-5 mb-2 d-block" for="name">Name</label>
                         <input value={account.name} type="text" required onChange={(e)=> setAccount(prev=>{
                             return {...prev,name:e.target.value}
                         })} className="d-block fs-5 px-5 form-control rounded mb-3 border p-1 " type="text"  name="name" id="name" />
                         <label className="fw-bold fs-5 mt-5 mb-2 d-block" for="email">Email</label>
                         <input value={account.email} required  onChange={(e)=> setAccount(prev=>{
                             return {...prev,email:e.target.value}
                         })} className="d-block fs-5 px-5 form-control rounded mb-3 border p-1 "placeholder="example@mail.com" type="email" name="email" id="email" />
                         {emailError.length > 0 &&
                            <Alert variant="danger">{emailError}</Alert>}
                         <label className="fw-bold fs-5 mb-2" for="password">Password</label>
                         <input required value={account.password} required onChange={(e)=> setAccount(prev=>{
                             return {...prev,password:e.target.value}
                         })} className="d-block fs-5 px-5 rounded form-control  mb-5 border p-1 " type="password" name="password" id="password" />
                         <input required type="checkbox" name="remember" id="remember" className="me-3 mb-3" />
                             {passwordError.length > 0 &&
                                 <Alert variant="danger">{passwordError}</Alert>}
                         <label for="remember" > I agree with <u>Terms</u> and <u>Privacy Policy</u></label>
                         <Button className="d-block fs-4 form-control mt-3 mb-3 border" type="submit" >Sign Up</Button>
                     </form>
                     <div>
                         <p className="mt-3 fs-6 text-muted">Already have an account?</p>
                         <h2 className="fs-5 text-info text-center mb-3 cursor-pointer" onClick={()=> login(false)} >Log in</h2>
                     </div>
                     </div> 
                    //  Sign Up
                    : 
                    // Login
                    <div >
                            <form className="border-bottom border-secondary d-block" onSubmit={handleCheckLogin}>
                                <label className="fw-bold fs-5 mt-5 mb-2 d-block" for="email">Email</label>
                                <input required value={inputEmail} onChange={(e)=> setInputEmail(e.target.value)}  className="d-block fs-5 px-5 form-control rounded mb-3 border p-1 " type="email" name="email" id="email" />
                                <label className="fw-bold fs-5 mb-2" for="password">Password</label>
                                <input required value={inputPassword} onChange={(e)=> setInputPassword(e.target.value)} className="d-block fs-5 px-5 rounded form-control  mb-5 border p-1 " type="password" name="password" id="password" />
                                {LoginMessage.length > 0 &&
                                    <Alert variant="danger">{LoginMessage} !</Alert>
                                }
                                <input  type="checkbox" name="remember" id="remember" className="me-3 mb-3" />
                                <label for="remember" > Remember me</label>
                                <Button type="submit" className="d-block fs-4 form-control mb-3 border " >Login</Button>
                                <h2 className="fs-5 text-info text-center mb-3 cursor-pointer">Forgot Password</h2>
                            </form>
                            <div>
                                <p className="mt-3 fs-6 text-muted">Don't have an account?</p>
                                <h2 className="fs-5 text-info text-center mb-3 cursor-pointer" onClick={()=> login(true)} >Sign up</h2>
                            </div>
                            </div> }
                            Login
                </div>
            <Footer/>
            </Container> 
        }
       </div>

    )
}

export default LoginFrom
