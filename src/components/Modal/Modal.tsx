import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import * as React from "react";
import { Equipaments, Services } from "../../api/api";
import MultipleSelectCheckmarks from "../MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import Select, { keyValueSelect } from "../Select/Select";



export interface Props {
    buttonLabel: string;
    tasks: React.Dispatch<React.SetStateAction<any[]>>;
    setIsValid: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const Modal: React.FC<Props> = (props) => {

    const { buttonLabel, tasks, setIsValid } = props;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [servicesList, setServicesList] = React.useState<keyValueSelect[]>([]);
    const [equipamentsList, setEquipamentsList] = React.useState<keyValueSelect[]>([]);

    const [equipament, setEquipament] = React.useState<string>("");

    const [service, setService] = React.useState<string[]>([]);


    const init = async () => {
        try {

            var responseEquipaments = (await Equipaments()).data;
            var responseServices = (await Services()).data;

            setEquipamentsList([]);
            responseEquipaments.forEach(element => {
                setEquipamentsList(prevState => [...prevState, { key: element.brand + " " + element.model, value: element.id.toString() }])
            });

            setServicesList([]);
            responseServices.forEach(element => {
                setServicesList(prevState => [...prevState, { key: element.description, value: element.id.toString() }])
            });

        } catch (error) { }
    };

    React.useEffect(() => {
        init();
    }, []);


    const Add = () => {

        if (equipament !== "" || service.length !== 0) {

            var services = service.map(e => {
                return { id: parseInt(e) }
            });

            var deviceID = parseInt(equipament);

            tasks(prevState => [...prevState, { services, deviceID }]);
            setIsValid(true);
            setEquipament("");
            setService([]);
            init();
        }
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", paddingTop: '10px', paddingBottom: '10px' }}>
            <Button onClick={handleOpen} style={{ color: "#036ba2" }}>{buttonLabel}</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{ display: "flex", marginLeft: '780px' }}
            >
                <DialogTitle id="alert-dialog-title" sx={{ color: "#036ba2" }}>
                    Escolha dispositivos e servi??os que deseja incluir na ordem de servi??o
                </DialogTitle>
                <DialogContent style={{ display: 'flex', flexDirection: 'column' }}>
                    <Select
                        items={equipamentsList}
                        setItemName={setEquipament}
                        itemName={equipament}
                        label="Equipamentos"
                    />
                    <MultipleSelectCheckmarks
                        items={servicesList}
                        setItemsNames={setService}
                        itemsNames={service}
                        label="Servi??os"
                        disable={!equipament.length}
                    />

                </DialogContent>
                <DialogContent>
                    <Button onClick={Add}>Adicionar</Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Modal;
