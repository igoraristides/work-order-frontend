import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import AppRoutes from '../../routes/AppRoutes';
import MyDrawer from '../../components/Drawer';

interface Props { }

const Layout: React.FC<Props> = () => {

    const applicationName: string = process.env.REACT_APP_TITLE || '';

    const navigate = useNavigate();
    const location = useLocation();


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <MyDrawer />
                <AppRoutes />
            </div>
        </div>

    )
}

export default Layout;