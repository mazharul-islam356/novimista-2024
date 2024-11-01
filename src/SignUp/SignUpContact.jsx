import { Input } from '@material-tailwind/react';
import signUpContact from '../assets/contact.png'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';



const SignUpContact = () => {
    return (
        <div className='h-screen bg-gradient-to-r from-[#e85d04] to-[#ffba08] lg:flex justify-evenly items-center gap-10'>
            <div>
            <img className='w-96 mt-5' src={signUpContact} alt="" />
           </div>

           <div className='max-w-96 lg:w-[26rem] h-[27rem] rounded-xl bg-white flex flex-col justify-center items-center '>

           <div className='mb-8'>
           <h1 className='font-semibold text-3xl mt-5 text-center'>Create account</h1>
           <h5 className='text-center text-sm'>Provide your <br /> contact information</h5>
           </div>

        <div className='w-[18.7rem] mx-auto flex flex-col justify-center items-center gap-3'>
        <Input 
           name='latitude '
           type='number'
           required
           label='Latitude '
           size='lg'
           />
        <Input 
           name='longitude '
           type='number'
           required
           label='Longitude '
           size='lg'
           />

          <div>
        <PhoneInput
        className=''
        country={'bd'} // Default country
         />
          </div>

         <div className=''>
         <Link className='mb-8 flex justify-center items-center' to='/otpPage'>
         <button className='bg-[#e85d04] text-white text-xs py-2 px-[8.2rem] border border-transparent rounded-lg font-semibold tracking-wide uppercase mt-2 cursor-pointer'>Next</button>
         </Link>
         </div>

        </div>
           </div>
           
        </div>
    );
};

export default SignUpContact;