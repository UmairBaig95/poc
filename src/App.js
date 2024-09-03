import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GridView from "./components/GridView";
import TileView from "./components/TileView";
import ExpandedView from "./components/ExpandedView";

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const handleTileClick = (student) => {
    setSelectedStudent(student);
  };

  const handleBackClick = () => {
    setSelectedStudent(null);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        // Map the data to our desired structure
        const mappedStudents = data.results.map((user) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          age: user.dob.age,
          major: "Computer Science",
          picture: user.picture.large,
          email: user.email,
          phone: user.phone,
          location: `${user.location.city}, ${user.location.country}`,
        }));
        setStudents(mappedStudents);
      })
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <TileView students={[...students]} onTileClick={handleTileClick} />
          }
        />
        <Route
          path="/about"
          element={
            selectedStudent ? (
              <ExpandedView
                student={selectedStudent}
                onBackClick={handleBackClick}
              />
            ) : (
              <GridView />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
