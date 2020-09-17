import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker({ name, label, value, onChange }) {
  const convertToDefaultPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefaultPara(name, date))}
        formate="MMM/dd/yyyy"
      />
    </MuiPickersUtilsProvider>
  );
}
