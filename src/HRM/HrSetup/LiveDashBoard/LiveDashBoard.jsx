
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Avatar,
} from "@material-tailwind/react";
import { FaPhone, FaRegCalendarAlt } from "react-icons/fa";
import { FaMagnifyingGlass, FaMessage } from "react-icons/fa6";
import { SiStreamlabs } from "react-icons/si";
import { IoCall, IoVideocam } from "react-icons/io5";
import { Link } from "react-router-dom";



const LiveDashBoard = () => {

   
       
      const TABLE_HEAD = ["Employee", "Location", "Duty Time", "Employe Contact", "Email Address", "Call", "Message", "Video Call"];
       
      const TABLE_ROWS = [
        {
          img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
          name: "John Michael",
          email: "john@creative-tim.com",
          dutyTimeFrom: "8.0AM",
          dutyTimeTo: "4.00PM",
          location: "Uttara,Dhaka",
          contact: "+8801899664782",
          callButton: <IoCall />,
          meassageButton: <FaMessage></FaMessage>,
          videoCallButton: <IoVideocam></IoVideocam>
        },
        {
          img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
          name: "Alexa Liras",
          email: "alexa@creative-tim.com",
          dutyTimeFrom: "8.0AM",
          dutyTimeTo: "4.00PM",
          location: "Gulshan, Dhaka",
          contact: "+8801346589718",
          callButton: <IoCall />,
          meassageButton: <FaMessage></FaMessage>,
          videoCallButton: <IoVideocam></IoVideocam>
        },
        {
          img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
          name: "Laurent Perrier",
          email: "laurent@creative-tim.com",
          dutyTimeFrom: "8.0AM",
          dutyTimeTo: "4.00PM",
          location: "Cumilla",
          contact: "+8801871651551",
          callButton: <IoCall />,
          meassageButton: <FaMessage></FaMessage>,
          videoCallButton: <IoVideocam></IoVideocam>
        },
        {
          img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
          name: "Michael Levi",
          email: "michael@creative-tim.com",
          dutyTimeFrom: "8.0AM",
          dutyTimeTo: "4.00PM",
          location: "Rajshahi",
          contact: "+8801587669715",
          callButton: <IoCall />,
          meassageButton: <FaMessage></FaMessage>,
          videoCallButton: <IoVideocam></IoVideocam>
        },
        {
          img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
          name: "Richard Gran",
          email: "richard@creative-tim.com",
          dutyTimeFrom: "8.0AM",
          dutyTimeTo: "4.00PM",
          location: "Brahmanbaria",
          contact: "+8801785422452",
          callButton: <IoCall />,
          meassageButton: <FaMessage></FaMessage>,
          videoCallButton: <IoVideocam></IoVideocam>
        },
      ];
    return (
        <div className="p-4 px-6 pl-8">
          <Card className="h-full w-full shadow-none">
            <div className="flex items-center justify-center gap-3 mb-10 mt-4">
            <SiStreamlabs className="text-black text-3xl"></SiStreamlabs>
            <h1 className="text-center font-semibold text-2xl text-black mt-4">Live DashBoard</h1>
            </div>
      <CardHeader floated={false} shadow={false} className="rounded-none flex flex-row-reverse justify-between items-center overflow-visible">
        <div>
          
          <div className="flex shrink-0 flex-col gap-16 sm:flex-row">
            <div className="flex items-center gap-2 text-black">
                <FaRegCalendarAlt className="text-xl"></FaRegCalendarAlt>
                Jan 21, 2024
            </div>
           <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 border-2 px-2 rounded-md bg-green-400 text-white border-green-700">
                <p className="font-semibold text-sm py-1">Online:</p> <span className="text-sm">3</span>
            </div>
            <div className="flex items-center gap-2 border-2 px-2 rounded-md bg-red-400 text-white border-red-700">
                <p className="font-semibold text-sm py-1">Ofline:</p> <span className="text-sm">12</span>
            </div>
           </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          
          <div className="w-96">
            <Input
              label="Search"
              icon={<FaMagnifyingGlass />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-x-auto px-0">
        <table className=" w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
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
            {TABLE_ROWS.map(
              ({ img, name, email,dutyTimeFrom, dutyTimeTo, location, contact, callButton, meassageButton,videoCallButton }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                          
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {location} 
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                         
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        {dutyTimeFrom} to {dutyTimeTo}
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {contact}
                      </Typography>
                    </td>
                    <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                    <Link>
                   <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal flex justify-start text-xl"
                      >
                        {callButton}
                      </Typography>
                   </Link>
                    </td>
                    <td className={classes}>
                    <Link>
                   <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal flex justify-start"
                      >
                        {meassageButton}
                      </Typography>
                   </Link>
                    </td>
                    <td className={classes}>
                   <Link>
                   <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-xl flex justify-start"
                      >
                        {videoCallButton}
                      </Typography>
                   </Link>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      
    </Card>
        </div>
    );
};

export default LiveDashBoard;