import React from "react";
import { TextField } from "@material-ui/core";

const Input = ({ label, value, error = null, name, onChange, ...other }) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default Input;
