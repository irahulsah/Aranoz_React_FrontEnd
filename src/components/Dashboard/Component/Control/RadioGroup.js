import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
const RadioGroup = (props) => {
  const { name, label, onChange, value, items } = props;
  // console.log(items);
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            label={item.title}
            value={item.id}
            control={<Radio />}
          ></FormControlLabel>
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
