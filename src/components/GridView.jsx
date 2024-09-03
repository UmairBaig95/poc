import React, { useEffect, useState } from "react";
import axios from "axios";

const GridView = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10").then((response) => {
      setStudents(response.data.results);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 pt-20">
      {students.map((student, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <img
            src={student.picture.large}
            alt={student.name.first}
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center">
            {student.name.first} {student.name.last}
          </h2>
          <p className="text-center text-gray-600">{student.email}</p>
        </div>
      ))}
    </div>
  );
};

export default GridView;
