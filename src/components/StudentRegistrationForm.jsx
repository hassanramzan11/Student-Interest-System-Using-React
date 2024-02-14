import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudentRegistrationForm = ({ setTableData, tableData }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
    city: "",
    dob: "",
    gender: "",
    interest: "",
    department: "",
    degreeTitle: "",
    subject: "",
    startDate: "",
    endDate: "",
    otherInterest: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // If the interest is "Other," use the otherInterest value
    const finalInterest =
      formData.interest === "Other"
        ? formData.otherInterest
        : formData.interest;

    const timestamp = new Date();
    const formDataWithTimestamp = {
      ...formData,
      interest: finalInterest,
      timestamp,
    };
    const tableDataArray = [...tableData, formDataWithTimestamp];
    setTableData(tableDataArray);
    alert("Added to the Student List");
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Student Registration Form</title>
      <link rel="stylesheet" href="st.css" />

      <div className="wrapper">
        <div className="title">Student Interest System</div>
        <div className="navbtns" id="btns">
          <Link to="/">
            <button className="styled-button">DashBoard</button>
          </Link>
          <Link to="/StudentList">
            <button className="styled-button">Student List</button>
          </Link>
        </div>
        <br />
        <div className="title">Add Student</div>
        <form id="studentForm" onSubmit={handleSubmit}>
          <div className="form">
            <div className="inputfield">
              <label>Full Name</label>
              <input
                type="text"
                className="input"
                id="name"
                name="name"
                placeholder="Enter Full Name"
                maxLength={30}
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="inputfield">
              <label>Roll No</label>
              <input
                type="text"
                className="input"
                id="rollNo"
                name="rollNo"
                placeholder="Enter Roll No"
                title="Enter numbers only"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="inputfield">
              <label>Email Address</label>
              <input
                type="email"
                className="input"
                id="email"
                name="email"
                placeholder="Enter Email"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="inputfield">
              <label>City</label>
              <div className="custom_select">
                <select
                  id="city"
                  name="city"
                  required=""
                  onChange={handleInputChange}
                >
                  <option value="">--Select your city--</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Faisalabad">Faisalabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Quetta">Quetta</option>
                  <option value="Peshawar">Peshawar</option>
                  <option value="Sialkot">Sialkot</option>
                  <option value="Gujranwala">Gujranwala</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Sukkur">Sukkur</option>
                  <option value="Abbottabad">Abbottabad</option>
                  <option value="Bahawalpur">Bahawalpur</option>
                  <option value="Sargodha">Sargodha</option>
                  <option value="Mirpur (AJK)">Mirpur (AJK)</option>
                  <option value="Gujrat">Gujrat</option>
                  <option value="Larkana">Larkana</option>
                  <option value="Jhelum">Jhelum</option>
                  <option value="Sahiwal">Sahiwal</option>
                  {/* Add other city options here */}
                </select>
              </div>
            </div>
            <div className="inputfield">
              <label>Date of Birth</label>
              <input
                type="date"
                className="input"
                id="dob"
                name="dob"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="inputfield" id="gender" required="">
              <label>Gender</label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="Male"
                onChange={handleInputChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                id="female"
                value="Female"
                onChange={handleInputChange}
              />
              Female
            </div>
            <div className="inputfield">
              <label>Interest</label>
              <div className="custom_select">
                <select
                  id="interest"
                  name="interest"
                  required=""
                  onChange={handleInputChange}
                >
                  <option value="">--Select your interest--</option>
                  <option value="Sports">Sports</option>
                  <option value="Music">Music</option>
                  <option value="Technology">Technology</option>
                  <option value="Art">Art</option>
                  <option value="Reading">Reading</option>
                  <option value="Travel">Travel</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Photography">Photography</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Dancing">Dancing</option>
                  <option value="Coding">Coding</option>
                  <option value="Writing">Writing</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Movies">Movies</option>
                  <option value="Crafting">Crafting</option>
                  <option value="Gardening">Gardening</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            {formData.interest === "Other" && (
              <div className="inputfield">
                <label>Other Interest</label>
                <input
                  type="text"
                  className="input"
                  id="otherInterest"
                  name="otherInterest"
                  placeholder="Enter Other Interest"
                  maxLength={30}
                  required=""
                  onChange={handleInputChange}
                />
              </div>
            )}
            <div className="inputfield">
              <label>Department</label>
              <div className="custom_select">
                <select
                  id="department"
                  name="department"
                  required=""
                  onChange={handleInputChange}
                >
                  <option value="">--Select your Department--</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Chemical Engineering">
                    Chemical Engineering
                  </option>
                  <option value="Physics">Physics</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Biology">Biology</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Business Administration">
                    Business Administration
                  </option>
                  <option value="Economics">Economics</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Sociology">Sociology</option>
                  <option value="Political Science">Political Science</option>
                  <option value="History">History</option>
                  <option value="English">English</option>
                  <option value="Foreign Languages">Foreign Languages</option>
                  <option value="Environmental Science">
                    Environmental Science
                  </option>
                  <option value="Geology">Geology</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Law">Law</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Dentistry">Dentistry</option>
                </select>
              </div>
            </div>
            <div className="inputfield">
              <label>Degree Title</label>
              <div className="custom_select">
                <select
                  id="degree"
                  name="degreeTitle"
                  required=""
                  onChange={handleInputChange}
                >
                  <option value="">--Select your Degree--</option>
                  <option value="associate">Associate Degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">Ph.D.</option>
                  {/* Add other degree options here */}
                </select>
              </div>
            </div>
            <div className="inputfield">
              <label>Subject</label>
              <input
                type="text"
                className="input"
                id="subject"
                name="subject"
                placeholder="Enter Subject"
                maxLength={30}
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="inputfield">
              <label>Start Date</label>
              <input
                type="date"
                className="input"
                name="startDate"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="inputfield">
              <label>End Date</label>
              <input
                type="date"
                className="input"
                name="endDate"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="inputfield btns" id="btn">
              <button type="submit" className="btn">
                Create
              </button>
              <button type="reset" value="Reset" className="btn">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentRegistrationForm;
