import {
  Button,
  Card,
  Dialog,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaEdit,
  FaPlus,
  FaRegBuilding,
  FaSave,
  FaSearch,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Department = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [departmentData, setDepartmentData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(departmentData);
  const [isFiltered, setIsFiltered] = useState(false);

  const token = localStorage.getItem('token')
  const departments = axios.get('../../../public/data/department.json', {
    headers: {
      Authorization : `Bearer ${token}`,
      "Content-Type": "application/json",
    }
  })
  .then(response => {
    setDepartmentData(response?.data);
      console.log('Data:', response.data);
      // Use the data as needed
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });
  console.log(departments);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle the search filter button click
  const handleFilter = () => {
    if (searchTerm.trim() === "") {
      setFilteredData(departmentData); // Show all data if search is empty
      setIsFiltered(false);
    } else {
      const filtered = departmentData.filter((item) =>
        Object.values(item).some((value) =>
          value
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
      setIsFiltered(true);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(departmentData);
      setIsFiltered(false);
    }
  }, [searchTerm, departmentData]);

  //   delete aleart
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };


  


  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="flex items-center justify-center gap-2">
        <FaRegBuilding className="text-2xl" />
        <h1 className="font-semibold text-2xl text-center">Department</h1>
      </div>
     
      <Card className="h-full px-7 w-full shadow-none mt-10">
        <div className="flex items-center justify-between">
          <div className="w-full mb-3 md:w-60">
            <Input
              value={searchTerm}
              onChange={handleSearchChange}
              label="Search"
              icon={
                <Link onClick={handleFilter}>
                  <FaSearch className="h-5 w-5" />
                </Link>
              }
            />
          </div>

          <Link
            onClick={handleOpen}
            className="flex items-center gap-1 p-2 rounded-lg shadow-sm mb-2 border font-semibold px-4"
          >
            <FaPlus></FaPlus>
            <h2>Add Department</h2>
          </Link>
        </div>

        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr className="border-b border-blue-gray-100 bg-blue-gray-50">
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 py-2">
                SL
              </th>
              <th>Depertment Name</th>
              <th>Department Code</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(isFiltered ? filteredData : departmentData).map((item, index) => (
              <tr
                key={index}
                className="even:bg-blue-gray-50/50 hover:bg-blue-gray-50 transition ease-in"
              >
                <td className="p-4 bg-blue-gray-50/50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index + 1}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.department_name}
                  </Typography>
                </td>
                <td className="p-4 bg-blue-gray-50/50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.department_code}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.created_at}
                  </Typography>
                </td>
                <td className="p-4 bg-blue-gray-50/50">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {item.updated_at}
                  </Typography>
                </td>
                <td className="p-4 ">
                  <Typography
                    as="a"
                    variant="small"
                    className="font-medium flex items-center justify-center gap-2"
                  >
                    <MdDelete
                      onClick={handleDelete}
                      className="text-3xl text-red-600 border shadow-xl border-gray-300 rounded-lg p-1"
                    ></MdDelete>

                    <FaEdit className="text-3xl border shadow-xl border-gray-300 rounded-lg p-1 text-green-600"></FaEdit>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Modal */}

      <Dialog className="p-5 py-10" open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-center mb-4 gap-1">
          <FaPlus className="text-xl text-gray-800" />
          <h1 className="text-gray-800 font-semibold text-center text-xl">
            Add Department
          </h1>
        </div>

        <div className="w-80 mx-auto mt-10">
          <Input required label="Department Name"></Input>
        </div>

        <div className="w-80 mx-auto mt-4">
          <Input required label="Code"></Input>
        </div>

        <DialogFooter className="flex justify-center gap-3">
          <Button
            onClick={handleOpen}
            className="px-6 flex items-center gap-1 bg-orange-500 text-white py-2 mt-4 rounded-lg"
            color="blue"
          >
            <FaSave className="text-lg mb-1"></FaSave>
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Department;
