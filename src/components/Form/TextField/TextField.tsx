import { FC } from "react";
import { Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import * as React from "react";
import { HookFormProps } from "../../../hooks/UseHookForm/HookFormProps";

export const ControlledTextField: FC<HookFormProps & TextFieldProps> = (
  props
) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      defaultValue={props.defaultValue || ""}
      render={({
        field: { onChange, onBlur, name: fieldName, value },
        fieldState: { error }
      }) => (
        <TextField
          {...props}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          name={fieldName}
          defaultValue={undefined}
        />
      )}
    />
  );
};
