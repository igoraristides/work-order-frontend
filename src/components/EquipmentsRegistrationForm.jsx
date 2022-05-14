import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const EquipamentsRegistration = () => {
  const [inputList, setInputList] = useState([
    {
      marca: "",
      proprietario: "",
      modelo: "",
      sistemaOperacional: "",
      cor: "",
    },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { id, value } = e.target;
    const list = [...inputList];
    list[index][id] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        marca: "",
        proprietario: "",
        modelo: "",
        sistemaOperacional: "",
        cor: "",
        osNumber: "",
      },
    ]);
  };

  return (
    <>
      <Typography variant="h6" p={2} align="center">
        Equipamentos
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        {inputList.map((x, i) => {
          return (
            <Box
              width="100%"
              flexDirection="row"
              display="flex"
              flexWrap="wrap"
              alignItems="center"
            >
              <Box width="33%">
                <TextField
                  disabled
                  label="# Ordem de Serviço"
                  id="osNumber"
                  margin="normal"
                  value={x.osNumber}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box width="33%">
                <TextField
                  required
                  label="Marca"
                  id="marca"
                  margin="normal"
                  value={x.marca}
                  placeholder="ex. Samsumg"
                  onChange={(e) => handleInputChange(e, i)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box width="33%">
                <TextField
                  required
                  label="Proprietário"
                  id="proprietario"
                  margin="normal"
                  value={x.proprietario}
                  onChange={(e) => handleInputChange(e, i)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box width="33%">
                <TextField
                  required
                  label="Modelo"
                  id="modelo"
                  margin="normal"
                  value={x.modelo}
                  onChange={(e) => handleInputChange(e, i)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box width="33%">
                <TextField
                  label="Sistema Operacional"
                  id="sistemaOperacional"
                  margin="normal"
                  value={x.sistemaOperacional}
                  onChange={(e) => handleInputChange(e, i)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box width="33%">
                <TextField
                  label="Cor"
                  id="cor"
                  margin="normal"
                  value={x.cor}
                  onChange={(e) => handleInputChange(e, i)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box p={1}>
                {inputList.length !== 1 && (
                  <Button
                    sx={{ margin: 1 }}
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remover
                  </Button>
                )}
                {inputList.length - 1 === i && (
                  <Button
                    size="small"
                    variant="contained"
                    onClick={handleAddClick}
                  >
                    Adicionar
                  </Button>
                )}
              </Box>
            </Box>
          );
        })}
        <Box textAlign="center">
          <Button variant="contained" type="submit" color="success">
            Cadastrar
          </Button>
        </Box>
      </Box>

      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </>
  );
};

export default EquipamentsRegistration;
