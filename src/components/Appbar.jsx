import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import * as IoIcons from "react-icons/io";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

export default function ButtonAppBar() {
  const [sidebar, setSidebar] = useState(true);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#1d1d1d" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <IoIcons.IoMdMenu onClick={handleSidebar} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Arruma Meu Celola - Criar Ordem de Serviço
          </Typography>
        </Toolbar>
      </AppBar>

      <div
        style={{
          position: "absolute",
          height: "100%",
        }}
      >
        <ProSidebar collapsed={sidebar}>
          <Menu iconShape="circle">
            <MenuItem
              icon={<AiIcons.AiOutlineUserAdd />}
              onClick={handleSidebar}
            >
              <Link to="/" />
              Cadastrar Clientes
            </MenuItem>
            <MenuItem
              icon={<IoIcons.IoMdPhonePortrait />}
              onClick={handleSidebar}
            >
              <Link to="/equipamentos" />
              Cadastrar Equipamentos
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    </Box>
  );
}
