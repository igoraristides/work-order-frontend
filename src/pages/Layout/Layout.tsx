import React from "react";
import AppRoutes from '../../routes/AppRoutes';
import { AppBar, Box, Toolbar } from "@mui/material";
import * as IoIcons from "react-icons/io";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import { BiUserCircle } from 'react-icons/bi'
import { MdDashboard } from 'react-icons/md'
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

import "../../styles/custom.scss";

import logo from '../../assets/logo.png'



interface Props { }

const Layout: React.FC<Props> = () => {

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" style={{ width: '100%', boxShadow: 'none' }}>
                        <Toolbar sx={{ backgroundColor: "#fff", display: 'flex', justifyContent: 'space-between' }}>
                            <img src={logo} width="100px" height="100px" />
                            <BiUserCircle style={{ width: '30px', height: '30px', color: '#036ba2' }} />
                        </Toolbar>
                    </AppBar>
                    <div
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <ProSidebar collapsed={false}>
                            <Menu iconShape="circle">
                                <MenuItem
                                    icon={<MdDashboard />}
                                >
                                    <Link to="/" />
                                    Dashboard
                                </MenuItem>
                                <MenuItem
                                    icon={<AiIcons.AiOutlineUserAdd />}
                                >
                                    <Link to="/client" />
                                    Cadastrar Clientes
                                </MenuItem>
                                <MenuItem
                                    icon={<IoIcons.IoMdPhonePortrait />}
                                >
                                    <Link to="/newDevice" />
                                    Cadastrar Equipamentos
                                </MenuItem>
                            </Menu>
                        </ProSidebar>
                        <AppRoutes />
                    </div>
                </Box>

            </div>
        </div>

    )
}

export default Layout;