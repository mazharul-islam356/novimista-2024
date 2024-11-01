import { FaArrowAltCircleRight } from "react-icons/fa";
import profile from "../../assets/profile2.jpg";
import { Link } from "react-router-dom";

const EmployeeDashBoard = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-start justify-start gap-5">

        <div className="w-52 pt-5 bg-orange-200 rounded-xl h-96 shadow-lg flex items-center flex-col gap-2 mt-12">
          <img className="rounded-full w-20 mx-auto" src={profile} alt="" />
          <h4 className="bg-orange-400 mt-4 px-4 rounded-md py-1 text-white">
            HR Manager Emp
          </h4>

          <h1 className="font-semibold text-xl mt-6">Mazharul Islam</h1>

          <p className="text-sm text-center">
            Admin and HR
            <br />
            Company 01
          </p>

          <Link to='/dashBoard/employeeProfile'>
          <button className="border px-4 py- rounded-md font-semibold flex items-center gap-1 py-1 mt-5  text-white bg-[#383834]">
            View details
            <FaArrowAltCircleRight></FaArrowAltCircleRight>
          </button>
          </Link>
        </div>

            {/* ------boxes---- */}
        <div className="mt-12">
          <div className="flex gap-x-8">
          <div className="w-60 h-40 border rounded-lg shadow-md p-4 bg-[#335c67dd]">
            Box 01
          </div>
          <div className="w-60 h-40 border rounded-lg shadow-md p-4 bg-[#c23436d6]">
            Box 02
          </div>
          <div className="w-60 h-40 border rounded-lg shadow-md p-4 bg-[#fff3b0]">
            Box 03
          </div>
          </div>


          <div className="text-center mt-8 ml-1">
            <h2 className="text-xl font-semibold">My Information</h2>

           <div className="flex justify-around">
           <div className="flex items-center gap-3 mt-4"> 
            <h6 className="font-semibold">Date of birth:</h6>
            <span>01.02.2004</span>
            </div>

            <div className="flex items-center gap-3 mt-3"> 
            <h6 className="font-semibold">National ID:</h6>
            <span>7865136874654</span>
            </div>
           </div>

            <div className="flex justify-around">
            <div className="flex items-center gap-3 mt-3"> 
            <h6 className="font-semibold">Nationality:</h6>
            <span>Bangladeshi</span>
            </div>

            <div className="flex items-center gap-3 mt-3"> 
            <h6 className="font-semibold">Email:</h6>
            <span>ifital878@gmail.com</span>
            </div>
            </div>

           

        </div>
        
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashBoard;
