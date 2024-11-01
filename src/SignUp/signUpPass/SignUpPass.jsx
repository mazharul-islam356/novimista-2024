import { Checkbox, Input } from "@material-tailwind/react";
import signUpPass from '../../assets/password.png'
import { Link } from "react-router-dom";



const SignUpPass = () => {
    return (
        <div>
             <div className='h-screen bg-gradient-to-r from-[#e85d04] to-[#ffba08] lg:flex justify-evenly items-center gap-10'>
            <div>
            <img className='lg:w-80 mx-auto w-72' src={signUpPass} alt="" />
           </div>

           <div className='max-w-96 lg:w-[26rem] h-[27rem] rounded-xl bg-white flex flex-col justify-center items-center '>
           <div className='mb-10 '>
           <h1 className='font-semibold text-3xl mt-5 text-center'>Create account</h1>
           <h5 className='text-center text-sm'>Setup a password <br /> for
           secure your account</h5>
           </div>

        <div className='w-80 '>

       <div className="mx-auto flex flex-col justify-center items-center gap-3">
       <Input 
        name='password'
        type='password'
        required
        label='Password'
        size='lg'
        />
     <Input 
        name='confirmPassword'
        type='password'
        required
        label='Confirm Password'
        size='lg'

        />
       </div>
         <div className="flex justify-center items-center">
              
           <Checkbox
           
           
           />
           <p className="text-sm">By signing up, you agree to the <Link className="hover:text-blue-600 transition hover:underline ">Terms of Service and Privacy Policy.</Link></p>
         </div>

          <div >
        
          </div>
          
         <div className="grid place-items-center h-auto mt-2">
         <button className='bg-[#e85d04] text-white text-xs py-2 px-28 border border-transparent rounded-lg font-semibold tracking-wide uppercase mt-2 cursor-pointer'>Sign Up</button>
         </div>
        

        </div>
           </div>
           
        </div>
        </div>
    );
};

export default SignUpPass;