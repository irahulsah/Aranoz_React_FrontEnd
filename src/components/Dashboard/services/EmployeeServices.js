const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getDepartmentCollection = () => [
  { id: "1", title: "Department" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Acoounting" },
  { id: "4", title: "HR" },
];

export const insertEmployee = (data) => {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const updateEmployee = (data) => {
  let employees = getAllEmployees();
  let recordIndex = employees.findIndex((x) => x.id === data.id);
  employees[recordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const deleteEmployee = (id) => {
  let employees = getAllEmployees();
  employees = employees.filter((emp) => emp.id !== id);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const generateEmployeeId = () => {
  if (localStorage.getItem(KEYS.employeeId) === null)
    localStorage.setItem(KEYS.employeeId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
};

export const getAllEmployees = () => {
  if (localStorage.getItem(KEYS.employees) === null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  let departments = getDepartmentCollection();

  return employees.map((x) => ({
    ...x,
    department: departments[x.departmentId - 1].title,
  }));
};
// const { sendRequest } = useHttpClient();
// const auth = useContext(AuthContext);

// export const userWithProducts = async () => {
//   try {
//     const result = await sendRequest(
//       `http://localhost:8080/user/${auth.userId}`
//     );
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };
