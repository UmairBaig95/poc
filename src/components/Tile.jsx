import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Tile = ({ student, onDelete, onEdit }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    event.stopPropagation(); // Prevents triggering onTileClick
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="relative border p-4 rounded-lg shadow  transition cursor-pointer bg-gradient-to-t from-customYellow to-customYellow2  duration-300 ease-in-out bg-[#ededed] hover:shadow-lg hover:scale-[1.04]">
      <div className="absolute max-w-fit top-2 right-2">
        <IconButton
          aria-label="more"
          onClick={(event) => {
            event.stopPropagation();
            handleMenuOpen(event);
          }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          onClick={(e) => e.stopPropagation()}
        >
          <MenuItem
            onClick={() => {
              onEdit(student.id);
              handleMenuClose();
            }}
          >
            <EditIcon sx={{ marginRight: 1,color:"green" }} />
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              onDelete(student.id);
              handleMenuClose();
            }}
          >
            <DeleteIcon sx={{ marginRight: 1,color:"red" }} />
            Delete
          </MenuItem>
        </Menu>
      </div>
      <div className="flex gap-4  items-center justify-start mb-4">
        <img
          src={student.picture}
          alt="Student"
          className="rounded-full w-20 h-20 object-cover"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800">
            {student.name}
          </h2>
          <p className="text-sm text-gray-600">Age: {student.age}</p>
        </div>
      </div>
      <div className="">
        <p className="text-sm text-gray-600">
          {" "}
          <span className="font-bold text-[16px] ">Subject:</span>{" "}
          {student.major}
        </p>
        <p className="text-sm text-gray-600">
          {" "}
          <span className="font-bold text-[16px] ">Location:</span>{" "}
          {student.location}
        </p>
      </div>
    </div>
  );
};

export default Tile;
