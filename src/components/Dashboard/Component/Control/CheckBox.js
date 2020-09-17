import React from "react";
import {
  Checkbox as MuiCheckBox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";

const CheckBox = ({ label, name, value, onChange }) => {
  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={
          <MuiCheckBox
            name={name}
            checked={value}
            onChange={(e) =>
              onChange(convertToDefaultPara(name, e.target.checked))
            }
          />
        }
      />
    </FormControl>
  );
};

export default CheckBox;
