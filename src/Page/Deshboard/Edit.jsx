import React, { useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ employees, selectEmployee, setEmployees, setIsEditing }) => {
  const id = selectEmployee.id;
  const [firstName, setFirstName] = useState(selectEmployee.firstName);
  const [lastName, setLastName] = useState(selectEmployee.lastName);
  const [email, setEmail] = useState(selectEmployee.email);
  const [salary, setSalary] = useState(selectEmployee.salary);
  const [date, setDate] = useState(selectEmployee.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All firlds are required.",
        showConfirmButton: true,
      });
    }
    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }
    setEmployees(employees);
    setIsEditing(false);
    Swal.fire({
      icon: "success",
      title: "Updated",
      text: `${firstName} ${lastName}'s Updated`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="small-container">
        <form onSubmit={handleSubmit}>
          <h1>Edit Employee</h1>
          <label htmlFor="firstName"> First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="salary">Salary</label>
          <input
            id="salary"
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <label htmlFor="date">Date</label>
          <input
            id="number"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div style={{ marginTop: "30px" }}>
            <input type="submit" value="Update" />
            <input
              style={{ marginLeft: "12px" }}
              className="muted-button"
              type="button"
              value="Cancel"
              onClick={() => setIsEditing(false)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
