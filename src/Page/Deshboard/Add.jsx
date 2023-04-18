import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (!firstName || !lastName || !date || !salary || !email) {
      return Swal.fire({
        icon: "error",
        title: "error",
        text: "All firlds are required",
        showConfirmButton: true,
      });
    }
    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);
    Swal.fire({
      icon: "success",
      title: "Added",
      text: `${firstName} ${lastName}'s data has been added`,
      showCancelButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="samll-container">
        <form onSubmit={handleSubmit}>
          <h1>Add Employee</h1>
          <label htmlFor="FirstName"> First Name</label>
          <input
            id="firstName"
            type="text"
            ref={textInput}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email"> Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="salary">Salary ($)</label>
          <input
            id="salary"
            type="number"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />

          <lable htmlFor="date">Date</lable>
          <input
            id="date"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div style={{ marginTop: "30px" }}>
            <input type="submit" value="Add" />
            <input
              style={{ marginLeft: "12px" }}
              className="muted-button"
              type="button"
              value="calcle"
              onClick={() => setIsAdding(false)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
