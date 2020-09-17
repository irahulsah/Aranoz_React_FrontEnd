import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  makeStyles,
  TablePagination,
} from "@material-ui/core";

const useTable = (records, headCells, filterFn) => {
  const useStyles = makeStyles((theme) => ({
    table: {
      marginTop: theme.spacing(3),
      "& thead th": {
        fontWeight: "600",
        color: theme.palette.primary.main,
        background: theme.palette.primary.light,
      },
      "& tbody td": {
        fontWeight: "300",
      },
      "& tbody tr:hover": {
        background: "#fffbf2",
        cursor: "pointer",
      },
    },
  }));
  const classes = useStyles();

  const TblContainer = (props) => (
    <Table className={classes.table}>{props.children}</Table>
  );
  const TblHead = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headcell) => (
            <TableCell key={headcell.id}> {headcell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(pages[page]);
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const TblPagination = (props) => {
    return (
      <TablePagination
        component="div"
        page={page}
        rowsPerPage={rowPerPage}
        rowsPerPageOptions={pages}
        count={records.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    );
  };

  const recordAfterPaginationandSorting = () => {
    return filterFn
      .fn(records)
      .slice(page * rowPerPage, (page + 1) * rowPerPage);
  };

  return {
    TblContainer,
    TblHead,
    TblPagination,
    recordAfterPaginationandSorting,
  };
};

export default useTable;
