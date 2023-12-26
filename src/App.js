import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from '../src/components/StudentList';
import Dashboard from '../src/components/Dashboard';
import StudentRegistrationForm from '../src/components/StudentRegistrationForm';
import './App.css';
import './st.css';

function App() {

  const [tableData, setTableData] = useState([
    {
      "city": "Karachi",
      "degreeTitle": "bachelor",
      "department": "Computer Science",
      "dob": "2023-12-28",
      "email": "hel@gmail.com",
      "endDate": "2023-12-01",
      "gender": "Male",
      "interest": "Sports",
      "name": "Hassan",
      "rollNo": "49",
      "startDate": "2023-12-30",
      "subject": "Science"
    },
    {
      "city": "Lahore",
      "degreeTitle": "associate",
      "department": "Economics",
      "dob": "2023-11-08",
      "email": "aze@gmail.com",
      "endDate": "2024-12-31",
      "gender": "Male",
      "interest": "Travel",
      "name": "Azeem",
      "rollNo": "21",
      "startDate": "2022-12-30",
      "subject": "Travel"
    },
    {
      "city": "Sialkot",
      "degreeTitle": "bachelor",
      "department": "Economics",
      "dob": "2023-11-08",
      "email": "aze@gmail.com",
      "endDate": "2024-12-31",
      "gender": "Male",
      "interest": "Travel",
      "name": "Azeem",
      "rollNo": "21",
      "startDate": "2022-12-30",
      "subject": "Travel"
    },
    {
      "name": "Hassan",
      "rollNo": "49",
      "email": "hel@gmail.com",
      "city": "Islamabad",
      "dob": "2023-11-27",
      "gender": "Male",
      "interest": "Music",
      "department": "Civil Engineering",
      "degreeTitle": "phd",
      "subject": "Politics",
      "startDate": "2023-11-27",
      "endDate": "2023-12-14"
    },{
      "name": "John Doe",
      "rollNo": "15",
      "email": "john.doe@example.com",
      "city": "Karachi",
      "dob": "1995-08-12",
      "gender": "Male",
      "interest": "Technology",
      "department": "Computer Science",
      "degreeTitle": "bachelor",
      "subject": "Computer Networks",
      "startDate": "2021-09-15",
      "endDate": "2023-05-30"
    },
    {
      "name": "Alice Smith",
      "rollNo": "42",
      "email": "alice.smith@example.com",
      "city": "Lahore",
      "dob": "1993-04-25",
      "gender": "Female",
      "interest": "Reading",
      "department": "English",
      "degreeTitle": "master",
      "subject": "Literature",
      "startDate": "2020-08-10",
      "endDate": "2022-12-20"
    },
    {
      "name": "Bob Johnson",
      "rollNo": "28",
      "email": "bob.johnson@example.com",
      "city": "Islamabad",
      "dob": "1998-11-03",
      "gender": "Male",
      "interest": "Music",
      "department": "Mechanical Engineering",
      "degreeTitle": "phd",
      "subject": "Mechanical Vibrations",
      "startDate": "2019-12-01",
      "endDate": "2023-12-01"
    },
    {
      "name": "Eva Rodriguez",
      "rollNo": "7",
      "email": "eva.rodriguez@example.com",
      "city": "Rawalpindi",
      "dob": "1990-07-18",
      "gender": "Female",
      "interest": "Art",
      "department": "Fine Arts",
      "degreeTitle": "bachelor",
      "subject": "Painting",
      "startDate": "2022-03-05",
      "endDate": "2024-02-28"
    },
    {
      "name": "Michael Williams",
      "rollNo": "53",
      "email": "michael.williams@example.com",
      "city": "Faisalabad",
      "dob": "1997-01-08",
      "gender": "Male",
      "interest": "Sports",
      "department": "Physical Education",
      "degreeTitle": "associate",
      "subject": "Sports Science",
      "startDate": "2021-06-20",
      "endDate": "2023-05-15"
    },
    {
      "name": "Sophia Lee",
      "rollNo": "34",
      "email": "sophia.lee@example.com",
      "city": "Multan",
      "dob": "1994-09-22",
      "gender": "Female",
      "interest": "Gaming",
      "department": "Computer Science",
      "degreeTitle": "master",
      "subject": "Artificial Intelligence",
      "startDate": "2018-10-10",
      "endDate": "2021-12-30"
    },
    {
      "name": "Daniel Taylor",
      "rollNo": "19",
      "email": "daniel.taylor@example.com",
      "city": "Quetta",
      "dob": "1996-03-14",
      "gender": "Male",
      "interest": "Cooking",
      "department": "Culinary Arts",
      "degreeTitle": "associate",
      "subject": "International Cuisine",
      "startDate": "2019-04-05",
      "endDate": "2021-08-30"
    },
    {
      "name": "Olivia White",
      "rollNo": "48",
      "email": "olivia.white@example.com",
      "city": "Peshawar",
      "dob": "1999-12-10",
      "gender": "Female",
      "interest": "Travel",
      "department": "Geography",
      "degreeTitle": "bachelor",
      "subject": "World Tourism",
      "startDate": "2020-02-15",
      "endDate": "2022-11-30"
    },
    {
      "name": "Matthew Martinez",
      "rollNo": "11",
      "email": "matthew.martinez@example.com",
      "city": "Sialkot",
      "dob": "1992-06-05",
      "gender": "Male",
      "interest": "Fitness",
      "department": "Physical Education",
      "degreeTitle": "phd",
      "subject": "Exercise Physiology",
      "startDate": "2018-09-01",
      "endDate": "2023-08-31"
    },
    {
      "name": "Emma Turner",
      "rollNo": "26",
      "email": "emma.turner@example.com",
      "city": "Gujranwala",
      "dob": "1991-08-28",
      "gender": "Female",
      "interest": "Movies",
      "department": "Film Studies",
      "degreeTitle": "master",
      "subject": "Cinematography",
      "startDate": "2019-01-15",
      "endDate": "2021-12-10"
    }
  ]
  
  );

  return (
    <Router>
      <Routes>
        {/* Pass setTableData as a prop to StudentRegistrationForm */}
        <Route
          path="/"
          element={<StudentRegistrationForm setTableData={setTableData} tableData={tableData} />}
        />
        <Route
          path="/Dashboard"
          element={<Dashboard tableData={tableData} />}
        />
        <Route path="/StudentList" element={<StudentList tableData={tableData} setTableData={setTableData}/>} />
      </Routes>
    </Router>
  );
}

export default App;
