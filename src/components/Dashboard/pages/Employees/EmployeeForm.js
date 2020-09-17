import React, { useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { useForm, Form } from "../../Component/Hooks/useForm";
import controller from "../../Component/Control/control";

// const genderItems = [
//   { id: "male", title: "Male" },
//   { id: "female", title: "Female" },
//   { id: "other", title: "Other" },
// ];

const initialValues = {
  id: 0,
  productName: "",
  price: "",
  image: null,
};

const usestyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const EmployeeForm = ({ addOrEdit, recordsForEdit }) => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("productName" in fieldValues)
      temp.productName = fieldValues.productName
        ? ""
        : "This Field is required..";
    if ("price" in fieldValues)
      temp.price = fieldValues.price ? "" : "This Field is required..";
    if ("image" in fieldValues)
      temp.image = fieldValues.image ? "" : "This Field is required..";

    setErrors({ ...temp });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };
  const {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialValues, true, validate);

  const classes = usestyles();

  // console.log(values);

  useEffect(() => {
    if (recordsForEdit !== null) setValues({ ...recordsForEdit });
  }, [recordsForEdit, setValues]);

  const submitHandler = (event) => {
    // window.alert("testin");
    event.preventDefault();
    // console.log(values);
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  return (
    <Form className={classes.root} onSubmit={submitHandler}>
      <Grid container>
        <Grid item xs={6}>
          <controller.Input
            variant="outlined"
            label="Product Name"
            name="productName"
            error={errors.productName}
            value={values.productName}
            onChange={handleInputChange}
          />
          <controller.Input
            variant="outlined"
            name="price"
            label="Price"
            type="number"
            error={errors.price}
            value={values.price}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <controller.FileUpload
            variant="outlined"
            name="image"
            type="file"
            accept=".jpg,.png,.jpeg"
            error={errors.image}
            onChange={handleInputChange}
          />

          <div>
            <controller.Button type="Submit" text="Submit" />
            <controller.Button text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
