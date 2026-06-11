import { useState } from "react";

function SuryanshForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (e) => {
    e.preventDefault();

    const { name, age, email, phone, address } = formData;

    if (name.trim().length <= 3) {
      alert("Name must contain more than 3 letters");
      return;
    }

    if (age < 18) {
      alert("Age must be 18 or above");
      return;
    }

    if (!email.includes("@")) {
      alert("Email must contain @");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    if (address.trim() === "") {
      alert("Address cannot be empty");
      return;
    }

    alert("Registration Successful!");
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>

      <form onSubmit={validateForm}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SuryanshForm;