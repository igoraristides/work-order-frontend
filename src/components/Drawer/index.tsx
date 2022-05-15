import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import AppRoutes from '../../routes/AppRoutes';
import { makeStyles } from '@mui/material';

interface Props { }

const MyDrawer: React.FC<Props> = () => {

    const applicationName: string = process.env.REACT_APP_TITLE || '';

    const navigate = useNavigate();
    const location = useLocation();

    const classes = {
        drawer: {
            width: 240,
            ".MuiDrawer-paper": {
                width: 240,
            },
        },
    }

    return (

        <Drawer
            anchor='left'
            variant='permanent'
            sx={classes.drawer}
            open={true}>

            <p>oi</p>
        </Drawer>

    )
}

export default MyDrawer;