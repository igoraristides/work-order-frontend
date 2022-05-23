import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { toast } from "react-toastify";
import MultipleSelectCheckmarks from "../../components/MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import Select from "../../components/Select/Select";


const ServiceOrderRegistrationForm: React.FC<any> = () => {

  const names: string[] = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const HandleSubmit = async (formValues: any) => {


  }


  const [equipaments, setEquipaments] = useState<string[]>([])
  const [services, setServices] = useState<string[]>([])
  const [client, setClient] = useState<string>("")


  return (
    <Box style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <Select items={names} setItemName={setClient} itemName={client} label="Cliente" />
        <MultipleSelectCheckmarks items={names} setItemsNames={setEquipaments} itemsNames={equipaments} label="Equipamentos" disable={false} />
        <MultipleSelectCheckmarks items={names} setItemsNames={setServices} itemsNames={services} label="Serviços" disable={true} />
        <TextField id="outlined-basic" label="Observação" variant="outlined" multiline rows={4} />
      </Box>
      <Box textAlign="center">
        <Button variant="contained" type="submit" color={"primary"} style={{ marginTop: '20px' }}>
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceOrderRegistrationForm;
