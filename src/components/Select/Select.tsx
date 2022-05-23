import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent, Select as MuiSelect, ListItemText } from '@mui/material';

export interface Props {
    items: string[],
    itemName: string,
    setItemName: React.Dispatch<React.SetStateAction<string>>,
    label: string,
}

const Select: React.FC<Props> = (props) => {

    const { items, itemName, setItemName, label } = props;

    const handleChange = (event: SelectChangeEvent) => {
        setItemName(event.target.value as string);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel id="select-client-label">Cliente</InputLabel>
                <MuiSelect
                    labelId="select-client-label"
                    id="select-client"
                    value={itemName}
                    label="Cliente"
                    onChange={handleChange}
                    required
                >
                    {items.map((name) => (
                        <MenuItem key={name} value={name} >
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </MuiSelect>
            </FormControl>
        </div>
    );
}

export default Select;
