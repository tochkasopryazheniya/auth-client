import React from 'react';
import StudentNavbar from "./StudentNavbar";
import TeacherNavbar from "../Teacher/TeacherNavbar";
import Container from "@mui/material/Container";
import AuthStore from "../../store/AuthStore";

const StudentMain = () => {
    const {user} = AuthStore;
    return (
        <>
            <Container maxWidth="sm">
                <StudentNavbar/>
                <h3 style={{textAlign: 'center', marginTop: '50px'}}>Здоров, {`${user.name} ${user.lastName}!`}</h3>
                <h4 style={{textAlign: 'center', marginTop: '25px'}}>Ваша роль: {`${user.role}`}</h4>
                <h4 style={{textAlign: 'center', marginTop: '25px'}}>Ваша email: {`${user.email}`}</h4>
            </Container>
        </>
    );
};

export default StudentMain;