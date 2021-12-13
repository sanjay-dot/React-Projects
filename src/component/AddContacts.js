import React, { useState } from "react";

const AddContact = ({ setContacts }) => {
  const [EnterdDetails, setDetails] = useState({
    Name: "",
    Email: "",
  });

  const NameHandler = (e) => {
    setDetails({ ...EnterdDetails, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    setContacts((contacts) => [...contacts, EnterdDetails]);
  };
  return (
    <div className="container-fluid bg-light col-7 mt-4 p-3">
      <h3>Add Contacts</h3>
      <form onSubmit={SubmitHandler}>
        <div className="col-md-6 m-auto p-4">
          <label>Contact Name</label>
          
          <input
            type="text"
            className="form-control"
            name="Name"
            placeholder="Enter Contact Name"
            onChange={NameHandler}
          />

          <label className="mt-3">Mail Id</label>
          <input
            type="email"
            className="form-control"
            name="Email"
            placeholder="Enter E-mail"
            d
            onChange={NameHandler}
          />

          <div>
            <button className="btn btn-primary mt-3">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
