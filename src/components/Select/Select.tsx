import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
  ListItemText,
  Select as MuiSelect,
  SelectChangeEvent,
} from "@mui/material";

export interface Props {
  items: keyValueSelect[];
  itemName: string;
  setItemName: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}

export interface keyValueSelect {
  key: string;
  value: string;
}

const Select: React.FC<Props> = (props) => {
  const { items, itemName, setItemName, label } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setItemName(event.target.value as string);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel id="select-client-label">{label}</InputLabel>
        <MuiSelect
          labelId="select-client-label"
          id="select-client"
          value={itemName}
          label={label}
          onChange={handleChange}
          required
        >
          {items.map((obj) => (
            <MenuItem key={obj.key} value={obj.value}>
              <ListItemText primary={obj.key} />
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </div>
  );
};

export default Select;
