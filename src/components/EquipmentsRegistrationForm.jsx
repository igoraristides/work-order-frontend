import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const EquipamentsRegistration = () => {
  const [inputList, setInputList] = useState([
    {
      brand: "",
      model: "",
      sku: "",
      description: "",
      imageURL: "",
    },
  ]);

  const [equipaments, setEquipaments] = useState();

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
        brand: "",
        model: "",
        sku: "",
        description: "",
        imageURL: "",
      },
    ]);
  };

  const handeSubmit = (e) => {
    e.preventDefault();
    setEquipaments(inputList);
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
        onSubmit={handeSubmit}
      >
        {inputList.map((x, i) => {
          return (
            <Box
              key={i}
              width="100%"
              flexDirection="row"
              display="flex"
              flexWrap="wrap"
              alignItems="center"
            >
              <Box>
                <TextField
                  required
                  label="Marca"
                  id="brand"
                  margin="normal"
                  value={x.brand}
                  placeholder="ex.: Samsumg"
                  onChange={(e) => handleInputChange(e, i)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box>
                <TextField
                  required
                  label="Modelo"
                  id="model"
                  margin="normal"
                  value={x.model}
                  onChange={(e) => handleInputChange(e, i)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box>
                <TextField
                  label="SKU"
                  id="sku"
                  margin="normal"
                  value={x.sku}
                  onChange={(e) => handleInputChange(e, i)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box>
                <TextField
                  required
                  label="URL Imagem"
                  id="imageURL"
                  margin="normal"
                  value={x.imageURL}
                  onChange={(e) => handleInputChange(e, i)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box>
                <TextField
                  label="Descrição"
                  id="description"
                  margin="normal"
                  value={x.description}
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
    </>
  );
};

export default EquipamentsRegistration;
