function createStudent() {
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('rollNo').value;
    const department = document.getElementById('department').value;
    const degree = document.getElementById('degree').value;
    const dob = document.getElementById('dob').value;
    const city = document.getElementById('city').value;
    const interest = document.getElementById('interest').value;

    // Capture other input values similarly

    // Create a new student object
    const newStudent = {
        name: name,
        rollNo: rollNo,
        department: department,
        degree: degree,
        dob: dob,
        city: city,
        interest: interest

        // Assign other properties similarly
    };

    // Add the new student to the students array
    students.push(newStudent);

    // Update the student list to reflect the changes
    renderStudentList();

    // Clear the form fields after creating a new student
    document.getElementById('createStudentForm').reset();
}

// Sample data (replace this with your actual data)
const students = [
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' },
    { name: 'John', rollNo: '69', email: 'john@gmail.com', department: 'CS', degree: 'BS', dob: '1/1/2002', city: 'Landi KOtal', interest: 'Muthi' }

];

// Variables for pagination
let pageSize = 10;
let currentPage = 1;

// Function to render the student list
function renderStudentList() {
    const tableBody = document.querySelector('.studentList tbody');
    tableBody.innerHTML = '';

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentStudents = students.slice(startIndex, endIndex);

    console.log('Updated Students List:', students);


    currentStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNo}</td>
            <td>${student.department}</td>
            <td>${student.degree}</td>
            <td>${student.dob}</td>
            <td>${student.city}</td>
            <td>${student.interest}</td>
            <td>
                <a href="#" onclick="viewStudent(${students.indexOf(student)})">View</a>
                <a href="#" onclick="editStudent(${students.indexOf(student)})">Edit</a>
                <a href="#" onclick="deleteStudent(${students.indexOf(student)})">Delete</a>
            </td>
        `;
        tableBody.appendChild(row);
    });

    updatePageNavigator();
}

// Function to update page navigator based on current page and total pages
function updatePageNavigator() {
    const totalPages = Math.ceil(students.length / pageSize);
    document.getElementById('currentPage').innerText = currentPage;
    document.getElementById('totalPages').innerText = totalPages;

    // Enable/disable pagination buttons based on current page
    const firstPageBtn = document.querySelector('button[onclick="goToFirstPage()"]');
    const prevPageBtn = document.querySelector('button[onclick="goToPreviousPage()"]');
    const nextPageBtn = document.querySelector('button[onclick="goToNextPage()"]');
    const lastPageBtn = document.querySelector('button[onclick="goToLastPage()"]');

    firstPageBtn.disabled = currentPage === 1;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
    lastPageBtn.disabled = currentPage === totalPages;
}

// Function to change page size and reload the list
function changePageSize() {
    pageSize = parseInt(document.getElementById('pageSize').value);
    currentPage = 1;
    renderStudentList();
}

// Function to handle sorting of the list
function sortList(column) {
    // Sorting logic goes here (you need to implement this based on your data structure)
    // Assuming ascending order toggle for each column
    students.sort((a, b) => {
        if (a[column] > b[column]) return 1;
        if (a[column] < b[column]) return -1;
        return 0;
    });

    renderStudentList();
}

// Pagination functions
function goToFirstPage() {
    currentPage = 1;
    renderStudentList();
}

function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderStudentList();
    }
}

function goToNextPage() {
    const totalPages = Math.ceil(students.length / pageSize);
    if (currentPage < totalPages) {
        currentPage++;
        renderStudentList();
    }
}

function goToLastPage() {
    const totalPages = Math.ceil(students.length / pageSize);
    currentPage = totalPages;
    renderStudentList();
}

// Sample functions for View, Edit, and Delete actions (replace these with your actual functions)
function viewStudent(index) {
    alert(`Viewing student at index ${index}`);
}

function editStudent(index) {
    alert(`Editing student at index ${index}`);
}

function deleteStudent(index) {
    alert(`Deleting student at index ${index}`);
}

// Initial render
renderStudentList();