import { Input } from '@material-tailwind/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signIn.css'
import signUp from '../../assets/sign-up.png'
import signIn2 from '../../assets/login2.png'
import { FaSignInAlt } from 'react-icons/fa';
import { MdOutlineAssignmentInd } from 'react-icons/md';


const SignIn = () => {
    const [isActive, setIsActive] = useState(false); 

    const handleSignUpClick = () => {
        setIsActive(true);
      };
      const handleSignInClick = () => {
        setIsActive(false);
      };

    return (
        <div className='flex flex-col h-screen justify-center'>
             <div className='my-0'>
            <div className='lg:flex items-center justify-center'>
             <div className={isActive ? 'active' : ''} id="container">


<div className="form-container bg-black sign-up">
            <form >
                <h1 className='font-semibold text-3xl mb-3'>Create Account</h1>
               

                <div className='w-72 mt-3'>
                <Input name='name' size="lg" label="Company Name" />
                </div>
                
            
                
                
                <div className='w-72 mt-3'>
                <Input name='email' size="lg" type='email' label="Email" />
                </div>
                
                     
               
                
                <Link to='/signUpContact'>
                <button className='buttons'>Next</button>
                </Link>
                
            </form>
        </div>


             <div className="form-container sign-in">


            <form >

            <h1 className='font-semibold text-3xl'>Sign In</h1>
             
             
             <div className='w-72 mt-3'>
             <Input name='email' size="lg" type='email' label="Email" />
             </div>
             <div className='w-72 mt-4'>
             <Input name='pass' size="lg" type='password' label="Password" />
             </div>
             <Link>
                <div className='text-blue-800 text-start text-sm mb-'>Forget Your Password?</div>
                </Link>
             <button className='buttons'>Sign In</button>

            <Link to='dashBoard/adminDashBoard'>
            <button className='buttons'>Dashboard</button>
            </Link>

            </form>
        
     </div>



       

        <div className="toggle-container bg-black">
            <div className="toggle h-screen bg-gradient-to-r from-[#ffba08] via-[#e85d04] to-[#ffba08]">
                <div className="toggle-panel toggle-left">
                <img className='lg:w-[22rem] w-36' src={signUp} alt="" />
                    <button onClick={handleSignInClick}
                    className="hiddenn-btn flex items-center justify-center gap-2" id="login" >Sign In
                    <FaSignInAlt className='text-md' />
                    </button>
                </div>
                <div className="toggle-panel toggle-right">
                    <img className='lg:w-96 w-36'src={signIn2} alt="" />
                    
                    <button 
                    onClick={handleSignUpClick}className="hiddenn-btn flex items-center gap-1 lg:gap-2" id="register">Sign Up
                    <MdOutlineAssignmentInd className='text-sm lg:text-xl' />
                    </button>
                </div>
            </div>
        </div>
    </div>
        </div>
        </div>
        </div>


    );
};

export default SignIn;