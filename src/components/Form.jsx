//react form
import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validation = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name should be more than 3 characters";
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (Number(formData.age) < 18) {
      newErrors.age = "Age should be greater than 18";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid Mobile";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address can't be Empty";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      alert("Form submitted successfully");
      setFormData({
        name: "",
        age: "",
        mobile: "",
        email: "",
        address: "",
      });
      setErrors({});
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <div style={{ border: "1px solid #000", padding: "20px" }}>
        <h3>User Registration Form</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          {errors.name ? (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.name}
            </span>
          ) : null}

          <br />

          <label htmlFor="">Age</label>
          <br />
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <br />
          {errors.age ? (
            <span style={{ color: "red", fontSize: "12px" }}>{errors.age}</span>
          ) : null}
          <br />

          <label htmlFor="">Mobile</label>
          <br />
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <br />
          {errors.mobile ? (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.mobile}
            </span>
          ) : null}
          <br />

          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          {errors.email ? (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.email}
            </span>
          ) : null}
          <br />

          <label htmlFor="">Address</label>
          <br />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <br />
          {errors.address ? (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.address}
            </span>
          ) : null}
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
