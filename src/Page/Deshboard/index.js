import React, { useState } from "react";
import { employeesData } from "../../data";
import Swal from "sweetalert2";
import Header from "./Header";
import Add from "./Add";
import Edit from "./Edit";
import List from "./List";

function Deshboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectEmployee, setSelectEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);
    setSelectEmployee(employee);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure",
      text: "you won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes,delete it",
      cancelButtonText: "No , cancle",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);
        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: `${employees.firstName} ${employees.lastName}'s has been deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  return (
    <>
      <div className="container">
        {/* List */}
        {!isAdding && !isEditing && (
          <>
            <Header setIsAdding={setIsAdding} />
            <List
              employees={employees}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )}
        {/* Add */}
        {isAdding && (
          <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        )}
        {/* Edit */}
        {isEditing && (
          <Edit
            employees={employees}
            selectEmployee={selectEmployee}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </>
  );
}

export default Deshboard;
