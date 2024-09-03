import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const ExpandedView = ({ student, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="p-4 bg-white dark:bg-gray-900">
        <Typography variant="h4">{student.name}</Typography>
        <Typography variant="body1">Age: {student.age}</Typography>
        <Typography variant="body1">Major: {student.major}</Typography>
        <Typography variant="body1">Location: {student.location}</Typography>
        <Button onClick={onClose} className="mt-4">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ExpandedView;
