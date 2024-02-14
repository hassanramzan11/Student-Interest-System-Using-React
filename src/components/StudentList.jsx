import React, { useState } from "react";
import { Link } from "react-router-dom";

function StudentList({ tableData, setTableData }) {
  console.log(tableData);

  const deleteStudent = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1); // Remove the element at the specified index
    setTableData(updatedData);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const changePageSize = (e) => {
    setPageSize(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  const goToFirstPage = () => setCurrentPage(1);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(tableData.length / pageSize);
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToLastPage = () => {
    const totalPages = Math.ceil(tableData.length / pageSize);
    setCurrentPage(totalPages);
  };

  const sortList = (columnName) => {
    // Create a copy of the table data
    const sortedData = [...tableData];

    // Determine the sorting order for the specified column
    const sortOrder = sortedColumn === columnName ? -sortDirection : 1;

    // Implement sorting logic based on the column name and sorting order
    sortedData.sort((a, b) => {
      // Assuming properties are strings, modify as needed for different data types
      return sortOrder * a[columnName].localeCompare(b[columnName]);
    });

    // Update the state with the sorted data, and save the current sorting column and direction
    setTableData(sortedData);
    setSortedColumn(columnName);
    setSortDirection(sortOrder);
  };

  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(1);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openViewDialog = (student) => {
    setSelectedStudent(student);
    setViewDialogOpen(true);
  };

  const closeViewDialog = () => {
    setSelectedStudent(null);
    setViewDialogOpen(false);
  };

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedStudent, setEditedStudent] = useState(null);

  const openEditDialog = (student) => {
    setEditedStudent(student);
    setEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    setEditedStudent(null);
    setEditDialogOpen(false);
  };

  const saveEdits = () => {
    // Create a copy of the table data
    const updatedData = [...tableData];
  
    // Find the index of the edited student in the copied data using a unique identifier
    const editedIndex = updatedData.findIndex(
      (student) => student.rollNo === editedStudent.rollNo
    );
  
    // Replace the old data with the edited data
    updatedData[editedIndex] = { ...editedStudent };
  
    // Update the state with the edited data
    setTableData(updatedData);
  
    // Close the edit dialog
    closeEditDialog();
  };

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const currentData = tableData.slice(startIdx, endIdx);

  return (
    <>
      <div className="container">
        <div className="title">Student Interest System</div>
        <div className="navbtns" id="btns">
          <Link to="/">
            <button className="styled-button">DashBoard</button>
          </Link>
          <Link to="/StudentRegistrationForm">
            <button className="styled-button">Student Register</button>
          </Link>
        </div>
        <br />
        <h1>Students List View</h1>
        <div className="controls">
          <label htmlFor="pageSize">Page Size:</label>
          <select id="pageSize" onChange={changePageSize} value={pageSize}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
          <div className="pageNavigator">
            <button onClick={goToFirstPage}>&lt;&lt;</button>
            <button onClick={goToPreviousPage}>&lt;</button>
            <span id="currentPage">{currentPage}</span>/
            <span id="totalPages">
              {Math.ceil(tableData.length / pageSize)}
            </span>
            <button onClick={goToNextPage}>&gt;</button>
            <button onClick={goToLastPage}>&gt;&gt;</button>
          </div>
        </div>
        <table className="studentList">
          <thead>
            <tr>
              <th onClick={() => sortList("name")}>Name ▲▼</th>
              <th onClick={() => sortList("rollNo")}>Roll No ▲▼</th>
              <th onClick={() => sortList("department")}>Department ▲▼</th>
              <th>Degree ▲▼</th>
              <th onClick={() => sortList("dob")}>DoB ▲▼</th>
              <th onClick={() => sortList("city")}>City ▲▼</th>
              <th onClick={() => sortList("interest")}>Interest ▲▼</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.department}</td>
                <td>{student.degreeTitle}</td>
                <td>{student.dob}</td>
                <td>{student.city}</td>
                <td>{student.interest}</td>
                <td>
                  <button onClick={() => openViewDialog(student)}>View</button>

                  <button onClick={() => openEditDialog(student)}>Edit</button>
                  <button onClick={() => deleteStudent(index)}>Delete</button>
                </td>{" "}
                {/* Replace with actual action buttons */}
              </tr>
            ))}
          </tbody>
        </table>

        {viewDialogOpen && selectedStudent && (
          <div className="view-dialog">
            <h2>View Student Details</h2>
            <p>Name: {selectedStudent.name}</p>
            <p>Roll No: {selectedStudent.rollNo}</p>
            <p>Email: {selectedStudent.email}</p>
            <p>Departement: {selectedStudent.department}</p>
            <p>Degree: {selectedStudent.degree}</p>
            <p>Degree Title: {selectedStudent.degreeTitle}</p>
            <p>DOB: {selectedStudent.dob}</p>
            <p>City: {selectedStudent.city}</p>
            <p>Subject: {selectedStudent.subject}</p>
            <p>Intrest: {selectedStudent.interest}</p>

            <button onClick={closeViewDialog}>Close</button>
          </div>
        )}

        {/* Dialog for editing student details */}
        {editDialogOpen && editedStudent && (
          <div className="edit-dialog">
            <h2>Edit Student Details</h2>
            <form>
              <label>Name:</label>
              <input
                type="text"
                value={editedStudent.name}
                onChange={(e) =>
                  setEditedStudent({ ...editedStudent, name: e.target.value })
                }
              />
              <label>Roll No:</label>
              <input
                type="text"
                value={editedStudent.rollNo}
                onChange={(e) =>
                  setEditedStudent({ ...editedStudent, rollNo: e.target.value })
                }
              />
              <label>Email:</label>
              <input
                type="email"
                value={editedStudent.email}
                onChange={(e) =>
                  setEditedStudent({ ...editedStudent, email: e.target.value })
                }
              />
              <label>Department:</label>
              <input
                type="text"
                value={editedStudent.department}
                onChange={(e) =>
                  setEditedStudent({
                    ...editedStudent,
                    department: e.target.value,
                  })
                }
              />

              <label>Degree Title:</label>
              <input
                type="text"
                value={editedStudent.degreeTitle}
                onChange={(e) =>
                  setEditedStudent({
                    ...editedStudent,
                    degreeTitle: e.target.value,
                  })
                }
              />
              <label>DOB:</label>
              <input
                type="date"
                value={editedStudent.dob}
                onChange={(e) =>
                  setEditedStudent({ ...editedStudent, dob: e.target.value })
                }
              />
              <label>City:</label>
              <input
                type="text"
                value={editedStudent.city}
                onChange={(e) =>
                  setEditedStudent({ ...editedStudent, city: e.target.value })
                }
              />
              <label>Subject:</label>
              <input
                type="text"
                value={editedStudent.subject}
                onChange={(e) =>
                  setEditedStudent({
                    ...editedStudent,
                    subject: e.target.value,
                  })
                }
              />
              <label>Interest:</label>
              <input
                type="text"
                value={editedStudent.interest}
                onChange={(e) =>
                  setEditedStudent({
                    ...editedStudent,
                    interest: e.target.value,
                  })
                }
              />
              <label>Start Date:</label>
              <input
                type="date"
                value={editedStudent.startDate}
                onChange={(e) =>
                  setEditedStudent({
                    ...editedStudent,
                    startDate: e.target.value,
                  })
                }
              />
              <label>End Date:</label>
              <input
                type="date"
                value={editedStudent.endDate}
                onChange={(e) =>
                  setEditedStudent({
                    ...editedStudent,
                    endDate: e.target.value,
                  })
                }
              />
              {/* Add more input fields for other properties */}
            </form>
            <button onClick={saveEdits}>Save</button>
            <button onClick={closeEditDialog}>Cancel</button>
          </div>
        )}
      </div>
    </>
  );
}

export default StudentList;
