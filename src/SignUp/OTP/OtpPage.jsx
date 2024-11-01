import { Link } from "react-router-dom";
import './otp.css'
import { useEffect, useRef } from "react";

const OtpPage = () => {
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current.forEach((input, index) => {
          input.addEventListener('input', (e) => {
            if (e.target.value.length > 1) {
              e.target.value = e.target.value.slice(0, 1);
            }
            if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
              inputRefs.current[index + 1].focus();
            }
          });
    
          input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
              inputRefs.current[index - 1].focus();
            }
            if (e.key === 'e') {
              e.preventDefault();
            }
          });
        });
    

        // return () => {
        //   inputRefs.current.forEach((input) => {
        //     input.removeEventListener('input', () => {});
        //     input.removeEventListener('keydown', () => {});
        //   });
        // };
      }
      , []);

      
    
    return (
        <div>
            <div className='h-screen bg-gradient-to-r from-[#e85d04] to-[#ffba08] lg:flex justify-center items-center'>

           <div className='lg:w-[32em] h-[35rem] rounded-xl bg-white flex flex-col justify-center items-center'>
           <iframe src="https://lottie.host/embed/1cc4ab65-a92b-40f8-9e50-96cf9803a839/oUnjjKdfWg.json"></iframe>
           <div className='mb-10'>
           <h1 className='font-semibold text-3xl text-center mb-5'>OTP Verification</h1>
           <div className="flex flex-col justify-center">
           <h5 className='text-center text-sm'>Enter the 4-digit  Verification code we sent to-</h5>
           <span className="font-semibold text-center">+8801866186426</span>
           </div>
           </div>

        <div className='w-[18.7rem] mx-auto flex flex-col justify-center items-center gap-3'>
        

<div className="otp-input">
      {Array(4)
        .fill('')
        .map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
          />
        ))}
    </div>
<h6>Didn't recived code? <span className="font-semibold hover:underline cursor-pointer hover:text-red-600 transition">Resend</span></h6>
        

         <div className=''>
         <Link className='mb-8 flex justify-center items-center' to='/signUpPass'>
         <button className='bg-[#e85d04] text-white text-xs py-2 px-[7rem] border border-transparent rounded-lg font-semibold tracking-wide uppercase mt-2 cursor-pointer mb-5'>Verify</button>
         </Link>
         </div>

        </div>
           </div>
           
        </div>
        </div>
    );
};

export default OtpPage;