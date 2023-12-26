import React, { useEffect, useRef } from "react";
import TopInterestsChart from "./TopInterestsChart";
import CityDistributionChart from "./CityDistributionChart";
import DepartmentDistributionChart from "./DepartmentDistributionChart";
import DegreeDistributionChart from "./DegreeDistributionChart";
import GenderDistributionChart from "./GenderDistributionChart";
import Chart from "chart.js/auto";
import AgeDistributionChart from "./AgeDistributionChart";
import { Link } from "react-router-dom";

const Dashboard = ({ tableData }) => {
  const interests = tableData.map((student) => student.interest);
  const interestCounts = interests.reduce((acc, interest) => {
    acc[interest] = (acc[interest] || 0) + 1;
    return acc;
  }, {});
  const sortedInterests = Object.keys(interestCounts).sort(
    (a, b) => interestCounts[b] - interestCounts[a]
  );
  const top5Interests = sortedInterests.slice(0, 5);
  const bottom5Interests = sortedInterests.slice(-5);
  const uniqueInterestCount = Object.keys(interestCounts).length;

  const cityCounts = tableData.reduce((acc, student) => {
    acc[student.city] = (acc[student.city] || 0) + 1;
    return acc;
  }, {});
  const cities = Object.keys(cityCounts);
  const cityDistributionData = cities.map((city) => cityCounts[city]);

  const departmentCounts = tableData.reduce((acc, student) => {
    acc[student.department] = (acc[student.department] || 0) + 1;
    return acc;
  }, {});
  const departments = Object.keys(departmentCounts);
  const departmentDistributionData = departments.map(
    (department) => departmentCounts[department]
  );

  const degreeCounts = tableData.reduce((acc, student) => {
    acc[student.degreeTitle] = (acc[student.degreeTitle] || 0) + 1;
    return acc;
  }, {});
  const degrees = Object.keys(degreeCounts);
  const degreeDistributionData = degrees.map((degree) => degreeCounts[degree]);

  const genderCounts = tableData.reduce((acc, student) => {
    acc[student.gender] = (acc[student.gender] || 0) + 1;
    return acc;
  }, {});
  const genders = Object.keys(genderCounts);
  const genderDistributionData = genders.map((gender) => genderCounts[gender]);

  const pieChartTopRef = useRef({ chart: null });

  const createTopInterestsChart = () => {
    // Code for creating the top interests chart
  };

  useEffect(() => {
    createTopInterestsChart();
  }, [top5Interests]);
  // Calculate age data for the Age Distribution Chart
  const ageData = tableData
    .map((student) => {
      const birthYear = new Date(student.dob).getFullYear();
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;
      return { label: `${age - 1}-${age}`, count: 1 };
    })
    .reduce((acc, age) => {
      const label = age.label;
      acc[label] = (acc[label] || 0) + age.count;
      return acc;
    }, {});

  const ageChartData = Object.keys(ageData).map((label) => ({
    label,
    count: ageData[label],
  }));

  return (
    <div>
      <div className="title">Student Interest System</div>
      <div className="navbtns" id="btns">
      <Link to="/">
          <button className="styled-button">Student Register</button>
        </Link>
        <Link to="/StudentList">
            <button className="styled-button">Student List</button>
          </Link>
        
      </div>
      <br />

      <h1>Dashboard</h1>

      {/* Top Interests Chart */}
      <TopInterestsChart
        top5Interests={top5Interests}
        bottom5Interests={bottom5Interests}
      />

      {/* City Distribution Chart */}
      <CityDistributionChart
        cities={cities}
        cityDistributionData={cityDistributionData}
      />

      {/* Department Distribution Chart */}
      <DepartmentDistributionChart
        departments={departments}
        departmentDistributionData={departmentDistributionData}
      />

      {/* Degree Distribution Chart */}
      <DegreeDistributionChart
        degrees={degrees}
        degreeDistributionData={degreeDistributionData}
      />

      {/* Gender Distribution Chart */}
      <GenderDistributionChart
        genders={genders}
        genderDistributionData={genderDistributionData}
      />

      {/* Age Distribution Chart */}
      <AgeDistributionChart ageData={ageChartData} />
    </div>
  );
};

export default Dashboard;
