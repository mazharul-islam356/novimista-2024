import { Button, Input, Option, Select, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaExchangeAlt } from "react-icons/fa";
import { Card, Typography } from "@material-tailwind/react";
import { GrPowerReset } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
 

 

const LeaveApplication = () => {

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    const TABLE_HEAD = ["Sl","Leave type", "Date", "Recomender", "Approvel", "Status"];

    const TABLE_ROWS = [
        {
        sl:'01',
          name: "John Michael",
          job: "Manager",
          date: "23/04/18",
        },
        {
            sl:'01',
          name: "Alexa Liras",
          job: "Developer",
          date: "23/04/18",
        },
        {
            sl:'01',
          name: "Laurent Perrier",
          job: "Executive",
          date: "19/09/17",
        },
        {
            sl:'01',
          name: "Michael Levi",
          job: "Developer",
          date: "24/12/08",
        },
        {
            sl:'01',
          name: "Richard Gran",
          job: "Manager",
          date: "04/10/21",
        },
      ];

      const navigate = useNavigate();

      const handleRelod = () => {
        navigate(0);
      }


    return (
        <div className="w-11/12 mx-auto mt-10">

            <div className="flex justify-center items-center gap-2">
            <i className='bx bxs-file-doc text-3xl'></i>
            <h2 className="text-2xl text-center font-semibold">Leave Applicaton</h2>
            </div>

            <div>

            <div className="flex flex-col justify-center">

            <div className="flex items-center gap-10 mt-16">
            <div className="w-72">
                <h3 className="mb-1">Leave Type*</h3>
      <Select label="Leave type">
        <Option>CL</Option>
        <Option>SL</Option>
      </Select>
    </div>

    <div>
        <h2>Date:</h2>
        <div className="flex items-center gap-2">
        <DatePicker
         placeholderText="From"
        className="p-4 px-4 w-48 border-2 rounded-md"
        showIcon
        isClearable
         selected={fromDate} 
         onChange={(date) => setFromDate(date)} />

<FaExchangeAlt></FaExchangeAlt>
        <DatePicker
         placeholderText="To"
        className="p-4 px-4 w-48 border-2 rounded-md"
        showIcon
        isClearable
         selected={toDate} 
         onChange={(date) => setToDate(date)} />
        </div>

    </div>

   
            </div>

            <div className="flex items-center gap-10 mt-8">


            <div className="w-72">
                <h2>Emargency Contact</h2>
      <Input
        maxLength={16}
        label="Contact Number"
        placeholder="e.g., +880189965864"
      
        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-blue-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
        }
      />
            </div>
            
            <div className="w-[26rem]">
                <h2>Attachment</h2>
            <Input
  type="file"
  variant="outlined"
  fullWidth
  label="Choose File"
/>
            </div>
            </div>
            </div>

            <div className="mt-8 w-full">
            <h2>Reason*</h2>
                <Textarea label="Reason"></Textarea>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4">
               
                <Button color="blue" className="flex items-center gap-1">
                    <IoIosSend  className="text-xl font-semibold"></IoIosSend>
                Send</Button>

                <Button onClick={handleRelod} color="red" className="flex items-center gap-1">
                    <GrPowerReset className="text-xl font-semibold"></GrPowerReset>
                Reset</Button>
              
            </div>

            
            
            {/* -----Table------ */}
            <Card className="h-full my-10 w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {index+1}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {job}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {date}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  John
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="red" className="font-medium">
                  Canceled
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>

            

            </div>
        </div>
    );
};

export default LeaveApplication;