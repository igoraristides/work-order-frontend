import { FC } from "react";
import { Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import * as React from "react";
import { HookFormProps } from "../../../hooks/UseHookForm/HookFormProps";
// @ts-ignore
import InputMask from "react-input-mask";


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
        fieldState: { error },

      }) => (

        props.mask ?
          <InputMask

            mask={props.mask}
            value={value}
            disabled={props.disabled}
            maskChar={props.maskChar}
            onChange={onChange}
          >
            {() => <TextField {...props} />}
          </InputMask>

          :
          <TextField
            {...props}
            helperText={error ? error.message : null}
            onChange={onChange}
            error={!!error}
            value={value}
            onBlur={onBlur}
            name={fieldName}
            defaultValue={undefined}
          />
      )}
    />
  );
};
