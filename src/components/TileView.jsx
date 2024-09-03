import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import ModalComponent from "./modal";
import Input from "./inputField";

const TileView = ({ students, onTileClick }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [studentList, setStudentList] = useState([]);

  const handleDelete = (studentId) => {
    setStudentList((prevStudents) =>
      prevStudents.filter((student) => student.id !== studentId)
    );
  };

  const handleEdit = (studentId) => {
    const student = studentList.find((s) => s.id === studentId);
    setSelectedStudent(student);
    setEditModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setStudentList((prevStudents) =>
      prevStudents.map((student) =>
        student.id === selectedStudent.id ? selectedStudent : student
      )
    );
    setEditModalOpen(false);
  };

  useEffect(() => {
    setStudentList(students);
  }, [students]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#605c5c] lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 pt-20  ">
      {studentList?.map((student, index) => (
        <Tile
          key={index}
          student={student}
          onTileClick={onTileClick}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
      <ModalComponent
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSave}
        title={"Edit Student"}
        content={
          <div className="flex flex-col gap-4 ">
            <Input
              placeholder="Name"
              label="Name"
              name="name"
              value={selectedStudent?.name || ""}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Major"
              label="Subject"
              name="major"
              value={selectedStudent?.major || ""}
              onChange={handleInputChange}
            />
          </div>
        }
      />
    </div>
  );
};

export default TileView;
