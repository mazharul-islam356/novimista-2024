import { createBrowserRouter } from "react-router-dom";
import SignIn from "../login/SignIn/SignIn";
import SignUpContact from "../SignUp/SignUpContact";
import SignUpPass from "../SignUp/signUpPass/SignUpPass";
import OtpPage from "../SignUp/OTP/OtpPage";
import DashBoardSlider from "../DashBoard/DashBoardSlider";
import AdminDashBoard from "../DashBoard/AdminDashBoard";
import LeaveApplication from "../Leave/LeaveApplication";
import EmployeeDashBoard from "../DashBoard/Employee/EmployeeDashBoard";
import EmployeeProfile from "../DashBoard/Employee/EmployeeProfile";
import LeaveApplicationList from "../Leave/LeaveApplicationList";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn></SignIn>,
    },
    {
      path:'/signUpContact',
      element:<SignUpContact></SignUpContact>
    },
    {
      path:'/signUpPass',
      element:<SignUpPass></SignUpPass>
    },
    {
      path:'/otpPage',
      element:<OtpPage></OtpPage>
    },
    {
      path:'/dashBoard',
      element:<DashBoardSlider></DashBoardSlider>,
      children:[
        {
          path:'adminDashBoard',
          element:<AdminDashBoard></AdminDashBoard>
        },
        {
          path:'employeeDashBoard',
          element:<EmployeeDashBoard></EmployeeDashBoard>
        },
        {
          path:'leaveApplication',
          element:<LeaveApplication></LeaveApplication>
        },
        {
          path:'leaveApplicationList',
          element:<LeaveApplicationList></LeaveApplicationList>
        },
        {
          path:'employeeProfile',
          element:<EmployeeProfile></EmployeeProfile>
        }
      ]
    },
    
  ])
  