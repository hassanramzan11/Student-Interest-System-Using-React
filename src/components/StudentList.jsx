import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StudentList({ tableData,setTableData }) {

  console.log(tableData)

  

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
    // Implement your sorting logic based on the column name
    // For simplicity, let's assume tableData is an array of objects
    const sortedData = [...tableData].sort((a, b) => a[columnName].localeCompare(b[columnName]));
    // Update the tableData state with sorted data
    // You don't need to set any state here since you're not using setTableData
  };

  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const currentData = tableData.slice(startIdx, endIdx);

  return (
    <>
      <div className="container">
      <div className="title">Student Interest System</div>
        <div className="navbtns" id="btns">         
          <Link to="/DashBoard">
            <button className="styled-button">DashBoard</button>
          </Link>
          <Link to="/">
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
            <span id="currentPage">{currentPage}</span>/<span id="totalPages">{Math.ceil(tableData.length / pageSize)}</span>
            <button onClick={goToNextPage}>&gt;</button>
            <button onClick={goToLastPage}>&gt;&gt;</button>
          </div>
        </div>
        <table className="studentList">
          <thead>
            <tr>
              <th onClick={() => sortList('name')}>Name ▲▼</th>
              <th onClick={() => sortList('rollNo')}>Roll No ▲▼</th>
              <th onClick={() => sortList('department')}>Department ▲▼</th>
              <th onClick={() => sortList('degree')}>Degree ▲▼</th>
              <th onClick={() => sortList('dob')}>DoB ▲▼</th>
              <th onClick={() => sortList('city')}>City ▲▼</th>
              <th onClick={() => sortList('interest')}>Interest ▲▼</th>
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
                <button>View</button>
                  <button>Edit</button>
                  <button onClick={() => deleteStudent(index)}>Delete</button>
                  </td> {/* Replace with actual action buttons */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;
