import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export interface Props {
    items: string[],
    itemsNames: string[],
    setItemsNames: React.Dispatch<React.SetStateAction<string[]>>,
    label: string,
    disable: boolean
}

const MultipleSelectCheckmarks: React.FC<Props> = (props) => {

    const { items, itemsNames, setItemsNames, label, disable } = props;
    const handleChange = (event: SelectChangeEvent<typeof itemsNames>) => {
        const {
            target: { value },
        } = event;
        props.setItemsNames(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    disabled={disable}
                    value={itemsNames}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {items.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={itemsNames.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default MultipleSelectCheckmarks;
