import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UsersStore from "../../store/UsersStore";
import Container from "@mui/material/Container";
import TeacherNavbar from "./TeacherNavbar";
import {observer} from "mobx-react-lite";

const TeacherUsers = () => {
    const {users, getUsers} = UsersStore;

    useEffect(() => {
        getUsers();
    }, [])
    return (
        <Container maxWidth="lg">
            <TeacherNavbar/>
            <TableContainer style={{marginTop: '50px'}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Пользователь</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Роль</TableCell>
                            <TableCell align="right">Активирован</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {`${row.name} ${row.lastName}`}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.role}</TableCell>
                                <TableCell align="right">{`${row.isActivated}`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default observer(TeacherUsers);