import { FaArrowTrendUp } from "react-icons/fa6";
import "./adminDashBoard.css";
import TodaysSummariseChart from "./GraphChart/TodaysSummariseChart";
import MonthlyAttendChart from "./GraphChart/MonthlyAttendChart";




const AdminDashBoard = () => {
 

 

  return (
    <div className="mt-5 w-10/12 mx-auto">
      {/* 1st line */}
      <div className="py-10 grid grid-cols-4 justify-center justify-items-center gap-y-5">
        {/* box 01 */}
        <div className="shadow-md rounded-2xl px-5 w-56 py-6 flex flex-col justify-evenly items-center gap-y-3 border hover:translate-y-[-8px] transition-transform duration-2000 ease-in-out cursor-pointer hover:shadow-lg">
          <h2 className="font-semibold">Total employee</h2>
          <div className="flex items-center justify-evenly gap-4">
            <h4 className="font-extrabold text-2xl">325</h4>
            <div className="flex items-center gap-1 text-green-700">
              <FaArrowTrendUp className="text-xl" />
              +15%
            </div>
          </div>
        </div>

        {/* box 02 */}
        <div className="shadow-md rounded-2xl px-5 w-56 py-6 flex flex-col justify-evenly items-center gap-y-3 border hover:translate-y-[-8px] transition-transform duration-2000 ease-in-out cursor-pointer hover:shadow-lg">
          <h2 className="font-semibold">Upcoming birthday</h2>
          <div className="flex items-center justify-evenly gap-4">
            <h4 className="font-extrabold text-2xl">25</h4>
            
          </div>
        </div>

        {/* box 03 */}
        <div className="shadow-md rounded-2xl px-5 w-56 py-6 flex flex-col justify-evenly items-center gap-y-3 border hover:translate-y-[-8px] transition-transform duration-2000 ease-in-out cursor-pointer hover:shadow-lg">
          <h2 className="font-semibold">Today out work</h2>
          <div className="flex items-center justify-evenly gap-4">
            <h4 className="font-extrabold text-2xl">45</h4>
            <div className="flex items-center gap-1 text-green-700">
              <FaArrowTrendUp className="text-xl" />
              +19%
            </div>
          </div>
        </div>

        {/* box 04 */}
        <div className="shadow-md rounded-2xl px-5 w-56 py-6 flex flex-col justify-evenly items-center gap-y-3 border hover:translate-y-[-8px] transition-transform duration-2000 ease-in-out cursor-pointer hover:shadow-lg">
          <h2 className="font-semibold">Tommorow out work</h2>
          <div className="flex items-center justify-evenly gap-4">
            <h4 className="font-extrabold text-2xl">86%</h4>
            
          </div>
        </div>

         {/* box 05 */}
        <div className="shadow-md rounded-2xl px-5 w-56 py-6 flex flex-col justify-evenly items-center gap-y-3 border hover:translate-y-[-8px] transition-transform duration-2000 ease-in-out cursor-pointer hover:shadow-lg">
          <h2 className="font-semibold">Pending out work</h2>
          <div className="flex items-center justify-evenly gap-4">
            <h4 className="font-extrabold text-2xl">587</h4>
            
          </div>
        </div>


         {/* box 06 */}
        <div className="shadow-md rounded-2xl px-5 w-56 py-6 flex flex-col justify-evenly items-center gap-y-3 border hover:translate-y-[-8px] transition-transform duration-2000 ease-in-out cursor-pointer hover:shadow-lg">
          <h2 className="font-semibold">Today short leaves</h2>
          <div className="flex items-center justify-evenly gap-4">
            <h4 className="font-extrabold text-2xl">42</h4>
            
          </div>
        </div>


         {/* box 07 */}
        <div className="shadow-md rounded-2xl px-5 w-56 py-6 flex flex-col justify-evenly items-center gap-y-3 border hover:translate-y-[-8px] transition-transform duration-2000 ease-in-out cursor-pointer hover:shadow-lg">
          <h2 className="font-semibold">On leave today</h2>
          <div className="flex items-center justify-evenly gap-4">
            <h4 className="font-extrabold text-2xl">852</h4>
           
          </div>
        </div>


         {/* box 08 */}
        <div className="shadow-md rounded-2xl px-5 w-56 py-6 flex flex-col justify-evenly items-center gap-y-3 border hover:translate-y-[-8px] transition-transform duration-2000 ease-in-out cursor-pointer hover:shadow-lg">
          <h2 className="font-semibold">On leave tommowrow</h2>
          <div className="flex items-center justify-evenly gap-4">
            <h4 className="font-extrabold text-2xl">63</h4>
            
          </div>
        </div>



      </div>

      {/* 2nd line */}
      <div className="grid grid-cols-2 justify-evenly justify-items-center gap-2">
       
         <div className="w-[35rem] h-80 rounded-xl shadow-xl flex flex-col justify-around items-center">

         <div className="flex justify-center items-center gap-20">
              <h3 className="font-semibold text-start mb-1">Today Summaries</h3>

 
            </div>
         <TodaysSummariseChart></TodaysSummariseChart>
         </div>

        {/* graph chart 02 */}
        <div>
          <div className="w-[35rem] h-80 rounded-xl shadow-xl flex flex-col justify-around items-center">
            <div className="flex justify-center items-center gap-20">
              <h3 className="font-semibold text-start">Monthly Attendense Chart</h3>
 
            </div>
            <MonthlyAttendChart></MonthlyAttendChart>
          </div>
        </div>


      </div>
    </div>
  );
};

export default AdminDashBoard;
