import React, { useState } from "react";

function RegisterForm({ onSwitch }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Data pendaftaran:", form);
    }
  };

  return (
    <div className="Register-form">
      <h2>Daftar / Register</h2>

      <form onSubmit={handleSubmit}>
        <label>Nama Depan</label>
        <input
          type="text"
          name="firstName"
          placeholder="Masukkan Nama Depan"
          value={form.firstName}
          onChange={handleChange}
        />{" "}
        {errors.firstName && <p className="error">{errors.firstName}</p>}
        <label>Nama Belakang</label>
        <input
          type="text"
          name="lastName"
          placeholder="Masukkan Nama Belakang"
          value={form.lastName}
          onChange={handleChange}
        />{" "}
        {errors.lastName && <p className="error">{errors.lastName}</p>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Masukkan Email"
          value={form.email}
          onChange={handleChange}
        />{" "}
        {errors.email && <p className="error">{errors.email}</p>}
        <label>Nomor Handphone</label>
        <input
          type="text"
          name="phone"
          placeholder="Masukkan Nomor Handphone"
          value={form.phone}
          onChange={handleChange}
        />{" "}
        {errors.phone && <p className="error">{errors.phone}</p>}
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Masukkan Password"
          value={form.password}
          onChange={handleChange}
        />{" "}
        {errors.password && <p className="error">{errors.password}</p>}
        <button className="login-btn" onClick={(e) => handleSubmit(e)}>
          Daftar
        </button>
      </form>

      <div className="register-text" onClick={onSwitch}>
        <a> Sudah punya akun?</a>
      </div>
    </div>
  );
}

export default RegisterForm;
