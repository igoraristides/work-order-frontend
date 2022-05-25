import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import { Clients, Equipaments, ServiceOrder, Services, UpdateStatus } from "../../api/api";
import CircularProgress from "@mui/material/CircularProgress";
import { ClientResponseDto } from "../../api/dtos/ClientDto";
import { EquipamentResponseDto } from "../../api/dtos/EquipamentDto";
import { ServiceResponseDto } from "../../api/dtos/ServiceDto";
import { ServiceOrderResponseDto } from "../../api/dtos/ServiceOrderDto";
import { toast } from "react-toastify";
import { ChangeStatus } from "../../api/dtos/updateStatus";

const Dashboard: React.FC<any> = () => {
  const [clients, setClients] = React.useState<ClientResponseDto[]>([]);

  const [equipaments, setEquipaments] = React
    .useState<EquipamentResponseDto[]>([]);

  const [services, setServices] = React.useState<ServiceResponseDto[]>([]);

  const [serviceOrders, setServiceOrders] = React
    .useState<ServiceOrderResponseDto[]>([]);

  const [loading, setLoading] = React.useState<boolean>(false);


  const init = async () => {
    setLoading(true);
    try {
      var responseClient = await Clients();
      var responseEquipaments = await Equipaments();
      var responseServices = await Services();
      var responseServiceOrders = await ServiceOrder();

      setClients(responseClient.data);
      setEquipaments(responseEquipaments.data);
      setServices(responseServices.data);
      setServiceOrders(responseServiceOrders.data);
      setLoading(false);
    } catch (error) { }
  };

  React.useEffect(() => {
    init();
  }, []);

  const changeStatus = async (serviceOrder: ServiceOrderResponseDto) => {

    let changeStatus: ChangeStatus = {
      id: serviceOrder.id,
      workOrderStatus: {
        id: parseInt(serviceOrder.id)
      }
    }

    switch (serviceOrder.WorkOrderStatus.id) {

      case Status.APPROVAL:

        changeStatus.workOrderStatus.id = Status.IN_PROGRESS

        try {
          const response = await UpdateStatus(changeStatus);
          toast.success("Status da ordem de serviço atualizado com sucesso");

        } catch {
          toast.error("Falha ao cadastrar usuário");

        }
        window.location.reload();
        break;

      case Status.IN_PROGRESS:
        changeStatus.workOrderStatus.id = Status.FINALIZED

        try {
          const response = await UpdateStatus(changeStatus);
          toast.success("Status da ordem de serviço atualizado com sucesso");

        } catch {
          toast.error("Falha ao cadastrar usuário");

        }
        window.location.reload();
        break;

      default:

    }

    console.log(serviceOrder)

  }

  return (
    <Box display="flex" flexDirection="row" width="100%" flexWrap="wrap">
      <Box width="50%">
        <Typography variant="h5" marginTop={4} align="center" color="#036ba2" style={{ maxWidth: "90%" }}>
          Clientes
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "80%",
            maxHeight: "300px",
            padding: "20px",
            margin: "20px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome Completo</TableCell>
                  <TableCell align="right">Telefone</TableCell>
                  <TableCell align="right">E-mail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clients.map((client, i) => (
                  <TableRow
                    key={client.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      ...(i % 2 == 0 && { backgroundColor: "#bde0fe" }),
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {client.name}
                    </TableCell>
                    <TableCell align="right">
                      {client.Phone[0]?.number}
                    </TableCell>
                    <TableCell align="right">
                      {client.Email[0]?.address}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Box>
      <Box width="50%">
        <Typography variant="h5" marginTop={4} align="center" color="#036ba2" style={{ maxWidth: "90%" }}>
          Equipamentos
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "80%",
            maxHeight: "300px",
            padding: "20px",
            margin: "20px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Marca</TableCell>
                  <TableCell align="right">Modelo</TableCell>
                  <TableCell align="right">Descrição</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {equipaments.map((equipament, i) => (
                  <TableRow
                    key={equipament.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      ...(i % 2 == 0 && { backgroundColor: "#bde0fe" }),
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {equipament.brand}
                    </TableCell>
                    <TableCell align="right">{equipament.model}</TableCell>
                    <TableCell align="right">
                      {equipament.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>

      </Box>
      <Box width="50%">
        <Typography variant="h5" marginTop={4} align="center" color="#036ba2" style={{ maxWidth: "90%" }}>
          Serviços
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "80%",
            maxHeight: "300px",
            padding: "20px",
            margin: "20px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Descrição</TableCell>
                  <TableCell align="right">Tempo Estimado</TableCell>
                  <TableCell align="right">Preço do Material</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((service, i) => (
                  <TableRow
                    key={service.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      ...(i % 2 == 0 && { backgroundColor: "#bde0fe" }),
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {service.description}
                    </TableCell>
                    <TableCell align="right">
                      {service.estimatedTimeCost}
                    </TableCell>
                    <TableCell align="right">
                      {service.estimatedMaterialCost}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>

      </Box>
      <Box width="50%">
        <Typography variant="h5" marginTop={4} align="center" color="#036ba2" style={{ maxWidth: "90%" }}>
          Ordens de Serviço
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "80%",
            maxHeight: "300px",
            padding: "20px",
            margin: "20px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Nome do Cliente</TableCell>
                  <TableCell align="center">ID do Serviço</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Atualizar Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {serviceOrders.map((serviceOrder, i) => (
                  <TableRow
                    key={serviceOrder.Client.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      ...(i % 2 == 0 && { backgroundColor: "#bde0fe" }),
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {serviceOrder.Client.name}
                    </TableCell>
                    <TableCell align="center">
                      {serviceOrder.Task[0].id}
                    </TableCell>
                    <TableCell align="center">
                      {serviceOrder.WorkOrderStatus.description}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color={"primary"}
                        onClick={() => changeStatus(serviceOrder)}
                      >
                        Atualizar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;


export enum Status {
  APPROVAL = 1,
  IN_PROGRESS = 2,
  FINALIZED = 3
}