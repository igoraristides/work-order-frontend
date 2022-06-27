import * as React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
    ListItemText,
    Select as MuiSelect,
    SelectProps
} from "@mui/material";
import { HookFormProps } from "../../hooks/UseHookForm/HookFormProps";
import { Controller } from "react-hook-form";

export interface Props {
    items: keyValueSelect[];
}

export interface keyValueSelect {
    key: string;
    value: string;
}

const ControlledSelect: React.FC<Props & SelectProps & HookFormProps> = (props) => {


    return (
        <Controller
            name={props.name}
            control={props.control}
            rules={props.rules}
            defaultValue={props.defaultValue || ""}
            render={({
                field: { onChange, onBlur, name: fieldName, value },
                fieldState: { error },

            }) => (
                <FormControl sx={{ width: "100%", marginBottom: "8px" }}>
                    <InputLabel id="select-client-label">{props.label}</InputLabel>
                    <MuiSelect
                        labelId="select-client-label"
                        label={props.label}
                        id="select-client"
                        onChange={onChange}
                        error={!!error}
                        value={value}
                        onBlur={onBlur}
                        name={fieldName}
                        disabled={props.disabled}
                        required
                    >
                        {props.items.map((obj) => (
                            <MenuItem key={obj.key} value={obj.value}>
                                <ListItemText primary={obj.key} />
                            </MenuItem>
                        ))}
                    </MuiSelect>
                </FormControl>
            )}
        />
    );
};

export default ControlledSelect;
