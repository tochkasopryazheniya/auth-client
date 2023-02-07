import React from 'react';
import StudentNavbar from "./StudentNavbar";
import Container from "@mui/material/Container";

const StudentTasks = () => {
    return (
        <Container maxWidth="sm">
            <StudentNavbar/>
            <h3 style={{textAlign: 'center', marginTop: '50px'}}>Задания на решения</h3>
        </Container>
    );
};

export default StudentTasks;