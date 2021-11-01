import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setsubmittedData] = useState([]);
  const [errors, setErrors] = useState(["wrong"]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName.length > 0 ) {
      const formData = {
        firstName : firstName,
        lastName : lastName,
      };
      const dataArray = [
        ...submittedData, formData
      ];
      setsubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
      // alert("hello");
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  })

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0 
      ? errors.map((errors, index) => {
      return <p key={index} style={{color : "red"}}>
        {errors}
      </p>
  })
    : null }
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;
