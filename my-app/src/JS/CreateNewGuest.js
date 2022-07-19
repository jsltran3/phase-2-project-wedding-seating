import React from "react";

function CreateNewGuest({ onAddGuest, attendance, setAttendance, formInput, setFormInput  }) {
	//define the defaults
  // const [attendance, setAttendance] = useState("Invited");
  // const [formInput, setFormInput] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   notes: ""
  // });

  function handleChange(event) {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  }

  function handleRsvpChange(event) {
    setAttendance(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();

		onAddGuest(event)
  }

  return (
    <div>
      <button type="button">Go back</button>
      <h2>New Guest</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formInput.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formInput.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            value={formInput.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Notes:
          <input
            type="text"
            name="notes"
            value={formInput.notes}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <select name="attendance" value={attendance} onChange={handleRsvpChange}>
        <option value="Not Invited">Not Invited</option>
        <option value="Invited">Invited</option>
        <option value="Attending">Attending</option>
        <option value="Declined">Declined</option>
      </select>
    </div>
  );
}

export default CreateNewGuest;
