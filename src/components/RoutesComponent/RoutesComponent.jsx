import React from 'react';
import {observer} from "mobx-react-lite";
import {Route, Routes, Navigate} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import authStore from "../../store/AuthStore";
import NewLogin from "../NewLogin";
import NewRegistration from "../NewRegistration";
import TeacherMain from "../Teacher/TeacherMain";
import StudentMain from "../Student/StudentMain";
import TeacherUsers from "../Teacher/TeacherUsers";
import StudentTasks from "../Student/StudentTasks";

const RoutesComponent = () => {
    const {isAuth, user} = authStore
    return (
        <Routes>
            <Route path='/login' element={
                isAuth ? <Navigate to={'/'}/> : <NewLogin/>
            }/>
            <Route path='/registration' element={<NewRegistration/>}/>
            <Route path='/' element={
                <PrivateRoute isAllowed={isAuth} redirectPath='/login'>
                    {user.role === 'teacher' ? <TeacherMain/> : <StudentMain/>}
                </PrivateRoute>
            }/>
            <Route path='/users' element={
                <PrivateRoute isAllowed={isAuth && user.role === 'teacher'} redirectPath='/'>
                    <TeacherUsers/>
                </PrivateRoute>
            }/>
            <Route path='/tasks' element={
                <PrivateRoute isAllowed={isAuth && user.role === 'student'} redirectPath='/'>
                    <StudentTasks/>
                </PrivateRoute>
            }/>
        </Routes>
    );
};

export default observer(RoutesComponent);