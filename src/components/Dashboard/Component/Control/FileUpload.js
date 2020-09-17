import React from "react";
import { TextField } from "@material-ui/core";

const FileUpload = ({ error = null, name, onChange, ...other }) => {
  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <TextField
      variant="outlined"
      name={name}
      onChange={(event) =>
        onChange(convertToDefaultPara(name, event.target.files[0]))
      }
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default FileUpload;
