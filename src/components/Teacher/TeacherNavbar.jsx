import React from 'react';
import AuthStore from "../../store/AuthStore";
import {Link, useLocation} from "react-router-dom";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon  from '@mui/icons-material/Group';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";

const TeacherNavbar = () => {
    const { logout } = AuthStore;
    const {pathname} = useLocation();
    const [value, setValue] = React.useState(pathname);

    return (
        <>
            <Container maxWidth="sm">
                <Box className='gradient' sx={{ width: 500 }}>
                    <BottomNavigation
                        className='gradient'
                        value={value}
                        showLabels
                        onChange={(e) => setValue(e.target.value)}
                    >
                        <BottomNavigationAction value='/' component={Link} to='/' label="Главная" icon={<HomeIcon />} />
                        <BottomNavigationAction value='/users' component={Link} to='/users' label="Пользователи" icon={<GroupIcon />} />
                        <BottomNavigationAction onClick={() => logout()} component={Link} to='/login' label="Выход" icon={<ExitToAppIcon />} />
                    </BottomNavigation>
                </Box>
            </Container>

        </>
    );
};

export default TeacherNavbar;