import { FaClipboardList } from "react-icons/fa";
import { Card, Dialog, DialogFooter, Option, Select,  Typography } from "@material-tailwind/react";
import { BiFilterAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { GrPowerReset } from "react-icons/gr";
import { LiaHourglassEndSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";


const LeaveApplicationList = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/public/data/EmployeeLeave_applicaton_list.json').then(response => {
          setData(response.data);
        });
    }, []); 
    console.log(data);
      

    const navigate = useNavigate();
      

    const handleRelod = () => {
      navigate(0);
    }
    

   

const [open, setOpen] = useState(false);
 
const handleOpen = () => setOpen(!open);
 


    return (
        <div>
             <div className="flex justify-center items-center gap-2 mt-8">
             <FaClipboardList className="text-2xl" />
            <h2 className="text-2xl text-center font-semibold">Employee Leave Applicaton List (All)</h2>
            </div>


            <iframe className="" src="https://lottiefiles.com/free-animation/facebook-logo-effect-Fe9dNHIz7F?color-palette=true"></iframe>

            <div className="flex gap-3 mt-8 justify-end pr-8">
            


    <Dialog className="p-5 py-10"  open={open} size="xs" handler={handleOpen}>

    <div className="flex items-center justify-center mb-4 gap-1">
    <BiFilterAlt className="text-xl text-gray-800" />
    <h1 className="text-gray-800 font-semibold text-center text-xl">Filter</h1>
    </div>
    <div className="w-80 mx-auto">
        <span className="text-black font-semibold">Leave type*</span>
      <Select label="Leave type">
        <Option>CL</Option>
        <Option>SL</Option>
        
      </Select>
    </div>

    <div className="w-80 mx-auto mt-2">
        <span className="text-black font-semibold">Recommend*</span>
      <Select label="Recommend">
        <Option>Recommend</Option>
        <Option>Not Recommend</Option>
        
      </Select>
    </div>

    <div className="w-80 mx-auto mt-2">
        <span className="text-black font-semibold">Approve*</span>
      <Select label="Approved">
        <Option>Approved</Option>
        <Option>Not Approved</Option>
        
      </Select>
    </div>

   <div className="flex justify-center items-center gap-6 w-80 mx-auto">
    <div className="mt-3">
    <h5 className="font-semibold text-black">From:</h5>
   <div className="px-4 py-1  border-gray-400 border rounded-lg shadow-sm">

   <DatePicker
   className="w-28"
    showIcon
  selected={startDate} onChange={(date) => setStartDate(date)}
    />
   </div>
    </div>
    <div className="mt-3">
    <h5 className="text-black font-semibold">To:</h5>
   <div className="px-4 py-1  border-gray-400 border rounded-lg shadow-sm">

   <DatePicker
   className="w-28"
    showIcon
  selected={startDate} onChange={(date) => setStartDate(date)}
    />
   </div>
    </div>
   </div>

    <DialogFooter className="flex justify-center gap-3">

        <Button onClick={handleRelod} className="px-6 flex items-center gap-1 bg-red-500 text-white py-2 mt-4 rounded-lg" color="blue">
        <GrPowerReset className="font-bold" />
            Reset
        </Button>
        <Button onClick={handleOpen} className="px-6 flex items-center gap-1 bg-orange-500 text-white py-2 mt-4 rounded-lg" color="blue">
        <LiaHourglassEndSolid className="text-xl"  />
            Apply
        </Button>
    </DialogFooter>
      </Dialog>

                
                <button onClick={handleOpen}>

                <div className="flex p-2 rounded-lg shadow-sm border items-center font-semibold px-4 gap-1">
                <BiFilterAlt />
                    <span>Filter</span>
                </div>
                </button>

               
            </div>


            {/* --------Table----- */}
            <Card className="h-full px-7 w-full shadow-none mt-4">
      <table className="w-full min-w-max table-auto text-left">
        <thead>

       <tr className="border-b border-blue-gray-100 bg-blue-gray-50">
        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 py-2">
        SL
        </th>
        <th>
        Company
        </th>
        <th>
        Leave Name
        </th>
        <th>
        Total Day
        </th>
        <th>
        Action
        </th>
       </tr>

        </thead>
        <tbody>
          {data.map(({ company, leave_name, total_day,action_button }, index) => 
          
          (
            
            <tr key={index} className="even:bg-blue-gray-50/50 ">
              <td className="p-4 bg-blue-gray-50/50">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {index+1}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {company}
                </Typography>
              </td>
              <td className="p-4 bg-blue-gray-50/50">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {leave_name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {total_day}
                </Typography>
              </td>
              <td className="p-4 bg-blue-gray-50/50">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  {action_button}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
        </div>
    );
};

export default LeaveApplicationList;