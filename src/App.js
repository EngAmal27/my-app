import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
} from "@mui/material";

const GradebookApp = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const handleAddStudent = () => {
    if (name.trim() === "" || grade.trim() === "" || isNaN(grade)) {
      alert("Please enter a valid name and numeric grade.");
      return;
    }
    setStudents([...students, { name, grade: parseFloat(grade) }]);
    setName("");
    setGrade("");
  };

  const calculateAverage = () => {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, student) => sum + student.grade, 0);
    return (total / students.length).toFixed(2);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Gradebook App
        </Typography>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Student Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Grade"
              variant="outlined"
              type="number"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              fullWidth
            />
            <Button
              variant="contained"
              onClick={handleAddStudent}
              fullWidth
              sx={{ mt: 2 }}
            >
              Add Student
            </Button>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">Student List</Typography>
            <List>
              {students.map((student, index) => (
                <ListItem key={index} divider>
                  <ListItemText
                    primary={student.name}
                    secondary={`Grade: ${student.grade}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">
              Class Average: {calculateAverage()}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default GradebookApp;
