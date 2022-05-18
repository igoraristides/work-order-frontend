import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Clients, Equipaments } from '../../api/api';
import CircularProgress from '@mui/material/CircularProgress';
import { ClientResponseDto } from '../../api/dtos/ClientDto';
import { EquipamentResponseDto } from '../../api/dtos/EquipamentDto';

const Dashboard: React.FC<any> = () => {


    const [clients, setClients] = React.useState<ClientResponseDto[]>([]);
    const [equipaments, setEquipaments] = React.useState<EquipamentResponseDto[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    const init = async () => {
        setLoading(true)
        try {

            var responseClient = await Clients();
            var responseEquipaments = await Equipaments();

            setClients(responseClient.data);

            setEquipaments(responseEquipaments.data);
            setLoading(false);

        } catch (error) { }
    }

    React.useEffect(() => { init() }, []);

    return (


        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" p={4} align="center" color='#036ba2'>
                    Clientes
                </Typography>

                <TableContainer component={Paper} sx={{ maxWidth: '80%', maxHeight: '300px', padding: '20px', margin: '30px' }} >
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
                                {clients.map((client) => (
                                    <TableRow
                                        key={client.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {client.name}
                                        </TableCell>
                                        <TableCell align="right">{client.Phone[0]?.number}</TableCell>
                                        <TableCell align="right">{client.Email[0]?.address}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </TableContainer>

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" p={4} align="center" color='#036ba2'>
                    Equipamentos
                </Typography>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <TableContainer component={Paper} sx={{ maxWidth: '80%', maxHeight: '300px', padding: '20px', margin: '30px' }}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Marca</TableCell>
                                    <TableCell align="right">Modelo</TableCell>
                                    <TableCell align="right">Descrição</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {equipaments.map((equipament) => (
                                    <TableRow
                                        key={equipament.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {equipament.brand}
                                        </TableCell>
                                        <TableCell align="right">{equipament.model}</TableCell>
                                        <TableCell align="right">{equipament.description}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )} </div>
        </div>

    );
}

export default Dashboard;