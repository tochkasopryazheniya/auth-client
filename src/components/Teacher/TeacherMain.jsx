import React, {useEffect} from 'react';
import TeacherNavbar from "./TeacherNavbar";
import Container from '@mui/material/Container';
import AuthStore from "../../store/AuthStore";
import UsersStore from "../../store/UsersStore";

const TeacherMain = () => {
    const {user} = AuthStore;

    return (
        <>
            <Container maxWidth="sm">
                <TeacherNavbar/>
                <h3 style={{textAlign: 'center', marginTop: '50px'}}>Добро пожаловать, {`${user.name} ${user.lastName}!`}</h3>
                <h4 style={{textAlign: 'center', marginTop: '25px'}}>Ваша роль: {`${user.role}`}</h4>
                <h4 style={{textAlign: 'center', marginTop: '25px'}}>Ваша email: {`${user.email}`}</h4>
            </Container>
        </>
    );
};

export default TeacherMain;