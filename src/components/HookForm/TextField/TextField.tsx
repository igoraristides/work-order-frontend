import { FC } from "react";
import { Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import * as React from "react";
import { HookFormProps } from "../../../hooks/UseHookForm/HookFormProps";
// @ts-ignore
import MaskedInput from 'react-text-mask';


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

          props.mask?
                  <MaskedInput
                      {...props}
                      render={(ref: React.Ref<any> | undefined, _props: JSX.IntrinsicAttributes & TextFieldProps) => (
                      <TextField
                          inputRef={ref}
                          {..._props}
                      />
                  )}/>
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
