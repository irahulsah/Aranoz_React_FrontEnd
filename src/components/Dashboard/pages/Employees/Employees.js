import React, { useState, useContext, useEffect } from "react";

import EmployeeForm from "./EmployeeForm";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PageHeader from "../../Component/PageHeader/PageHeader";
import PopUp from "../../Component/Control/PopUp";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import { Search, Add, Edit, Delete } from "@material-ui/icons";
import useTable from "../../Component/Hooks/useTable";

import controller from "../../Component/Control/control";
import ActionButton from "../../Component/Control/ActionButton";
import { useHttpClient } from "../../../Shared/hooks/http-hook";
import { AuthContext } from "../../../Shared/context/AuthContext";
import LoadingSpinner from "../../Component/Control/LoadingSpinner";

const headCells = [
  { id: "productName", label: "Product Name" },
  { id: "email", label: "Price" },
  { id: "image", label: "Image" },

  { id: "actions", label: "Actions" },
];
const productIntialValue = [
  {
    id: 0,
    productName: "",
    price: "",
    image: "",
  },
];
const Employees = () => {
  const auth = useContext(AuthContext);
  // console.log(auth);
  const useStyles = makeStyles((theme) => ({
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
    },
    searchInput: {
      width: "75%",
    },
    addNewButton: {
      position: "absolute",
      right: "10px",
    },
  }));
  const classes = useStyles();

  const { sendRequest } = useHttpClient();
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState(productIntialValue);
  const [filterFn, setFilterFn] = useState({ fn: (items) => items });
  const [recordsForEdit, setRecordsForEdit] = useState(null);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    content: "",
  });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordAfterPaginationandSorting,
  } = useTable(records, headCells, filterFn);
  // console.log(records);
  const [openPopUp, setOpenPopUp] = useState(false);
  const { token, userId } = useContext(AuthContext);

  useEffect(() => {
    const userWithProducts = async () => {
      try {
        // console.log(process.env);
        setIsLoading(true);
        const result = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/user/${userId}`,
          "GET",
          { Authorization: "Bearer " + token }
        );
        // console.log(result.products);
        // console.log(result);
        setRecords(result.products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    userWithProducts();
  }, [sendRequest, userId]);

  // console.log(isLoading);

  const handleSearch = (e) => {
    const { value } = e.target;
    setFilterFn({
      fn: (items) => {
        if (value === "") return items;
        else
          return items.filter((item) =>
            item.fullName.toLowerCase().includes(value)
          );
      },
    });
  };

  const updateEditedProduct = (records, product) => {
    let recordsData = [...records];
    // console.log(recordsData);
    let recordIndex = recordsData.findIndex((x) => x._id === product._id);
    // console.log(recordIndex);
    recordsData[recordIndex] = { ...product };
    return recordsData;
  };

  const addOrEdit = async (product, resetForm) => {
    // console.log(product);
    let responseData;
    setIsLoading(true);
    if (product.id === 0) {
      const formData = new FormData();
      formData.append("productName", product.productName);
      formData.append("price", product.price);
      formData.append("image", product.image);
      formData.append("creator", auth.userId);
      responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/add-product",
        "POST",
        { Authorization: "Bearer " + auth.token },
        formData
      );
      setRecords([...records, responseData.product]);
    } else {
      const formData = new FormData();
      formData.append("productName", product.productName);
      formData.append("price", product.price);
      formData.append("image", product.image);
      try {
        responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/${product.id}`,
          "PATCH",
          { Authorization: "Bearer " + auth.token },
          formData
        );
        // console.log(formData);
        // console.log(responseData.product);
        setRecords(updateEditedProduct(records, responseData.product));

        // setRecords([...records, responseData.product]);
      } catch (error) {
        // console.log(error);
      }

      // console.log(responseData.product);
    }
    setRecordsForEdit(null);
    resetForm();
    setOpenPopUp(false);
    setIsLoading(false);
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "success",
    });
  };
  // console.log(records);

  const addButtonHandler = () => {
    setOpenPopUp(true);
    setRecordsForEdit(null);
  };

  const openInPopUp = (item) => {
    setRecordsForEdit(item);
    setOpenPopUp(true);
  };

  const onDeleteHandler = async (id) => {
    setConfirmDialog({ isOpen: false });
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/${id}`,
        "DELETE",
        {
          Authorization: "Bearer " + token,
        }
      );
    } catch (error) {
      // console.log(error);
    }
    setRecords((prevProduct) => prevProduct.filter((prod) => prod.id !== id));

    // employeeService.deleteEmployee(id);
    // setRecords(employeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: "Deleted Successfully",
      type: "error",
    });
  };
  // console.log(confirmDialog);
  return (
    <>
      {" "}
      <PageHeader
        title="Dashboard"
        description="manage everything u want"
        icon={<DashboardIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <controller.Input
            label="Search Employees"
            className={classes.searchInput}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <controller.Button
            className={classes.addNewButton}
            variant="outlined"
            text="Add New"
            onClick={addButtonHandler}
            startIcon={<Add />}
          />
        </Toolbar>

        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <TblContainer>
            <TblHead />

            <TableBody>
              {recordAfterPaginationandSorting().map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.image}</TableCell>
                  <TableCell>
                    <ActionButton color="primary">
                      <Edit
                        fontSize="small"
                        onClick={() => openInPopUp(item)}
                      />{" "}
                    </ActionButton>

                    <ActionButton color="secondary">
                      <Delete
                        fontSize="small"
                        onClick={() =>
                          setConfirmDialog({
                            isOpen: true,
                            title: "Are you sure You want to Delete",
                            content: "You can't undo the process.",
                            onConfirm: () => {
                              onDeleteHandler(item.id);
                            },
                          })
                        }
                      />{" "}
                    </ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
        )}
        <TblPagination />
      </Paper>
      <PopUp
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
        title="Employee Form"
      >
        <EmployeeForm addOrEdit={addOrEdit} recordsForEdit={recordsForEdit} />
      </PopUp>
      <controller.Notification notify={notify} setNotify={setNotify} />
      <controller.ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
        onClick={() => onDeleteHandler()}
      />
    </>
  );
};

export default Employees;
